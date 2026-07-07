import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import pool from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store in database first so the form submit succeeds quickly.
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        "INSERT INTO contacts (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())",
        [name, email, subject, message]
      );
    } catch (dbError: any) {
      console.error('DB insert error in send-contact route:', dbError);
      return NextResponse.json(
        {
          error: dbError?.message || 'Database insert failed',
          code: dbError?.code,
        },
        { status: 500 }
      );
    } finally {
      connection.release();
    }

    sendContactEmail(name, email, subject, message)
      .then((emailSent) => {
        if (!emailSent) {
          console.error('Background contact email failed to send.');
        }
      })
      .catch((err) => {
        console.error('Background contact email error:', err);
      });

    return NextResponse.json({ success: true, message: 'Contact saved and email delivery started.' });
  } catch (error) {
    console.error("Error in send-contact route:", error);
    return NextResponse.json(
      { error: String(error), stack: (error as any)?.stack },
      { status: 500 }
    );
  }
}
