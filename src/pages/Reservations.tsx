import { Eye, Edit, Trash2, Plus, Calendar, Filter } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { reservations } from "@/data/mockData";

const Reservations = () => {
  const columns = [
    {
      key: "customer",
      label: "Customer",
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-foreground">{value}</span>
      ),
    },
    {
      key: "garage",
      label: "Garage",
      sortable: true,
    },
    {
      key: "tyre",
      label: "Tyre",
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-neon-blue">{value}</span>
      ),
    },
    {
      key: "quantity",
      label: "Quantity",
      sortable: true,
      render: (value: number) => (
        <span className="font-mono text-foreground">{value} units</span>
      ),
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{value}</span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value: string) => {
        const colors = {
          Pending: "bg-neon-orange/20 text-neon-orange border-neon-orange/30",
          Confirmed: "bg-neon-blue/20 text-neon-blue border-neon-blue/30",
          Completed: "bg-neon-green/20 text-neon-green border-neon-green/30",
        };
        return (
          <Badge variant="outline" className={colors[value as keyof typeof colors]}>
            {value}
          </Badge>
        );
      },
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Reservations</h1>
          <p className="text-muted-foreground">
            Manage customer reservations and appointments
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-neon-blue/30 hover:bg-neon-blue/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Status
          </Button>
          <Button 
            variant="outline"
            className="border-neon-green/30 text-neon-green hover:bg-neon-green/10"
          >
            Active Reservations
          </Button>
          <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Reservation
          </Button>
        </div>
      </div>

      {/* Reservations Table */}
      <DataTable
        title="All Reservations"
        columns={columns}
        data={reservations}
        actions={actions}
      />
    </div>
  );
};

export default Reservations;