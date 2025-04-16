
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  CartesianGrid,
  TooltipProps
} from 'recharts';
import { cn } from '@/lib/utils';

interface UsageChartProps {
  title: string;
  subtitle?: string;
  data: any[];
  dataKey: string;
  color: string;
  xAxisDataKey?: string;
  className?: string;
  valueFormatter?: (value: number) => string;
}

const UsageChart = ({
  title,
  subtitle,
  data,
  dataKey,
  color,
  xAxisDataKey = 'time',
  className,
  valueFormatter = (value) => `${value}%`
}: UsageChartProps) => {
  const CustomTooltip = ({
    active,
    payload
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 border border-border rounded-md text-xs shadow-md">
          <p className="mono">{payload[0].payload[xAxisDataKey]}</p>
          <p className="text-foreground font-medium mono">
            {valueFormatter(payload[0].value as number)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn("glass-card p-4 flex flex-col", className)}>
      <div className="mb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey={xAxisDataKey} 
              tick={{ fontSize: 10 }} 
              stroke="rgba(255,255,255,0.3)"
            />
            <YAxis 
              tick={{ fontSize: 10 }} 
              stroke="rgba(255,255,255,0.3)"
              tickFormatter={valueFormatter}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#gradient-${dataKey})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageChart;
