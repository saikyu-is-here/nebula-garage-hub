import { Bell, CheckCircle, Circle, Trash2 } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notifications } from "@/data/mockData";

const Notifications = () => {
  const columns = [
    {
      key: "title",
      label: "Title",
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-foreground">{value}</span>
      ),
    },
    {
      key: "message",
      label: "Message",
      sortable: true,
      render: (value: string) => (
        <span className="text-muted-foreground">{value}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value: string) => {
        const isRead = value === "Read";
        return (
          <Badge 
            variant="outline"
            className={
              isRead 
                ? "bg-muted/20 text-muted-foreground border-muted-foreground/30" 
                : "bg-neon-blue/20 text-neon-blue border-neon-blue/30"
            }
          >
            {isRead ? (
              <CheckCircle className="w-3 h-3 mr-1" />
            ) : (
              <Circle className="w-3 h-3 mr-1" />
            )}
            {value}
          </Badge>
        );
      },
    },
    {
      key: "timestamp",
      label: "Time",
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-muted-foreground text-sm">{value}</span>
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
        {row.status === "Read" ? (
          <Circle className="w-4 h-4" />
        ) : (
          <CheckCircle className="w-4 h-4" />
        )}
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
          <p className="text-muted-foreground">
            Manage system notifications and alerts
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-neon-blue/30 hover:bg-neon-blue/10">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Notifications Table */}
      <DataTable
        title="All Notifications"
        columns={columns}
        data={notifications}
        actions={actions}
      />
    </div>
  );
};

export default Notifications;