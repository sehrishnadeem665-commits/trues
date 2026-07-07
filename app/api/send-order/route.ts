import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email";
import pool from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { clientName, email, vinPlate, vehicleType, plan, price, debug } = data;

    if (!clientName || !email || !vinPlate || !vehicleType || !plan || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Try to store in database, but do NOT block email sending if DB fails.
    let dbSaved = false;
    try {
      const connection = await pool.getConnection();
      try {
        await connection.execute(
          "INSERT INTO orders (client_name, email, vin_plate, vehicle_type, plan, price, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())",
          [clientName, email, vinPlate, vehicleType, plan, price]
        );
        dbSaved = true;
      } catch (dbError: any) {
        console.error('DB insert error in send-order route (continuing):', dbError);
      } finally {
        connection.release();
      }
    } catch (connErr: any) {
      console.error('DB connection error in send-order route (continuing):', connErr);
    }

    if (debug) {
      // For debugging: perform send synchronously and return result.
      try {
        const emailSent = await sendOrderEmail(clientName, email, vinPlate, vehicleType, plan, price);
        if (!emailSent) {
          console.error('Debug: order email failed to send.');
        }
        return NextResponse.json({ success: true, message: 'Order saved (debug)', emailSent });
      } catch (err: any) {
        console.error('Debug: order email error:', err);
        return NextResponse.json({ success: true, message: 'Order saved (debug)', emailSent: false, error: String(err) });
      }
    }

    // Normal background send
    sendOrderEmail(clientName, email, vinPlate, vehicleType, plan, price)
      .then((emailSent) => {
        if (!emailSent) {
          console.error('Background order email failed to send.');
        }
      })
      .catch((err) => {
        console.error('Background order email error:', err);
      });

    return NextResponse.json({ success: true, message: 'Order saved and email delivery started.' });
  } catch (error) {
    console.error("Error in send-order route:", error);
    return NextResponse.json(
      { error: String(error), stack: (error as any)?.stack },
      { status: 500 }
    );
  }
}
