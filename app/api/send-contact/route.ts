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

    let savedToDb = false;

    try {
      const connection = await pool.getConnection();
      try {
        await connection.execute(
          "INSERT INTO contacts (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())",
          [name, email, subject, message]
        );
        savedToDb = true;
      } finally {
        connection.release();
      }
    } catch (dbError: any) {
      console.warn('DB insert unavailable; continuing with email send.', dbError?.message || dbError);
    }

    const emailSent = await sendContactEmail(name, email, subject, message);

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Contact email delivery failed.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: savedToDb
        ? 'Contact saved and email delivered.'
        : 'Contact email delivered; database save was unavailable.',
      savedToDb,
      emailSent,
    });
  } catch (error) {
    console.error("Error in send-contact route:", error);
    return NextResponse.json(
      { error: String(error), stack: (error as any)?.stack },
      { status: 500 }
    );
  }
}
