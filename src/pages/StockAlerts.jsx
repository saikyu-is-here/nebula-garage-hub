import { AlertTriangle, Eye, Package } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { stockAlerts } from "@/data/mockData";

const StockAlerts = () => {
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
      key: "tyre",
      label: "Tyre",
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-neon-blue">{value}</span>
      ),
    },
    {
      key: "currentQuantity",
      label: "Current Stock",
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-muted-foreground" />
          <span className={`font-mono ${value === 0 ? 'text-destructive' : 'text-neon-orange'}`}>
            {value} units
          </span>
        </div>
      ),
    },
    {
      key: "alertType",
      label: "Alert Type",
      sortable: true,
      render: (value: string) => (
        <Badge 
          variant="outline"
          className={
            value === "Out of Stock" 
              ? "bg-destructive/20 text-destructive border-destructive/30" 
              : "bg-neon-orange/20 text-neon-orange border-neon-orange/30"
          }
        >
          <AlertTriangle className="w-3 h-3 mr-1" />
          {value}
        </Badge>
      ),
    },
    {
      key: "urgency",
      label: "Urgency",
      sortable: true,
      render: (value: string) => (
        <Badge 
          variant="outline"
          className={
            value === "High" 
              ? "bg-destructive/20 text-destructive border-destructive/30" 
              : "bg-neon-orange/20 text-neon-orange border-neon-orange/30"
          }
        >
          {value}
        </Badge>
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
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Stock Alerts</h1>
          <p className="text-muted-foreground">
            Monitor low stock and out-of-stock items across all garages
          </p>
        </div>
      </div>

      {/* Stock Alerts Table */}
      <DataTable
        title="Active Stock Alerts"
        columns={columns}
        data={stockAlerts}
        actions={actions}
        className="border border-destructive/30"
      />
    </div>
  );
};

export default StockAlerts;