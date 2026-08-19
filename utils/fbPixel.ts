export const trackMetaEvent = async (
  eventName: string,
  customData: Record<string, any> = {},
  userData: Record<string, any> = {}
) => {
  // Generate a unique ID to ensure deduplication between Browser and Server
  const eventId = `${eventName}_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

  // 1. Send Browser Meta Pixel Event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData, { eventID: eventId });
  }

  // 2. Send Server CAPI Event
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
    console.error('CAPI dispatch error:', err);
  }
};