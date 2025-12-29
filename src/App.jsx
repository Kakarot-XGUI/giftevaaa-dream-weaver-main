import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import SpeedInsights from "@/components/SpeedInsights";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => (
  <HelmetProvider>
    <SpeedInsights />
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
        {/* Speed Insights badge (dynamically imports @vercel/speed-insights at runtime) */}
        <SpeedInsights strategy="mobile" showDesktop={false} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
