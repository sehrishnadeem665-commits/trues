# MySQL Migration Guide

## Setup Instructions

### 1. Install MySQL
- Download and install MySQL from https://dev.mysql.com/downloads/mysql/
- Or use Docker: `docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your_password mysql:latest`

### 2. Create Database & Tables
Run the SQL commands in `db-setup.sql`:
```bash
mysql -u root -p < db-setup.sql
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` and configure:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=trueanalyzers

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@trueanalyzers.com
ADMIN_EMAIL=admin@trueanalyzers.com
```

### 4. For Gmail SMTP
1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `SMTP_PASS`

### 5. Install Dependencies
```bash
npm install
```

### 6. Remove Supabase Folder
Delete the `supabase/` folder from your project as it's no longer needed.

## Database Schema

### contacts table
- `id`: Auto-increment primary key
- `name`: Contact name
- `email`: Contact email
- `subject`: Message subject
- `message`: Message body
- `created_at`: Timestamp

### orders table
- `id`: Auto-increment primary key
- `client_name`: Client name
- `email`: Client email
- `phone`: Client phone number
- `vin_plate`: Vehicle VIN or plate
- `vehicle_type`: Type of vehicle
- `plan`: Service plan
- `price`: Order price
- `status`: Order status (pending, confirmed, processing, completed, cancelled)
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Development
```bash
npm run dev
```

The app will now:
- Store contact forms and orders directly in MySQL
- Send emails via configured SMTP server
- No longer depend on Supabase
