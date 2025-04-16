
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Globe, 
  Brain, 
  Bot, 
  Cpu, 
  AlertCircle, 
  Settings,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, href, active }: NavItemProps) => {
  return (
    <Link to={href} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 font-normal hover:bg-primary/10",
          active && "bg-primary/10 text-primary"
        )}
      >
        <Icon size={20} />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

const Sidebar = () => {
  // In a real app, you'd determine the active route
  const activeRoute = "home";

  return (
    <div className="h-screen w-64 border-r border-border bg-card fixed left-0 top-0 flex flex-col">
      <div className="p-4 flex items-center gap-2 border-b border-border">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <Brain size={18} className="text-primary-foreground" />
        </div>
        <h1 className="font-semibold text-lg">AI Command Center</h1>
      </div>
      
      <div className="p-4">
        <Button 
          className="w-full justify-start gap-2 bg-primary/90 hover:bg-primary text-primary-foreground"
        >
          <Plus size={18} />
          <span>Create New</span>
        </Button>
      </div>
      
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto scrollbar-hide">
        <NavItem icon={Home} label="Home/Summary" href="/" active={activeRoute === "home"} />
        <NavItem icon={BookOpen} label="Active Notebooks" href="/notebooks" active={activeRoute === "notebooks"} />
        <NavItem icon={Globe} label="Google Accounts" href="/accounts" active={activeRoute === "accounts"} />
        <NavItem icon={Brain} label="Training" href="/training" active={activeRoute === "training"} />
        <NavItem icon={Bot} label="Personalized AI" href="/ai" active={activeRoute === "ai"} />
        <NavItem icon={Cpu} label="Resource Management" href="/resources" active={activeRoute === "resources"} />
        <NavItem icon={AlertCircle} label="Logs and Alerts" href="/logs" active={activeRoute === "logs"} />
        <NavItem icon={Settings} label="Configuration" href="/config" active={activeRoute === "config"} />
      </nav>
      
      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          <div className="text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-muted-foreground text-xs">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
