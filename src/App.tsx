import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Garages from "./pages/Garages";
import Users from "./pages/Users";
import Tyres from "./pages/Tyres";
import Reservations from "./pages/Reservations";
import Vehicles from "./pages/Vehicles";
import GarageHours from "./pages/GarageHours";
import Notifications from "./pages/Notifications";
import StockAlerts from "./pages/StockAlerts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark"> {/* Force dark mode */}
          <Routes>
            <Route path="/" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/garages" element={
              <DashboardLayout>
                <Garages />
              </DashboardLayout>
            } />
            <Route path="/users" element={
              <DashboardLayout>
                <Users />
              </DashboardLayout>
            } />
            <Route path="/tyres" element={
              <DashboardLayout>
                <Tyres />
              </DashboardLayout>
            } />
            <Route path="/reservations" element={
              <DashboardLayout>
                <Reservations />
              </DashboardLayout>
            } />
            <Route path="/vehicles" element={
              <DashboardLayout>
                <Vehicles />
              </DashboardLayout>
            } />
            <Route path="/hours" element={
              <DashboardLayout>
                <GarageHours />
              </DashboardLayout>
            } />
            <Route path="/notifications" element={
              <DashboardLayout>
                <Notifications />
              </DashboardLayout>
            } />
            <Route path="/alerts" element={
              <DashboardLayout>
                <StockAlerts />
              </DashboardLayout>
            } />
            <Route path="/settings" element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
