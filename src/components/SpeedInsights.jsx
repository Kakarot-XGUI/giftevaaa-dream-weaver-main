import { useEffect, useState } from "react";

// Lightweight UI-only integration for @vercel/speed-insights
// - Dynamically imports the package at runtime to avoid bundling server-only code
// - Uses the current origin as the URL to analyze (works best after deployment)
// - Falls back silently if the import or network call fails

const SpeedInsights = ({ strategy = "mobile", showDesktop = false }) => {
  const [score, setScore] = useState(null);
  const [desktopScore, setDesktopScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const host = window.location.hostname;
        const isLocal =
          host === "localhost" ||
          host === "127.0.0.1" ||
          host === "::1" ||
          host.endsWith(".local") ||
          host.startsWith("192.168.");

        // Avoid calling PSI during local dev to prevent noisy console errors and rate-limiting
        if (isLocal) {
          if (mounted) {
            setError("local");
            setLoading(false);
          }
          return;
        }

        const origin = window.location.origin;
        // Simple cache to avoid repeated calls (12 hours)
        const cacheKey = `speed-insights:${origin}:${strategy}`;
        const ttl = 12 * 60 * 60 * 1000; // 12 hours

        // Cooldown key to avoid hammering PSI if we receive 429s
        const cooldownKey = `speed-insights:cooldown:${origin}:${strategy}`;
        try {
          const cooldownRaw = localStorage.getItem(cooldownKey);
          if (cooldownRaw && Date.now() < Number(cooldownRaw)) {
            // We're in cooldown; use cache if available, else show rate-limited error
            const raw = localStorage.getItem(cacheKey) || sessionStorage.getItem(cacheKey);
            if (raw) {
              const parsed = JSON.parse(raw);
              if (mounted) {
                setScore(parsed.score ?? null);
                if (showDesktop) setDesktopScore(parsed.desktopScore ?? null);
                setError("rate_limited_cached");
                setLoading(false);
              }
              return;
            } else {
              if (mounted) {
                setError("rate_limited");
                setLoading(false);
              }
              return;
            }
          }
        } catch (e) {
          // ignore storage errors
        }

        try {
          const raw = sessionStorage.getItem(cacheKey) || localStorage.getItem(cacheKey);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Date.now() - parsed.ts < ttl) {
              if (mounted) {
                setScore(parsed.score ?? null);
                if (showDesktop) setDesktopScore(parsed.desktopScore ?? null);
                setLoading(false);
              }
              return;
            }
          }
        } catch (e) {
          // storage may be unavailable; ignore
        }

        // dynamic import keeps the package out of initial bundle
        const mod = await import("@vercel/speed-insights").catch(() => null);
        const url = origin;
        let res = null;

        // Try to find a callable API on the module
        const getInsights =
          mod?.getInsights || mod?.default?.getInsights || mod?.get || (typeof mod === "function" ? mod : null) || (typeof mod?.default === "function" ? mod.default : null);

        // Try getInsights if available, but don't let it throw the whole flow
        if (getInsights) {
          try {
            res = await getInsights({ url, strategy });
          } catch (e) {
            // swallow and fall through to REST fallback
            res = null;
          }
        }

        // If we don't have a usable module response, fall back to the public PSI REST API
        if (!res) {
          const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${encodeURIComponent(
            strategy
          )}`;
          const r = await fetch(apiUrl);
          if (!r.ok) {
            // if rate-limited, set a cooldown (1 hour) and try to use cached result if present
            if (r.status === 429) {
              const cooldownFor = Date.now() + 60 * 60 * 1000; // 1 hour cooldown
              try {
                localStorage.setItem(cooldownKey, String(cooldownFor));
              } catch (e) {
                // ignore
              }

              const cachedRaw = localStorage.getItem(cacheKey) || sessionStorage.getItem(cacheKey);
              if (cachedRaw) {
                const parsed = JSON.parse(cachedRaw);
                if (mounted) {
                  setScore(parsed.score ?? null);
                  if (showDesktop) setDesktopScore(parsed.desktopScore ?? null);
                  setError("rate_limited_cached");
                  setLoading(false);
                }
                return;
              }

              throw new Error(`PSI fetch failed: ${r.status}`);
            }

            throw new Error(`PSI fetch failed: ${r.status}`);
          }
          res = await r.json();
        }

        const perf = Math.round((res?.lighthouseResult?.categories?.performance?.score || 0) * 100);
        if (mounted) setScore(perf);

        // Optionally fetch desktop score
        let perfDesk = null;
        if (showDesktop) {
          let resDesk = null;
          if (getInsights) {
            try {
              resDesk = await getInsights({ url, strategy: "desktop" });
            } catch (e) {
              resDesk = null;
            }
          }

          if (!resDesk) {
            const apiUrlDesk = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=desktop`;
            const rDesk = await fetch(apiUrlDesk);
            if (!rDesk.ok) {
              if (rDesk.status === 429) {
                const cooldownFor = Date.now() + 60 * 60 * 1000; // 1 hour cooldown
                try {
                  localStorage.setItem(cooldownKey, String(cooldownFor));
                } catch (e) {
                  // ignore
                }

                const cachedRaw = localStorage.getItem(cacheKey) || sessionStorage.getItem(cacheKey);
                if (cachedRaw) {
                  const parsed = JSON.parse(cachedRaw);
                  if (mounted) {
                    setDesktopScore(parsed.desktopScore ?? null);
                    setError("rate_limited_cached");
                    setLoading(false);
                  }
                  return;
                }

                throw new Error(`PSI fetch failed: ${rDesk.status}`);
              }

              throw new Error(`PSI fetch failed: ${rDesk.status}`);
            }
            resDesk = await rDesk.json();
          }

          perfDesk = Math.round((resDesk?.lighthouseResult?.categories?.performance?.score || 0) * 100);
          if (mounted) setDesktopScore(perfDesk);
        }

        // cache result
        try {
          const data = { ts: Date.now(), score: perf, desktopScore: perfDesk };
          sessionStorage.setItem(cacheKey, JSON.stringify(data));
          try {
            localStorage.setItem(cacheKey, JSON.stringify(data));
          } catch (e) {
            // ignore localStorage errors (e.g., private mode)
          }
        } catch (e) {
          // ignore storage errors
        }

        // clear cooldown (if present)
        try {
          localStorage.removeItem(cooldownKey);
        } catch (e) {
          // ignore
        }

        if (mounted) setLoading(false);
      } catch (err) {
        // Only log in production to reduce noise during development
        if (process.env.NODE_ENV === "production") console.warn("Speed Insights fetch failed", err);
        if (mounted) {
          setError(err.message || "failed");
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [strategy, showDesktop]);

  // Render nothing while fetching to keep UI clean
  if (loading && score === null && !error) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 12,
        bottom: 12,
        zIndex: 9999,
        fontSize: 12,
      }}
    >
      <div className="bg-white/95 dark:bg-gray-900/90 text-black dark:text-white rounded-md shadow-md px-3 py-2 flex items-center gap-3">
        <div className="font-medium">Speed</div>
        {error ? (
          <div className="text-xs text-red-500">Error</div>
        ) : (
          <div className="flex flex-col">
            <div className="text-sm font-semibold">{score ?? "—"}%</div>
            {showDesktop && <div className="text-xs text-muted-foreground">desktop {desktopScore ?? "—"}%</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedInsights;
