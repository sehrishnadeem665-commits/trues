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

    // Send email
    await sendOrderEmail(clientName, email, vinPlate, vehicleType, plan, price);

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in send-order route:", error);
    return NextResponse.json(
      { error: "Failed to submit order" },
      { status: 500 }
    );
  }
}
