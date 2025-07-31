import { Eye, Edit, Trash2, Plus, Package, AlertTriangle } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tyres, stockAlerts } from "@/data/mockData";

const Tyres = () => {
  const columns = [
    {
      key: "brand",
      label: "Brand",
      sortable: true,
      render: (value) => (
        <span className="font-semibold text-foreground">{value}</span>
      ),
    },
    {
      key: "size",
      label: "Size",
      sortable: true,
      render: (value) => (
        <span className="font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
          {value}
        </span>
      ),
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      render: (value) => {
        const colors = {
          Summer: "bg-neon-orange/20 text-neon-orange border-neon-orange/30",
          Winter: "bg-neon-blue/20 text-neon-blue border-neon-blue/30",
          "All-Season": "bg-neon-green/20 text-neon-green border-neon-green/30",
          Performance: "bg-neon-purple/20 text-neon-purple border-neon-purple/30",
        };
        return (
          <Badge variant="outline" className={colors[value]}>
            {value}
          </Badge>
        );
      },
    },
    {
      key: "price",
      label: "Price",
      sortable: true,
      render: (value) => (
        <span className="font-mono text-neon-green">${value}</span>
      ),
    },
    {
      key: "totalStock",
      label: "Total Stock",
      sortable: true,
      render: (value) => (
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-muted-foreground" />
          <span className={`font-mono ${value < 10 ? 'text-destructive' : 'text-foreground'}`}>
            {value} units
          </span>
          {value < 10 && <AlertTriangle className="w-4 h-4 text-destructive" />}
        </div>
      ),
    },
  ];

  const actions = (row) => (
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

  const alertColumns = [
    {
      key: "garage",
      label: "Garage",
      sortable: true,
    },
    {
      key: "tyre",
      label: "Tyre",
      sortable: true,
    },
    {
      key: "currentQuantity",
      label: "Current Stock",
      sortable: true,
      render: (value) => (
        <span className={`font-mono ${value === 0 ? 'text-destructive' : 'text-neon-orange'}`}>
          {value} units
        </span>
      ),
    },
    {
      key: "alertType",
      label: "Alert Type",
      sortable: true,
      render: (value) => (
        <Badge 
          variant="outline"
          className={
            value === "Out of Stock" 
              ? "bg-destructive/20 text-destructive border-destructive/30" 
              : "bg-neon-orange/20 text-neon-orange border-neon-orange/30"
          }
        >
          {value}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Tyres & Stock</h1>
          <p className="text-muted-foreground">
            Manage tyre inventory and stock levels across all garages
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline"
            className="border-neon-green/30 text-neon-green hover:bg-neon-green/10"
          >
            Active Stock
          </Button>
          <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Tyres
          </Button>
        </div>
      </div>

      {/* Stock Alerts */}
      <Card className="bg-glass-gradient backdrop-blur-glass border border-destructive/30">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Stock Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            title=""
            columns={alertColumns}
            data={stockAlerts}
            searchable={false}
            filterable={false}
            className="border-none bg-transparent"
          />
        </CardContent>
      </Card>

      {/* Tyres Table */}
      <DataTable
        title="All Tyres"
        columns={columns}
        data={tyres}
        actions={actions}
      />
    </div>
  );
};

export default Tyres;