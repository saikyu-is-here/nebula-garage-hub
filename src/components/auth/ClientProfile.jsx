import { ArrowLeft, Car, Phone, Mail, MapPin, Calendar, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { vehicles, reservations } from "@/data/mockData";

// ClientProfileProps interface removed for JavaScript

const ClientProfile = ({ client, onBack }) => {
  // Get client's vehicles and reservation history
  const clientVehicles = vehicles.filter(v => v.owner === client.name);
  const clientReservations = reservations.filter(r => r.customer === client.name);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="hover:bg-neon-blue/10 hover:text-neon-blue"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Clients
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Profile</h1>
          <p className="text-muted-foreground">Detailed client information and history</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client Info */}
        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-neon-blue font-semibold">
                  {client.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              {client.name}
            </CardTitle>
            <CardDescription>Client Information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-neon-blue" />
              <span className="text-sm">{client.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-neon-green" />
              <span className="text-sm">{client.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-neon-purple" />
              <span className="text-sm">{client.garage}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge 
                variant="outline"
                className="bg-neon-green/20 text-neon-green border-neon-green/30"
              >
                {client.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Vehicles</span>
              <span className="font-medium">{clientVehicles.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Reservations</span>
              <span className="font-medium">{clientReservations.length}</span>
            </div>
          </CardContent>
        </Card>

        {/* Car History */}
        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5 text-neon-blue" />
              Vehicle History
            </CardTitle>
            <CardDescription>Client's registered vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientVehicles.map((vehicle, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                        <Car className="w-4 h-4 text-neon-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {vehicle.make} {vehicle.model}
                        </h4>
                        <p className="text-sm text-muted-foreground">{vehicle.year}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {vehicle.plate}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Tyre Size: {vehicle.tyreSize}</span>
                  </div>
                </div>
              ))}
              {clientVehicles.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Car className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No vehicles registered</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service History */}
      <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-neon-green" />
            Service History
          </CardTitle>
          <CardDescription>Recent reservations and services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {clientReservations.map((reservation, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{reservation.tyre}</h4>
                      <p className="text-sm text-muted-foreground">{reservation.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Qty: {reservation.quantity}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={`text-xs ${
                        reservation.status === 'Confirmed' 
                          ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                          : reservation.status === 'Pending'
                          ? 'bg-neon-orange/20 text-neon-orange border-neon-orange/30'
                          : 'bg-neon-blue/20 text-neon-blue border-neon-blue/30'
                      }`}
                    >
                      {reservation.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Garage: {reservation.garage}</span>
                  <span>Contact: {reservation.phone}</span>
                </div>
              </div>
            ))}
            {clientReservations.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Wrench className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No service history available</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientProfile;