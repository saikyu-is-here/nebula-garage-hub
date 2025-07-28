import {
  Calendar,
  CheckCircle,
  Clock,
  Building2,
  AlertTriangle,
} from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { dashboardKPIs, reservationTrends, stockDistribution, garages } from "@/data/mockData";

const Dashboard = () => {

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your garage network today.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <KPICard
          title="Reservations Today"
          value={dashboardKPIs.totalReservationsToday}
          change={+12}
          trend="up"
          icon={<Calendar className="w-5 h-5 text-neon-blue" />}
          accentColor="blue"
        />
        <KPICard
          title="Completed"
          value={dashboardKPIs.completedReservations}
          change={+8}
          trend="up"
          icon={<CheckCircle className="w-5 h-5 text-neon-green" />}
          accentColor="green"
        />
        <KPICard
          title="Pending"
          value={dashboardKPIs.pendingReservations}
          change={-5}
          trend="down"
          icon={<Clock className="w-5 h-5 text-neon-orange" />}
          accentColor="orange"
        />
        <KPICard
          title="Total Garages"
          value={dashboardKPIs.totalGarages}
          icon={<Building2 className="w-5 h-5 text-neon-purple" />}
          accentColor="purple"
        />
        <KPICard
          title="Stock Alerts"
          value={dashboardKPIs.stockAlerts}
          change={-2}
          trend="down"
          icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
          accentColor="pink"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reservation Trends */}
        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Reservation Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reservationTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="reservations"
                  stroke="hsl(var(--neon-blue))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--neon-blue))', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: 'hsl(var(--neon-blue))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Stock Distribution */}
        <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Stock Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stockDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stockDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            Garage Locations
          </CardTitle>
          <p className="text-muted-foreground">
            Active garages are shown in green, maintenance in orange
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-96 rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
              <p className="text-sm">
                Garage locations would be displayed here with real map integration
              </p>
              <div className="mt-4 space-y-2">
                {garages.map((garage) => (
                  <div key={garage.id} className="flex items-center justify-between p-2 bg-background/50 rounded">
                    <span className="text-sm font-medium">{garage.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      garage.status === 'Active' ? 'bg-neon-green/20 text-neon-green' : 'bg-neon-orange/20 text-neon-orange'
                    }`}>
                      {garage.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;