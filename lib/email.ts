import nodemailer from 'nodemailer';

let transporter: any = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is missing');
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  try {
    const transporter = getTransporter();
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
    throw error;
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
  try {
    const transporter = getTransporter();
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
      subject: 'Order Data - True Analyzers',
      html: `
        <h2>Order Data</h2>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Price:</strong> $${price.toFixed(2)}</p>
        <p>We will contact you shortly with more details.</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
}
