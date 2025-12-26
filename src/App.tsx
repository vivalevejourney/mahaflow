import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GestorProvider } from "@/contexts/GestorContext";

// Eager load - main page
import Index from "./pages/Index";

// Lazy load - secondary pages
const Login = lazy(() => import("./pages/Login"));
const Cadastro = lazy(() => import("./pages/Cadastro"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GestorDashboard = lazy(() => import("./pages/GestorDashboard"));
const GestorLogin = lazy(() => import("./pages/GestorLogin"));
const Feed = lazy(() => import("./pages/Feed"));
const MahaTinder = lazy(() => import("./pages/MahaTinder"));
const Loja = lazy(() => import("./pages/Loja"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ExperienciaTemplate = lazy(() => import("./pages/experiencias/ExperienciaTemplate"));

const queryClient = new QueryClient();

// Page loader component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GestorProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/gestor" element={<GestorDashboard />} />
              <Route path="/gestor-login" element={<GestorLogin />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/mahatinder" element={<MahaTinder />} />
              <Route path="/loja" element={<Loja />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/experiencias/:slug" element={<ExperienciaTemplate />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </GestorProvider>
  </QueryClientProvider>
);

export default App;
