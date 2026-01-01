import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "@/pages/Index";
import AllProducts from "@/pages/AllProducts";
import Product from "@/pages/Product";
import NotFound from "@/pages/NotFound";


const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "/products", element: <AllProducts /> },
    { path: "/products/:id", element: <Product /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

import bg from "@/assets/images/bg.png";

const App = () => (
  <div
    className="min-h-screen relative"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    {/* subtle overlay to ensure content is readable */}
    <div className="absolute inset-0 bg-white/40 dark:bg-black/40 pointer-events-none z-0" />

    <div className="relative z-10">
      <HelmetProvider>
       
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <RouterProvider router={router} />
           
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  </div>
);

export default App;
