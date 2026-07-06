import { NextResponse } from 'next/server';
import { verifySmtp } from '@/lib/email';

export async function GET() {
  try {
    const result = await verifySmtp();
    if (result.ok) {
      return NextResponse.json({ success: true, message: 'SMTP verified' });
    }
    // Return detailed structured error info for debugging
    const { error, code, response, responseCode, stack } = result as any;
    return NextResponse.json({ success: false, error, code, response, responseCode, stack }, { status: 500 });
  } catch (err) {
    console.error('Error in test-smtp route:', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
