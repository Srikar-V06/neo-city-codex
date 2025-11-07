import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bounties from "./pages/Bounties";
import Lore from "./pages/Lore";
import JoinSyndicate from "./pages/JoinSyndicate";
import Safehouse from "./pages/Safehouse";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Comms from "./pages/Comms";
import Market from "./pages/Market";
import Upgrades from "./pages/Upgrades";
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
          <Route path="/bounties" element={<Bounties />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/join" element={<JoinSyndicate />} />
          <Route path="/safehouse" element={<Safehouse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/comms" element={<Comms />} />
          <Route path="/market" element={<Market />} />
          <Route path="/upgrades" element={<Upgrades />} />
          {/* Alias until full Missions page exists */}
          <Route path="/missions" element={<Bounties />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
