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

      {/* Garages Table */}
      <DataTable
        title="All Garages"
        columns={columns}
        data={garages}
        actions={actions}
      />
    </div>
  );
};

export default Garages;