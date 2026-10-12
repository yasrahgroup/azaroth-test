-- backend/scripts/schema.sql
-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  work_email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company_name VARCHAR(255) NOT NULL,
  enquiry_about VARCHAR(100) DEFAULT 'General',
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  ip_address INET,
  user_agent TEXT,

  CONSTRAINT chk_email_format CHECK (work_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT chk_phone_format CHECK (phone IS NULL OR phone ~* '^[0-9\s\-\(\)\+]+$')
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(work_email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_consent ON contact_submissions(consent);

-- Create function for updating updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER trigger_update_updated_at
BEFORE UPDATE ON contact_submissions
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO contact_submissions 
(full_name, work_email, phone, company_name, enquiry_about, message, consent) 
VALUES 
('John Smith', 'john@techstartup.com', '+1-234-567-8900', 'Tech Startup Inc', 'General', 
 'I would like to discuss enterprise software solutions for our growing company. Please provide more information about your services.', true),
('Sarah Johnson', 'sarah@enterprise-solutions.com', '+44-20-7946-0958', 'Enterprise Solutions Ltd', 'Products', 
 'We are interested in your Fitness Management System for our chain of health clubs. Can you provide pricing and implementation details?', true),
('Michael Chen', 'michael@digital-transform.com', NULL, 'Digital Transform Corp', 'Services', 
 'We need help modernizing our legacy systems. Please provide a comprehensive consultation and transformation plan.', true)
ON CONFLICT (id) DO NOTHING;

-- Create audit log table
CREATE TABLE IF NOT EXISTS audit_logs (
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(100) NOT NULL,
  record_id INTEGER NOT NULL,
  action VARCHAR(10) NOT NULL, -- INSERT, UPDATE, DELETE
  old_values JSONB,
  new_values JSONB,
  user_id VARCHAR(100),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT chk_action CHECK (action IN ('INSERT', 'UPDATE', 'DELETE'))
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_table_record ON audit_logs(table_name, record_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);
