import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Users, Car, Wrench } from "lucide-react";

interface UserProfileProps {
  user: any;
  onLogout: () => void;
}

export function UserProfile({ user, onLogout }: UserProfileProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-gradient-to-r from-red-500 to-pink-500";
      case "manager": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "client": return "bg-gradient-to-r from-green-500 to-emerald-500";
      default: return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  const renderAdminProfile = () => (
    <div className="space-y-6">
      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" />
            Admin Dashboard
          </CardTitle>
          <CardDescription>Full system access and management</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
            <Wrench className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">4</div>
            <div className="text-sm text-muted-foreground">Active Garages</div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Users className="w-4 h-4 mr-2" />
            Manage Users
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Wrench className="w-4 h-4 mr-2" />
            Manage Garages
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            System Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderManagerProfile = () => (
    <div className="space-y-6">
      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            Garage Manager
          </CardTitle>
          <CardDescription>Managing {user.profile.garageName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="text-sm text-muted-foreground">Total Stock Items</div>
          </div>
        </CardContent>
      </Card>

      {/* Stock Distribution Bar Chart */}
      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Stock Distribution</CardTitle>
          <CardDescription>Tyre categories in your garage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Summer Tyres</span>
              <span className="text-sm text-muted-foreground">45%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-neon-blue h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Winter Tyres</span>
              <span className="text-sm text-muted-foreground">30%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-neon-green h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">All-Season</span>
              <span className="text-sm text-muted-foreground">25%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-neon-orange h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Manager Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Car className="w-4 h-4 mr-2" />
            Manage Stock
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Users className="w-4 h-4 mr-2" />
            View Clients
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Garage Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderClientProfile = () => (
    <div className="space-y-6">
      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="w-5 h-5 text-primary" />
            Client Dashboard
          </CardTitle>
          <CardDescription>Manage your vehicles and reservations</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
            <Car className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{user.profile.vehicleCount}</div>
            <div className="text-sm text-muted-foreground">My Vehicles</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
            <Wrench className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">{user.profile.reservationHistory}</div>
            <div className="text-sm text-muted-foreground">Past Services</div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Car className="w-4 h-4 mr-2" />
            Book Service
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Users className="w-4 h-4 mr-2" />
            My Reservations
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Profile Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10 p-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Profile
          </h1>
          <Button variant="outline" size="sm" onClick={onLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* User Card */}
        <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.profile.avatar} alt={user.name} />
                <AvatarFallback className={`${getRoleColor(user.role)} text-white font-bold`}>
                  {user.name.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <Badge variant="secondary" className={`${getRoleColor(user.role)} text-white border-0`}>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Role-specific content */}
        {user.role === "admin" && renderAdminProfile()}
        {user.role === "manager" && renderManagerProfile()}
        {user.role === "client" && renderClientProfile()}
      </div>
    </div>
  );
}