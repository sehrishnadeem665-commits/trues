import nodemailer, { Transporter } from 'nodemailer';

let transporter: Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const envSecure = process.env.SMTP_SECURE;
  const requireTLS = process.env.SMTP_REQUIRE_TLS === 'true';

  if (!host || !user || !pass) {
    console.warn('SMTP configuration is missing; skipping email sending.');
    return null;
  }

  const secure = typeof envSecure === 'string'
    ? envSecure.toLowerCase() === 'true'
    : port === 465;

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS,
    auth: {
      user,
      pass,
    },
    tls: { rejectUnauthorized: false },
  });

  // Verify transporter asynchronously so we log configuration problems early in runtime logs.
  transporter.verify((err, success) => {
    if (err) {
      console.error('SMTP verification failed:', {
        message: err?.message,
        code: err?.code,
        response: err?.response,
        responseCode: err?.responseCode,
      });
      transporter = null;
    } else {
      console.info('SMTP transporter verified');
    }
  });

  return transporter;
}

export async function verifySmtp() {
  const t = getTransporter();
  if (!t) {
    return { ok: false, error: 'SMTP not configured (missing SMTP_HOST/SMTP_USER/SMTP_PASS)' };
  }

  try {
    await t.verify();
    return { ok: true };
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || String(err),
      code: err?.code,
      response: err?.response,
      responseCode: err?.responseCode,
      stack: err?.stack,
      raw: err,
    };
  }
}

export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn('Skipping contact email because SMTP is not configured.');
    return false;
  }

  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'noreply@trueanalyzers.com';

    await transporter.sendMail({
      from: process.env.SMTP_FROM || adminEmail,
      to: adminEmail,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

export async function sendOrderEmail(
  clientName: string,
  email: string,
  vinPlate: string,
  vehicleType: string,
  plan: string,
  price: number
) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn('Skipping order email because SMTP is not configured.');
    return false;
  }

  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'noreply@trueanalyzers.com';

    await transporter.sendMail({
      from: process.env.SMTP_FROM || adminEmail,
      to: adminEmail,
      subject: `New Order from ${clientName}`,
      html: `
        <h2>New Order Submission</h2>
        <p><strong>Client Name:</strong> ${clientName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>VIN/Plate:</strong> ${vinPlate}</p>
        <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Price:</strong> $${price.toFixed(2)}</p>
      `,
      replyTo: email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM || adminEmail,
      to: email,
      subject: 'Order Confirmation - True Analyzers',
      html: `
        <h2>Order Confirmation</h2>
        <p>Thank you for your order!</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Price:</strong> $${price.toFixed(2)}</p>
        <p>We will contact you shortly with more details.</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}
