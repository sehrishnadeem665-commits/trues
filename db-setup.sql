-- Create database
CREATE DATABASE IF NOT EXISTS trueanalyzers;
USE trueanalyzers;

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created (created_at)
);
CREATE USER 'trueanalyzers'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON trueanalyzers.* TO 'trueanalyzers'@'localhost';
FLUSH PRIVILEGES;
-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  client_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  vin_plate VARCHAR(50) NOT NULL,
  vehicle_type VARCHAR(100) NOT NULL,
  plan VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'confirmed', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created (created_at)
);
