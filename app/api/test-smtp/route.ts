import { NextResponse } from 'next/server';
import { verifySmtp } from '@/lib/email';

export async function GET() {
  try {
    const result = await verifySmtp();
    if (result.ok) {
      return NextResponse.json({ success: true, message: 'SMTP verified' });
    }
    return NextResponse.json({ success: false, error: result.error, raw: result.raw }, { status: 500 });
  } catch (err) {
    console.error('Error in test-smtp route:', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
