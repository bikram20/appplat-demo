import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, page, data, metadata } = body;

    await query(
      'INSERT INTO analytics (event, page, data, metadata, timestamp) VALUES ($1, $2, $3, $4, $5)',
      [event, page || null, data || null, metadata || null, new Date()]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track event' },
      { status: 500 }
    );
  }
}
