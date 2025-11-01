export async function trackPageView(page: string, metadata?: Record<string, any>) {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'page_view',
        page,
        metadata,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

export async function trackEvent(event: string, data?: Record<string, any>) {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        data,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

export async function trackTourEvent(tourId: string, step: number, action: string) {
  return trackEvent('tour_event', { tourId, step, action });
}
