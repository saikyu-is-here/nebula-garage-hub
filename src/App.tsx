import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LoginPage } from "@/components/auth/LoginPage";
import { UserProfile } from "@/components/auth/UserProfile";
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

const App = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    setShowProfile(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowProfile(false);
  };

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  if (!currentUser) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="dark">
            <LoginPage onLogin={handleLogin} />
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  if (showProfile) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="dark">
            <UserProfile user={currentUser} onLogout={handleLogout} />
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="dark">
            <Routes>
              <Route path="/" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Dashboard user={currentUser} />
                </DashboardLayout>
              } />
              <Route path="/garages" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Garages />
                </DashboardLayout>
              } />
              <Route path="/users" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Users />
                </DashboardLayout>
              } />
              <Route path="/tyres" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Tyres />
                </DashboardLayout>
              } />
              <Route path="/reservations" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Reservations />
                </DashboardLayout>
              } />
              <Route path="/vehicles" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Vehicles />
                </DashboardLayout>
              } />
              <Route path="/hours" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <GarageHours />
                </DashboardLayout>
              } />
              <Route path="/notifications" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Notifications />
                </DashboardLayout>
              } />
              <Route path="/alerts" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <StockAlerts />
                </DashboardLayout>
              } />
              <Route path="/settings" element={
                <DashboardLayout user={currentUser} onShowProfile={handleShowProfile}>
                  <Settings />
                </DashboardLayout>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
