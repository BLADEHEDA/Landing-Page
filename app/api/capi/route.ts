import { NextResponse } from 'next/server';
import crypto from 'crypto';

function hashData(data: string | undefined) {
  if (!data) return undefined;
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventName, eventId, sourceUrl, userData, customData } = body;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: sourceUrl,
          action_source: "website",
          user_data: {
            em: userData?.email ? [hashData(userData.email)] : undefined,
            ph: userData?.phone ? [hashData(userData.phone)] : undefined,
            fn: userData?.firstName ? [hashData(userData.firstName)] : undefined,
            ln: userData?.lastName ? [hashData(userData.lastName)] : undefined,
            client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0],
            client_user_agent: req.headers.get('user-agent'),
          },
          custom_data: customData || {},
        },
      ],
      // test_event_code: "TEST9573", // Uncomment this line when testing in Meta Events Manager
    };

    const pixelId = '1397197105312098';
    const accessToken = process.env.FB_ACCESS_TOKEN;

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'CAPI execution failed' }, { status: 500 });
  }
}