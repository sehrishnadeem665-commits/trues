import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email";
import pool from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { clientName, email, vinPlate, vehicleType, plan, price } = data;

    if (!clientName || !email || !vinPlate || !vehicleType || !plan || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email if configured; do not fail the request if email cannot be sent.
    const emailSent = await sendOrderEmail(clientName, email, vinPlate, vehicleType, plan, price);
    if (!emailSent) {
      console.warn('Order email was skipped or failed, but order data will still be stored.');
    }

    // Store in database
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        "INSERT INTO orders (client_name, email, vin_plate, vehicle_type, plan, price, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())",
        [clientName, email, vinPlate, vehicleType, plan, price]
      );
    } finally {
      connection.release();
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (error) {
    console.error("Error in send-order route:", error);
    return NextResponse.json(
      { error: "Failed to submit order" },
      { status: 500 }
    );
  }
}
