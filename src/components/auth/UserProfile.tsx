import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Users, Package, BarChart3, Settings, Eye, Calendar, MapPin } from "lucide-react";
import { dashboardKPIs, stockDistribution, garages, users } from "@/data/mockData";
import ClientProfile from "./ClientProfile";

interface UserProfileProps {
  user: any;
  onLogout: () => void;
}

const UserProfile = ({ user, onLogout }: UserProfileProps) => {
  const [showClientProfile, setShowClientProfile] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Get clients for this garage (users with role 'Client' from the same garage)
  const garageClients = users.filter(u => u.role === 'Client' && u.garage === user.garage);

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-neon-purple/20 text-neon-purple border-neon-purple/30";
      case "Manager": return "bg-neon-blue/20 text-neon-blue border-neon-blue/30";
      case "Client": return "bg-neon-green/20 text-neon-green border-neon-green/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const renderAdminProfile = () => {
    return (
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-blue/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-neon-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-blue">{users.length}</div>
              <p className="text-xs text-muted-foreground">
                Across all garages
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-green/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Garages</CardTitle>
              <MapPin className="h-4 w-4 text-neon-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-green">{garages.length}</div>
              <p className="text-xs text-muted-foreground">
                Active locations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-purple/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <BarChart3 className="h-4 w-4 text-neon-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-purple">98%</div>
              <p className="text-xs text-muted-foreground">
                All systems operational
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-orange/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stock Alerts</CardTitle>
              <Package className="h-4 w-4 text-neon-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-orange">{dashboardKPIs.stockAlerts}</div>
              <p className="text-xs text-muted-foreground">
                Need attention
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const renderManagerProfile = () => {
    return (
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-blue/30 transition-colors cursor-pointer"
                onClick={() => setShowClientProfile(true)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">View Clients</CardTitle>
              <Users className="h-4 w-4 text-neon-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-blue">{garageClients.length}</div>
              <p className="text-xs text-muted-foreground">
                Garage clients
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-green/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stock Items</CardTitle>
              <Package className="h-4 w-4 text-neon-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-green">156</div>
              <p className="text-xs text-muted-foreground">
                Total inventory
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-orange/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
              <BarChart3 className="h-4 w-4 text-neon-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-orange">8</div>
              <p className="text-xs text-muted-foreground">
                Items need restock
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Clients List */}
        {showClientProfile && (
          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Garage Clients</CardTitle>
                  <CardDescription>Manage your garage clients</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowClientProfile(false)}
                  className="hover:bg-neon-blue/10"
                >
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {garageClients.map((client, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border/30 hover:border-neon-blue/30 transition-colors cursor-pointer"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                        <span className="text-neon-blue font-semibold">
                          {client.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{client.name}</p>
                        <p className="text-sm text-muted-foreground">{client.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="outline"
                        className="bg-neon-green/20 text-neon-green border-neon-green/30"
                      >
                        {client.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="hover:bg-neon-blue/10">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {garageClients.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No clients found for this garage</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const renderClientProfile = () => {
    return (
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-blue/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Vehicles</CardTitle>
              <Package className="h-4 w-4 text-neon-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-blue">3</div>
              <p className="text-xs text-muted-foreground">
                Registered vehicles
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-green/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Reservations</CardTitle>
              <Calendar className="h-4 w-4 text-neon-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-green">2</div>
              <p className="text-xs text-muted-foreground">
                Pending services
              </p>
            </CardContent>
          </Card>

          <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-purple/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Service History</CardTitle>
              <BarChart3 className="h-4 w-4 text-neon-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-purple">12</div>
              <p className="text-xs text-muted-foreground">
                Completed services
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  // Handle client profile view
  if (selectedClient) {
    return (
      <ClientProfile 
        client={selectedClient} 
        onBack={() => setSelectedClient(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-neon-blue/30">
              <AvatarFallback className="bg-neon-blue/20 text-neon-blue text-lg font-semibold">
                {user.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
              <p className="text-muted-foreground">{user.email}</p>
              <Badge 
                variant="outline" 
                className={`mt-2 ${getRoleColor(user.role)}`}
              >
                {user.role}
              </Badge>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-destructive/30 text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Role-specific content */}
        {user.role === "Admin" && renderAdminProfile()}
        {user.role === "Manager" && renderManagerProfile()}
        {user.role === "Client" && renderClientProfile()}
      </div>
    </div>
  );
};

export default UserProfile;