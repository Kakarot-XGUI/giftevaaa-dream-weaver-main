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
        // dynamic import keeps the package out of initial bundle
        const mod = await import("@vercel/speed-insights");
        const url = window.location.origin;
        let res = null;

        // Try to find a callable API on the module
        const getInsights =
          mod.getInsights ||
          mod.default?.getInsights ||
          mod.get ||
          (typeof mod === "function" ? mod : null) ||
          (typeof mod.default === "function" ? mod.default : null);

        // If we have a callable, use it. Otherwise fall back to the public PSI REST API.
        if (getInsights) {
          res = await getInsights({ url, strategy });
        } else {
          // Fallback to Google PageSpeed Insights REST API (no key required for basic usage)
          const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
            url
          )}&strategy=${encodeURIComponent(strategy)}`;
          const r = await fetch(apiUrl);
          if (!r.ok) throw new Error(`PSI fetch failed: ${r.status}`);
          res = await r.json();
        }

        const perf = Math.round((res?.lighthouseResult?.categories?.performance?.score || 0) * 100);
        if (mounted) setScore(perf);

        // Optionally fetch desktop score
        if (showDesktop) {
          let resDesk = null;
          if (getInsights) {
            resDesk = await getInsights({ url, strategy: "desktop" });
          } else {
            const apiUrlDesk = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
              url
            )}&strategy=desktop`;
            const rDesk = await fetch(apiUrlDesk);
            if (!rDesk.ok) throw new Error(`PSI fetch failed: ${rDesk.status}`);
            resDesk = await rDesk.json();
          }

          const perfDesk = Math.round((resDesk?.lighthouseResult?.categories?.performance?.score || 0) * 100);
          if (mounted) setDesktopScore(perfDesk);
        }

        if (mounted) setLoading(false);
      } catch (err) {
        // Don't crash the app; just show a console warning and optionally an error in UI
        console.warn("Speed Insights fetch failed", err);
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
