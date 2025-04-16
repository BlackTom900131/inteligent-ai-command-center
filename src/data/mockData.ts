
// Mock data for the dashboard
export const summaryStats = {
  activeNotebooks: 8,
  trainingInProgress: 2,
  availableAccounts: 15,
  gpuUsage: 68,
  ramUsage: 52,
  vramUsage: 83,
  activeAlerts: 3
};

// Mock data for usage graphs
const generateTimeSeriesData = (
  hours: number, 
  baseValue: number, 
  volatility: number
) => {
  const data = [];
  const now = new Date();
  
  for (let i = hours; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    const value = Math.max(
      0, 
      Math.min(
        100, 
        baseValue + (Math.random() * volatility * 2 - volatility)
      )
    );
    
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      value: Math.round(value * 10) / 10
    });
  }
  
  return data;
};

export const gpuUsageData = generateTimeSeriesData(12, 70, 20);
export const vramUsageData = generateTimeSeriesData(12, 80, 15);
export const ramUsageData = generateTimeSeriesData(12, 50, 10);

// Mock data for AI management
export const aiList = [
  {
    id: 'ai-1',
    name: 'Research Assistant',
    type: 'LoRA Fine-tuned',
    status: 'active' as const,
    dataset: 'research-papers-v2',
    lastModified: '2025-04-12'
  },
  {
    id: 'ai-2',
    name: 'Code Helper',
    type: 'Full Model',
    status: 'active' as const,
    dataset: 'code-examples-v3',
    lastModified: '2025-04-14'
  },
  {
    id: 'ai-3',
    name: 'Data Analyzer',
    type: 'Task Assistant',
    status: 'training' as const,
    dataset: 'analytics-dataset-v1',
    lastModified: '2025-04-15'
  },
  {
    id: 'ai-4',
    name: 'Content Writer',
    type: 'LoRA Fine-tuned',
    status: 'inactive' as const,
    dataset: 'blog-content-v2',
    lastModified: '2025-03-30'
  }
];

// Mock data for active sessions
export const activeSessions = [
  {
    id: 'session-1',
    notebook: 'Research Paper Analysis',
    ai: 'Research Assistant',
    time: '1h 23m',
    region: 'US East',
    status: 'active' as const
  },
  {
    id: 'session-2',
    notebook: 'Code Refactoring',
    ai: 'Code Helper',
    time: '45m',
    region: 'EU West',
    status: 'active' as const
  },
  {
    id: 'session-3',
    notebook: 'Quarterly Report',
    ai: 'Data Analyzer',
    time: '2h 05m',
    region: 'Asia Pacific',
    status: 'idle' as const
  },
  {
    id: 'session-4',
    notebook: 'Marketing Content',
    ai: 'Content Writer',
    time: '17m',
    region: 'US West',
    status: 'error' as const
  }
];

// Mock data for notebook usage over time
export const notebookUsageData = [
  { name: 'Mon', notebooks: 4 },
  { name: 'Tue', notebooks: 6 },
  { name: 'Wed', notebooks: 5 },
  { name: 'Thu', notebooks: 8 },
  { name: 'Fri', notebooks: 9 },
  { name: 'Sat', notebooks: 7 },
  { name: 'Sun', notebooks: 8 }
];
