const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

function loadEnv(envPath) {
  const env = {};
  if (!fs.existsSync(envPath)) return env;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^\s*([^#=]+?)\s*=\s*(.*)\s*$/);
    if (m) {
      let [, key, val] = m;
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key.trim()] = val;
    }
  }
  return env;
}

const repoRoot = path.resolve(__dirname, '..');
const envFile = path.join(repoRoot, '.env');
const env = loadEnv(envFile);
Object.assign(process.env, env);

const host = process.env.SMTP_HOST;
const port = parseInt(process.env.SMTP_PORT || '587', 10);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const secure = (process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;
const requireTLS = process.env.SMTP_REQUIRE_TLS === 'true';

if (!host || !user || !pass) {
  console.error('SMTP not configured. Values found:', { host, user, pass: pass ? '***' : null });
  process.exit(2);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  requireTLS,
  auth: { user, pass },
  tls: { rejectUnauthorized: false },
});

console.log('Verifying SMTP transporter with:', { host, port, secure, user: user });

transporter.verify(function(err, success) {
  if (err) {
    console.error('SMTP verify failed:');
    console.error(err);
    process.exit(1);
  } else {
    console.log('SMTP verified successfully');
    // Try sending a small test message to ADMIN_EMAIL (fallback to SMTP_USER)
    const admin = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
    const testMsg = {
      from: process.env.SMTP_FROM || admin,
      to: admin,
      subject: 'Test email from scripts/test-smtp.js',
      text: 'This is a test message to verify outbound email delivery.',
    };

    transporter.sendMail(testMsg, (sendErr, info) => {
      if (sendErr) {
        console.error('Test send failed:');
        console.error(sendErr);
        process.exit(1);
      } else {
        console.log('Test send succeeded. messageId:', info && info.messageId);
        console.log('Envelope:', info && info.envelope);
        console.log('Response:', info && info.response);
        process.exit(0);
      }
    });
  }
});
