// Initialize Speed Insights only in the browser and guard against failures
if (typeof window !== 'undefined') {
  try {
    // Lazy-import to avoid SSR / build-time issues
    // Note: keep @vercel/speed-insights installed
    import('@vercel/speed-insights').then(({ injectSpeedInsights }) => {
      try {
        injectSpeedInsights();
      } catch (e) {
        // don't let Speed Insights break the app
        // eslint-disable-next-line no-console
        console.warn('Speed Insights initialization failed:', e);
      }
    }).catch((e) => {
      // package couldn't be loaded at runtime; log but don't break app
      // eslint-disable-next-line no-console
      console.warn('Failed to load @vercel/speed-insights:', e);
    });
  } catch (e) {
    // Defensive fallback
    // eslint-disable-next-line no-console
    console.warn('Speed Insights initialization error:', e);
  }
}

import App from './App.svelte';

const app = new App({
  target: document.body,
});

export default app;
