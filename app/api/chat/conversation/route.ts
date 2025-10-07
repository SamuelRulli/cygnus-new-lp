import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const TARGET_URL = 'https://n8n.samrulli.com/webhook/ede8ff15-e20f-4751-a2a1-bc5680ebc99c/chat';

// Handle the initial loading of the chatbot interface
export async function GET() {
  try {
    const response = await fetch(TARGET_URL, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      return new NextResponse('Failed to fetch chatbot content', { status: response.status });
    }

    let html = await response.text();

    // Replace the absolute URL in the client-side code with our relative proxy path.
    // This makes the chatbot's subsequent API calls go through our proxy.
    html = html.replace(new RegExp(TARGET_URL, 'g'), '/api/chat/conversation');

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Proxy error (GET):', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Handle the subsequent API calls from the chatbot
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(TARGET_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return new NextResponse('Failed to proxy chatbot API request', { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error (POST):', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
