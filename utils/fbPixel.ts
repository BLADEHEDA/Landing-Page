// utils/fbPixel.ts
export const trackMetaEvent = async (
  eventName: string,
  customData: Record<string, any> = {},
  userData: Record<string, any> = {}
) => {
  // Unique event_id for deduplication
  const eventId = `${eventName}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  // 1. Browser Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData, { eventID: eventId });
  }

  // 2. Server-Side CAPI
  try {
    await fetch('/api/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        userData,
        customData,
      }),
    });
  } catch (err) {
    console.error("CAPI dispatch error:", err);
  }
};