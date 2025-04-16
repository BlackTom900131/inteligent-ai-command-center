
import React from 'react';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import UsageChart from '@/components/UsageChart';
import AICard from '@/components/AICard';
import ActiveSessionsTable from '@/components/ActiveSessionsTable';
import { 
  BookOpen, 
  Brain, 
  Globe, 
  Cpu, 
  AlertCircle,
  BarChart 
} from 'lucide-react';

import { 
  summaryStats, 
  gpuUsageData, 
  vramUsageData, 
  ramUsageData, 
  aiList, 
  activeSessions,
  notebookUsageData
} from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64 flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">AI Command Center</h1>
          <p className="text-muted-foreground">Monitor and manage your AI resources in real-time</p>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Active Notebooks" 
            value={summaryStats.activeNotebooks} 
            icon={<BookOpen size={18} />}
            status="success"
          />
          <StatCard 
            title="Training in Progress" 
            value={summaryStats.trainingInProgress} 
            icon={<Brain size={18} />}
            status="warning"
          />
          <StatCard 
            title="Available Accounts" 
            value={summaryStats.availableAccounts} 
            icon={<Globe size={18} />}
            status="neutral"
          />
          <StatCard 
            title="Active Alerts" 
            value={summaryStats.activeAlerts} 
            icon={<AlertCircle size={18} />}
            status="danger"
          />
        </div>
        
        {/* Resource Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard 
            title="GPU Usage" 
            value={`${summaryStats.gpuUsage}%`} 
            icon={<Cpu size={18} />}
            status={summaryStats.gpuUsage > 80 ? "danger" : summaryStats.gpuUsage > 60 ? "warning" : "success"}
            trend={{ value: 12, isUpward: true }}
          />
          <StatCard 
            title="RAM Usage" 
            value={`${summaryStats.ramUsage}%`} 
            icon={<Cpu size={18} />}
            status={summaryStats.ramUsage > 80 ? "danger" : summaryStats.ramUsage > 60 ? "warning" : "success"}
            trend={{ value: 5, isUpward: false }}
          />
          <StatCard 
            title="VRAM Usage" 
            value={`${summaryStats.vramUsage}%`} 
            icon={<Cpu size={18} />}
            status={summaryStats.vramUsage > 80 ? "danger" : summaryStats.vramUsage > 60 ? "warning" : "success"}
            trend={{ value: 8, isUpward: true }}
          />
        </div>
        
        {/* Usage Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <UsageChart 
            title="GPU Usage Over Time" 
            subtitle="Last 12 hours"
            data={gpuUsageData} 
            dataKey="value" 
            color="#38BDF8" 
          />
          <UsageChart 
            title="VRAM Usage Over Time" 
            subtitle="Last 12 hours"
            data={vramUsageData} 
            dataKey="value" 
            color="#8B5CF6" 
          />
        </div>
        
        {/* Active Sessions Table */}
        <div className="mb-6">
          <ActiveSessionsTable sessions={activeSessions} />
        </div>
        
        {/* AI Management */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">AI Management</h2>
            <a href="/ai" className="text-primary text-sm hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiList.map(ai => (
              <AICard key={ai.id} ai={ai} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
