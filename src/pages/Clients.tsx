import { useState } from "react";
import { Eye, Search, Filter, Phone, Mail, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { users, vehicles, reservations } from "@/data/mockData";
import ClientProfile from "@/components/auth/ClientProfile";

interface ClientsProps {
  user?: any;
}

const Clients = ({ user }: ClientsProps) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Get clients for this garage (users with role 'Client' from the same garage)
  const garageClients = users.filter(u => 
    u.role === 'Client' && 
    (user ? u.garage === user.garage : true)
  );

  // Filter clients based on search term
  const filteredClients = garageClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  // Get client statistics
  const getClientStats = (client: any) => {
    const clientVehicles = vehicles.filter(v => v.owner === client.name);
    const clientReservations = reservations.filter(r => r.customer === client.name);
    const completedServices = clientReservations.filter(r => r.status === 'Confirmed').length;
    
    return {
      vehicles: clientVehicles.length,
      totalReservations: clientReservations.length,
      completedServices
    };
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
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Clients</h1>
          <p className="text-muted-foreground">
            {user ? `Manage clients for ${user.garage}` : 'Manage all clients'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 border-border/50 focus:border-neon-blue/50"
            />
          </div>
          <Button variant="outline" className="border-neon-blue/30 hover:bg-neon-blue/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Client Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Eye className="h-4 w-4 text-neon-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-blue">{garageClients.length}</div>
            <p className="text-xs text-muted-foreground">
              Active garage clients
            </p>
          </CardContent>
        </Card>

        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-neon-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-green">
              {garageClients.reduce((total, client) => {
                const stats = getClientStats(client);
                return total + stats.vehicles;
              }, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Registered vehicles
            </p>
          </CardContent>
        </Card>

        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Phone className="h-4 w-4 text-neon-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-purple">
              {reservations.filter(r => 
                garageClients.some(c => c.name === r.customer) && 
                r.status === 'Pending'
              ).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Pending reservations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Clients List */}
      <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-neon-blue" />
            Client Directory
          </CardTitle>
          <CardDescription>
            Showing {filteredClients.length} of {garageClients.length} clients
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {filteredClients.map((client, index) => {
              const stats = getClientStats(client);
              
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-lg bg-muted/20 border border-border/30 hover:border-neon-blue/30 transition-all cursor-pointer hover:bg-muted/30"
                  onClick={() => setSelectedClient(client)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                        <span className="text-neon-blue font-semibold text-lg">
                          {client.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{client.name}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Mail className="w-3 h-3" />
                              {client.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Phone className="w-3 h-3" />
                              {client.phone}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Vehicles: </span>
                            <span className="font-medium text-neon-green">{stats.vehicles}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Services: </span>
                            <span className="font-medium text-neon-blue">{stats.completedServices}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Total Bookings: </span>
                            <span className="font-medium text-neon-purple">{stats.totalReservations}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="outline"
                        className={
                          client.status === 'Active'
                            ? "bg-neon-green/20 text-neon-green border-neon-green/30"
                            : "bg-muted/20 text-muted-foreground border-muted/30"
                        }
                      >
                        {client.status}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hover:bg-neon-blue/10 hover:text-neon-blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedClient(client);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {filteredClients.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Eye className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No clients found</h3>
                <p className="text-sm">
                  {searchTerm 
                    ? "Try adjusting your search criteria" 
                    : "No clients are registered for this garage yet"
                  }
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clients;