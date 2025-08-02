import { useState } from "react";
import { Eye, Edit, Trash2, Plus, MapPin, Phone } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { garages } from "@/data/mockData";

const Garages = () => {
  const [selectedGarage, setSelectedGarage] = useState<any>(null);

  const columns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
    },
    {
      key: "location",
      label: "Location",
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm">{value}</span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value: string) => (
        <Badge 
          variant={value === "Active" ? "default" : "secondary"}
          className={
            value === "Active" 
              ? "bg-neon-green/20 text-neon-green border-neon-green/30" 
              : "bg-neon-orange/20 text-neon-orange border-neon-orange/30"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "totalStock",
      label: "Total Stock",
      sortable: true,
      render: (value: number) => (
        <span className="font-mono text-neon-blue">{value} units</span>
      ),
    },
    {
      key: "manager",
      label: "Manager",
      sortable: true,
    },
  ];

  const actions = (row: any) => (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setSelectedGarage(row)}
        className="hover:bg-neon-blue/10 hover:text-neon-blue"
      >
        <Eye className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-neon-purple/10 hover:text-neon-purple"
      >
        <Edit className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Garages</h1>
          <p className="text-muted-foreground">
            Manage your garage network and locations
          </p>
        </div>
        <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Garage
        </Button>
      </div>

      {/* Garage Details Modal */}
      {selectedGarage && (
        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-foreground">
                {selectedGarage.name} Details
              </CardTitle>
              <Button
                variant="ghost"
                onClick={() => setSelectedGarage(null)}
                className="hover:bg-accent"
              >
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedGarage.location}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Manager</h4>
                <p className="text-muted-foreground">{selectedGarage.manager}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {selectedGarage.phone}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Status</h4>
                <Badge 
                  variant={selectedGarage.status === "Active" ? "default" : "secondary"}
                  className={
                    selectedGarage.status === "Active" 
                      ? "bg-neon-green/20 text-neon-green border-neon-green/30" 
                      : "bg-neon-orange/20 text-neon-orange border-neon-orange/30"
                  }
                >
                  {selectedGarage.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Garages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {garages.map((garage) => (
          <Card key={garage.id} className="bg-glass-gradient backdrop-blur-glass border border-border/50 hover:border-neon-blue/30 transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="w-full h-48 bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop`}
                  alt={garage.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {garage.name}
                </CardTitle>
                <Badge 
                  variant={garage.status === "Active" ? "default" : "secondary"}
                  className={
                    garage.status === "Active" 
                      ? "bg-neon-green/20 text-neon-green border-neon-green/30" 
                      : "bg-neon-orange/20 text-neon-orange border-neon-orange/30"
                  }
                >
                  {garage.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{garage.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{garage.phone}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Stock:</span>
                <span className="font-mono text-neon-blue">{garage.totalStock} units</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Manager:</span>
                <span className="text-foreground">{garage.manager}</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedGarage(garage)}
                  className="flex-1 hover:bg-neon-blue/10 hover:text-neon-blue"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-neon-purple/10 hover:text-neon-purple"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Garages;