
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AICard from '@/components/AICard';
import { Button } from '@/components/ui/button';
import { Plus, Filter, SortAsc } from 'lucide-react';
import { aiList } from '@/data/mockData';

const AIManagement = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64 flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-1">AI Management</h1>
            <p className="text-muted-foreground">Create, train, and manage your AI models</p>
          </div>
          <Button className="bg-primary/90 hover:bg-primary text-primary-foreground">
            <Plus size={18} className="mr-2" />
            Train New AI
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search AI models..." 
              className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <SortAsc size={16} className="mr-2" />
            Sort
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Expanded AI list for the dedicated page */}
          {[...aiList, ...aiList].map((ai, index) => (
            <AICard key={`${ai.id}-${index}`} ai={{
              ...ai,
              id: `${ai.id}-${index}`,
              name: index >= aiList.length ? `${ai.name} ${index - aiList.length + 2}` : ai.name
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIManagement;
