// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');
const nodemailer = require('nodemailer');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Email transporter
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection test
async function testDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = await testDatabaseConnection();
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: dbStatus ? 'connected' : 'disconnected',
      version: '1.0.0',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, workEmail, phone, companyName, enquiryAbout, message, consent } = req.body;

    // Validation
    const errors = [];
    if (!fullName || fullName.trim().length < 2) {
      errors.push('Full name must be at least 2 characters');
    }
    if (!workEmail || !validator.isEmail(workEmail)) {
      errors.push('Valid work email is required');
    }
    if (!companyName || companyName.trim().length < 2) {
      errors.push('Company name must be at least 2 characters');
    }
    if (!message || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    }
    if (!consent) {
      errors.push('Consent to contact is required');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    // Save to database
    const query = `
      INSERT INTO contact_submissions 
      (full_name, work_email, phone, company_name, enquiry_about, message, consent, submitted_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      RETURNING id
    `;

    const values = [
      fullName.trim(),
      workEmail.trim(),
      phone?.trim() || null,
      companyName.trim(),
      enquiryAbout || 'General',
      message.trim(),
      consent,
    ];

    const result = await pool.query(query, values);

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hello@azaroth-techhive.com',
      subject: `New Contact Form Submission - ${fullName}`, 
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${workEmail}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryAbout}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: result.rows[0].id,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Get all contact submissions (admin endpoint)
app.get('/api/admin/contact-submissions', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, work_email, phone, company_name, enquiry_about, message, consent, submitted_at
       FROM contact_submissions
       ORDER BY submitted_at DESC
       LIMIT 100`
    );

    res.json({
      success: true,
      submissions: result.rows,
    });

  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Start server
async function startServer() {
  const dbConnected = await testDatabaseConnection();
  
  if (!dbConnected) {
    console.log('⚠️  Warning: Database connection failed. Server started without database.');
    console.log('   Run "npm run db:init" to initialize the database.');
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
