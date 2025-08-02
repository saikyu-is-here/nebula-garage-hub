import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LoginPageProps {
  onLogin: (user: any) => void;
}

// Demo credentials
const demoCredentials = [
  {
    email: "admin@garage.com",
    password: "admin123",
    role: "admin",
    name: "Admin User",
    profile: {
      fullAccess: true,
      canManageUsers: true,
      canManageGarages: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    email: "manager@garage.com", 
    password: "manager123",
    role: "manager",
    name: "Garage Manager",
    profile: {
      garageId: 1,
      garageName: "Downtown Garage",
      canManageStock: true,
      canViewReservations: true,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    email: "client@garage.com",
    password: "client123", 
    role: "client",
    name: "John Client",
    profile: {
      vehicleCount: 2,
      reservationHistory: 5,
      preferredGarage: "Downtown Garage",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  }
];

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = demoCredentials.find(
      cred => cred.email === email && cred.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      setError("Invalid credentials. Try demo accounts above.");
    }
    
    setLoading(false);
  };

  const handleDemoLogin = (credentials: typeof demoCredentials[0]) => {
    setEmail(credentials.email);
    setPassword(credentials.password);
    onLogin(credentials);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Garage Management
          </h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* Demo Credentials */}
        <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-accent">Demo Accounts</CardTitle>
            <CardDescription className="text-xs">Click to login instantly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {demoCredentials.map((cred, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs h-8 border-accent/20 hover:border-accent/40"
                onClick={() => handleDemoLogin(cred)}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold">
                    {cred.role[0].toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{cred.name}</div>
                    <div className="text-muted-foreground">{cred.email}</div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Login Form */}
        <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="border-accent/20 focus:border-accent"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="border-accent/20 focus:border-accent"
                />
              </div>

              {error && (
                <Alert className="border-destructive/20 bg-destructive/10">
                  <AlertDescription className="text-destructive">{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          Demo application - Use the accounts above for testing
        </div>
      </div>
    </div>
  );
}