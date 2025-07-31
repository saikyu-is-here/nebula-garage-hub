import { Edit, Clock, Plus } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { garageHours } from "@/data/mockData";

const GarageHours = () => {
  const columns = [
    {
      key: "garage",
      label: "Garage",
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-foreground">{value}</span>
      ),
    },
    {
      key: "day",
      label: "Day",
      sortable: true,
      render: (value: string) => (
        <Badge variant="outline" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
          {value}
        </Badge>
      ),
    },
    {
      key: "openTime",
      label: "Open Time",
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-neon-green" />
          <span className="font-mono text-neon-green">{value}</span>
        </div>
      ),
    },
    {
      key: "closeTime",
      label: "Close Time",
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-neon-orange" />
          <span className="font-mono text-neon-orange">{value}</span>
        </div>
      ),
    },
  ];

  const actions = (row: any) => (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-neon-purple/10 hover:text-neon-purple"
      >
        <Edit className="w-4 h-4" />
      </Button>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Garage Hours</h1>
          <p className="text-muted-foreground">
            Manage operating hours for all garage locations
          </p>
        </div>
        <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Schedule
        </Button>
      </div>

      {/* Hours Table */}
      <DataTable
        title="Operating Hours"
        columns={columns}
        data={garageHours}
        actions={actions}
      />
    </div>
  );
};

export default GarageHours;