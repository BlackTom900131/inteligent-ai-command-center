
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface Session {
  id: string;
  notebook: string;
  ai: string;
  time: string;
  region: string;
  status: 'active' | 'idle' | 'error';
}

interface ActiveSessionsTableProps {
  sessions: Session[];
  className?: string;
}

const ActiveSessionsTable = ({ sessions, className }: ActiveSessionsTableProps) => {
  return (
    <div className={cn("glass-card overflow-hidden", className)}>
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-medium">Active Sessions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-card/50">
              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Notebook</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">AI</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Time</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Region</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id} className="border-b border-border hover:bg-muted/5">
                <td className="px-4 py-2 text-xs">{session.notebook}</td>
                <td className="px-4 py-2 text-xs mono">{session.ai}</td>
                <td className="px-4 py-2 text-xs mono">{session.time}</td>
                <td className="px-4 py-2 text-xs">{session.region}</td>
                <td className="px-4 py-2">
                  <Badge variant={
                    session.status === 'active' ? 'success' : 
                    session.status === 'idle' ? 'warning' : 
                    'destructive'
                  } className="text-xs">
                    {session.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveSessionsTable;
