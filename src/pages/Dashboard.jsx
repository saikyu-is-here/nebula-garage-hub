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
  BarChart,
  Bar,
} from "recharts";
import { dashboardKPIs, reservationTrends, stockDistribution, garages, reservations } from "@/data/mockData";

// DashboardProps interface removed for JavaScript

const Dashboard = ({ user }) => {

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
      <div className={`grid grid-cols-1 md:grid-cols-2 ${user?.role === 'manager' ? 'lg:grid-cols-3' : 'lg:grid-cols-5'} gap-6`}>
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
        {user?.role !== 'manager' && (
          <KPICard
            title="Total Garages"
            value={dashboardKPIs.totalGarages}
            icon={<Building2 className="w-5 h-5 text-neon-purple" />}
            accentColor="purple"
          />
        )}
        <KPICard
          title="Stock Alerts"
          value={dashboardKPIs.stockAlerts}
          change={-2}
          trend="down"
          icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
          accentColor="pink"
        />
      </div>

      {/* Latest Reservations */}
      <Card className="bg-glass-gradient backdrop-blur-glass border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            Latest Reservations
          </CardTitle>
          <p className="text-muted-foreground">
            Recent customer reservations
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reservations.slice(0, 5).map((reservation, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{reservation.customer}</span>
                      <span className="text-sm text-muted-foreground">{reservation.garage}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-foreground">
                    {reservation.tyre}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Qty: {reservation.quantity}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      reservation.status === 'Confirmed' 
                        ? 'bg-neon-green/20 text-neon-green' 
                        : reservation.status === 'Pending'
                        ? 'bg-neon-orange/20 text-neon-orange'
                        : 'bg-neon-blue/20 text-neon-blue'
                    }`}>
                      {reservation.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
              Stock Distribution by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockDistribution} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [value, 'Quantity']}
                />
                <Bar 
                  dataKey="value" 
                  fill="hsl(var(--neon-blue))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Map Section - Hidden for managers */}
      {user?.role !== 'manager' && (
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
            <div className="h-96 rounded-lg overflow-hidden bg-muted/20 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-2xl p-6">
                  {garages.map((garage, index) => (
                    <div 
                      key={garage.id} 
                      className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 cursor-pointer ${
                        garage.status === 'Active' 
                          ? 'bg-neon-green/10 border-neon-green/30 hover:bg-neon-green/20' 
                          : 'bg-neon-orange/10 border-neon-orange/30 hover:bg-neon-orange/20'
                      }`}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          garage.status === 'Active' ? 'bg-neon-green' : 'bg-neon-orange'
                        } shadow-lg animate-pulse`} />
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{garage.name}</h4>
                          <p className="text-xs text-muted-foreground">{garage.location}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              garage.status === 'Active' 
                                ? 'bg-neon-green/20 text-neon-green' 
                                : 'bg-neon-orange/20 text-neon-orange'
                            }`}>
                              {garage.status}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {garage.totalStock} units
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;