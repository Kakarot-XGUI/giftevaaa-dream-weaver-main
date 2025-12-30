import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FloatingLines from '@/components/ui/FloatingLines';

import { HelmetProvider } from "react-helmet-async";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";


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
   
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
        {/* Speed Insights badge (dynamically imports @vercel/speed-insights at runtime) */}
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
  <FloatingLines
    enabledWaves={["middle","bottom","top"]}
    lineDistance={19}
    bendStrength={2}
    parallaxStrength={0.35}
  />
</div>
       
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
