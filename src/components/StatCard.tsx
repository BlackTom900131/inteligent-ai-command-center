
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  status?: 'success' | 'warning' | 'danger' | 'neutral';
  trend?: {
    value: number;
    isUpward: boolean;
  };
  className?: string;
}

const StatCard = ({ 
  title, 
  value, 
  icon, 
  status = 'neutral',
  trend,
  className 
}: StatCardProps) => {
  const statusColorMap = {
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    neutral: 'bg-muted/10 text-foreground border-border'
  };

  return (
    <div className={cn(
      "glass-card p-4 flex flex-col gap-2 transition-all hover:shadow-md", 
      className
    )}>
      <div className="flex justify-between items-start">
        <div className="text-muted-foreground text-sm font-medium">{title}</div>
        <div className={cn(
          "p-2 rounded-full",
          status === 'success' && "bg-success/10 text-success",
          status === 'warning' && "bg-warning/10 text-warning",
          status === 'danger' && "bg-danger/10 text-danger",
          status === 'neutral' && "bg-muted/10 text-muted-foreground"
        )}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-end gap-2">
        <div className="text-2xl font-semibold mono">{value}</div>
        {trend && (
          <Badge variant={trend.isUpward ? "success" : "destructive"} className="mb-1">
            {trend.isUpward ? '↑' : '↓'} {Math.abs(trend.value)}%
          </Badge>
        )}
      </div>
    </div>
  );
};

export default StatCard;
