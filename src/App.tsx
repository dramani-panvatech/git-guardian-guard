import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import UIServices from "./pages/UIServices";
import ITSolutions from "./pages/ITSolutions";
import ElectronicHealthRecords from "./pages/ElectronicHealthRecords";
import OneTriage from "./pages/OneTriage";
import RevenueCycleManagement from "./pages/RevenueCycleManagement";
import TelemedicinePlatforms from "./pages/TelemedicinePlatforms";
import FinTechSolutions from "./pages/FinTechSolutions";
import AIMachineLearning from "./pages/AIMachineLearning";
import LegalServicePlatform from "./pages/LegalServicePlatform";
import HealthCoder from "./pages/HealthCoder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ui-services" element={<UIServices />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/healthcare/electronic-health-records-ehr" element={<ElectronicHealthRecords />} />
          <Route path="/healthcare/one-triage" element={<OneTriage />} />
          <Route path="/healthcare/revenue-cycle-management" element={<RevenueCycleManagement />} />
          <Route path="/healthcare/telemedicine-platforms" element={<TelemedicinePlatforms />} />
          <Route path="/healthcare/health-coder" element={<HealthCoder />} />
          <Route path="/fintech/solutions" element={<FinTechSolutions />} />
          <Route path="/ai-ml/solutions" element={<AIMachineLearning />} />
          <Route path="/legal/platform" element={<LegalServicePlatform />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
