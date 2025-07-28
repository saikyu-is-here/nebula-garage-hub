import { Eye, Edit, Trash2, Plus, Filter } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { users } from "@/data/mockData";

const Users = () => {
  const columns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
      render: (value: string) => (
        <span className="text-neon-blue">{value}</span>
      ),
    },
    {
      key: "phone",
      label: "Phone",
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-muted-foreground">{value}</span>
      ),
    },
    {
      key: "role",
      label: "Role",
      sortable: true,
      render: (value: string) => (
        <Badge 
          variant="outline"
          className={
            value === "Admin" 
              ? "bg-neon-purple/20 text-neon-purple border-neon-purple/30" 
              : "bg-neon-blue/20 text-neon-blue border-neon-blue/30"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "garage",
      label: "Garage",
      sortable: true,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value: string) => (
        <Badge 
          variant={value === "Active" ? "default" : "secondary"}
          className="bg-neon-green/20 text-neon-green border-neon-green/30"
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Users</h1>
          <p className="text-muted-foreground">
            Manage administrators, managers, and customers
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-neon-blue/30 hover:bg-neon-blue/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Role
          </Button>
          <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <DataTable
        title="All Users"
        columns={columns}
        data={users}
        actions={actions}
      />
    </div>
  );
};

export default Users;