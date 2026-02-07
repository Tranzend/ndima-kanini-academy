import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import MissionValues from "./pages/MissionValues";
import History from "./pages/History";
import Staff from "./pages/Staff";
import PrePrimary from "./pages/PrePrimary";
import LowerPrimary from "./pages/LowerPrimary";
import UpperPrimary from "./pages/UpperPrimary";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Fees from "./pages/Fees";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission-values" element={<MissionValues />} />
          <Route path="/history" element={<History />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/pre-primary" element={<PrePrimary />} />
          <Route path="/lower-primary" element={<LowerPrimary />} />
          <Route path="/upper-primary" element={<UpperPrimary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
