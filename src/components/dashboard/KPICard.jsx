import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
  accentColor?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
}

export function KPICard({
  title,
  value,
  change,
  icon,
  trend = 'neutral',
  className = '',
  accentColor = 'blue'
}: KPICardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-neon-green';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getAccentClass = () => {
    switch (accentColor) {
      case 'purple':
        return 'border-neon-purple/30 shadow-neon-purple hover:shadow-neon-purple';
      case 'green':
        return 'border-neon-green/30 shadow-neon-green hover:shadow-neon-green';
      case 'orange':
        return 'border-neon-orange/30 hover:border-neon-orange/50';
      case 'pink':
        return 'border-neon-pink/30 hover:border-neon-pink/50';
      default:
        return 'border-neon-blue/30 shadow-neon-blue hover:shadow-neon-blue';
    }
  };

  return (
    <Card className={`
      relative overflow-hidden transition-all duration-300 
      bg-glass-gradient backdrop-blur-glass border 
      ${getAccentClass()}
      hover:scale-105 hover:border-opacity-60
      ${className}
    `}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg bg-${accentColor === 'blue' ? 'neon-blue' : `neon-${accentColor}`}/10`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            {value}
          </div>
          {change !== undefined && (
            <div className={`flex items-center text-sm ${getTrendColor()}`}>
              {trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
              {trend === 'down' && <TrendingDown className="w-4 h-4 mr-1" />}
              {change > 0 ? '+' : ''}{change}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}