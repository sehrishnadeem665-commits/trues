import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT 1 AS ok');
      return NextResponse.json({ success: true, rows });
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error('DB test error:', err);
    return NextResponse.json({ success: false, error: err?.message || String(err), code: err?.code }, { status: 500 });
  }
}
