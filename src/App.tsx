import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BonusDetail from "./pages/BonusDetail.tsx";
import TopList from "./pages/TopList.tsx";
import Notifications from "./pages/Notifications.tsx";
import Register from "./pages/Register.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ResponsibleGaming from "./pages/ResponsibleGaming.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import CookieBanner from "./components/CookieBanner.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bonus/:id" element={<BonusDetail />} />
          <Route path="/topplista" element={<TopList />} />
          <Route path="/notiser" element={<Notifications />} />
          <Route path="/registrera" element={<Register />} />
          <Route path="/skapa-konto" element={<Register />} />
          <Route path="/om-oss" element={<AboutUs />} />
          <Route path="/ansvarsfullt-spelande" element={<ResponsibleGaming />} />
          <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
          <Route path="/logga-in" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
