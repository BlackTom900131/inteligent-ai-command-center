
import React from 'react';
import { Bot, Edit, LineChart, Play, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AICardProps {
  ai: {
    id: string;
    name: string;
    type: string;
    status: 'active' | 'inactive' | 'training' | 'pending';
    dataset: string;
    lastModified: string;
  };
  className?: string;
}

const AICard = ({ ai, className }: AICardProps) => {
  const statusColorMap = {
    active: "bg-success/10 text-success border-success/20",
    inactive: "bg-muted/10 text-muted-foreground border-border",
    training: "bg-warning/10 text-warning border-warning/20",
    pending: "bg-secondary/10 text-secondary border-secondary/20"
  };

  const statusLabels = {
    active: "Active",
    inactive: "Inactive",
    training: "Training",
    pending: "Pending"
  };

  return (
    <div className={cn(
      "glass-card p-4 flex flex-col gap-3 transition-all hover:shadow-md", 
      className
    )}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
            <Bot size={18} />
          </div>
          <div>
            <h3 className="font-medium text-sm">{ai.name}</h3>
            <p className="text-xs text-muted-foreground">{ai.type}</p>
          </div>
        </div>
        <Badge variant={ai.status === 'active' 
          ? 'success' 
          : ai.status === 'training' 
            ? 'warning' 
            : ai.status === 'pending' 
              ? 'secondary' 
              : 'default'
        }>
          {statusLabels[ai.status]}
        </Badge>
      </div>
      
      <div className="text-xs space-y-1.5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 text-muted-foreground flex items-center justify-center">
            <Calendar size={14} />
          </div>
          <span className="text-muted-foreground">Dataset:</span>
          <span className="mono">{ai.dataset}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 text-muted-foreground flex items-center justify-center">
            <Calendar size={14} />
          </div>
          <span className="text-muted-foreground">Last Modified:</span>
          <span className="mono">{ai.lastModified}</span>
        </div>
      </div>
      
      <div className="flex gap-2 mt-auto pt-2">
        <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
          <Edit size={14} className="mr-1" /> Edit
        </Button>
        <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
          <LineChart size={14} className="mr-1" /> Results
        </Button>
        <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
          <Play size={14} className="mr-1" /> Assign
        </Button>
      </div>
    </div>
  );
};

export default AICard;
