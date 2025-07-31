import { Eye, Edit, Trash2, Plus, Search } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { vehicles } from "@/data/mockData";

const Vehicles = () => {
  const columns = [
    {
      key: "make",
      label: "Make",
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-foreground">{value}</span>
      ),
    },
    {
      key: "model",
      label: "Model",
      sortable: true,
    },
    {
      key: "year",
      label: "Year",
      sortable: true,
      render: (value: number) => (
        <span className="font-mono text-neon-blue">{value}</span>
      ),
    },
    {
      key: "plate",
      label: "License Plate",
      sortable: true,
      render: (value: string) => (
        <span className="font-mono bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
          {value}
        </span>
      ),
    },
    {
      key: "owner",
      label: "Owner",
      sortable: true,
    },
    {
      key: "tyreSize",
      label: "Tyre Size",
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-muted-foreground">{value}</span>
      ),
    },
  ];

  const actions = (row: any) => (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Vehicles</h1>
          <p className="text-muted-foreground">
            Manage customer vehicles and their specifications
          </p>
        </div>
        <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      {/* Vehicles Table */}
      <DataTable
        title="All Vehicles"
        columns={columns}
        data={vehicles}
        actions={actions}
      />
    </div>
  );
};

export default Vehicles;