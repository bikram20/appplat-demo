export interface App {
  id: string;
  name: string;
  status: 'healthy' | 'deploying' | 'error';
  deployedAt: string;
  liveUrl: string;
  region: string;
  components: number;
  isInteractive: boolean;
}

export const apps: App[] = [
  {
    id: '1',
    name: 'plankton-app',
    status: 'healthy',
    deployedAt: '5 months ago',
    liveUrl: 'https://plankton-app.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: true
  },
  {
    id: '2',
    name: 'jellyfish-app',
    status: 'healthy',
    deployedAt: 'about 2 months ago',
    liveUrl: 'https://jellyfish-app.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: false
  },
  {
    id: '3',
    name: 'devcontainer-app',
    status: 'healthy',
    deployedAt: '3 months ago',
    liveUrl: 'https://devcontainer-app.ondigitalocean.app',
    region: 'SFO3',
    components: 2,
    isInteractive: false
  },
  {
    id: '4',
    name: 'orca-app',
    status: 'healthy',
    deployedAt: '4 months ago',
    liveUrl: 'https://orca-app.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: false
  },
  {
    id: '5',
    name: 'revenue-modeling',
    status: 'healthy',
    deployedAt: '15 days ago',
    liveUrl: 'https://revenue-modeling.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: false
  },
  {
    id: '6',
    name: 'next15-todo-mcp',
    status: 'healthy',
    deployedAt: '15 days ago',
    liveUrl: 'https://next15-todo-mcp.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: false
  },
  {
    id: '7',
    name: 'pocketbase',
    status: 'healthy',
    deployedAt: '6 days ago',
    liveUrl: 'https://pocketbase.ondigitalocean.app',
    region: 'SFO3',
    components: 1,
    isInteractive: false
  },
  {
    id: '8',
    name: 'n8n',
    status: 'healthy',
    deployedAt: '5 days ago',
    liveUrl: 'https://n8n.ondigitalocean.app',
    region: 'NYC1',
    components: 2,
    isInteractive: false
  },
  {
    id: '9',
    name: 'done-it',
    status: 'healthy',
    deployedAt: '2 days ago',
    liveUrl: 'https://done-it.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: false
  },
  {
    id: '10',
    name: 'done-it-2',
    status: 'healthy',
    deployedAt: '2 days ago',
    liveUrl: 'https://done-it-2.ondigitalocean.app',
    region: 'NYC1',
    components: 1,
    isInteractive: false
  }
];
