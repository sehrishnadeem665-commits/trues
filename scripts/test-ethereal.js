const nodemailer = require('nodemailer');

async function run() {
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log('Ethereal account created:');
    console.log({ user: testAccount.user, pass: testAccount.pass });

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: 'ethereal-test@example.com',
      to: 'recipient@example.com',
      subject: 'Ethereal test message',
      text: 'Hello — this is a test from Ethereal via nodemailer.',
    });

    console.log('Message sent, messageId:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error('Ethereal test failed:', err);
    process.exit(1);
  }
}

run();
