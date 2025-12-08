import { injectSpeedInsights } from '@vercel/speed-insights';
import App from './App.svelte';

// Initialize Vercel Speed Insights (client-side only)
injectSpeedInsights();

const app = new App({
  target: document.getElementById('app'),
});

export default app;
