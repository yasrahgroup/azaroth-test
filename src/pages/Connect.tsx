import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { ContactForm } from '../components/contact/ContactForm';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';

export const Connect: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Connect With Us — Azaroth Tech-Hive"
        description="Contact Azaroth Tech-Hive by phone, WhatsApp, or email from our Chennai office, or submit project inquiries through the online contact form."
        canonicalPath="/connect-with-us"
      />
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Get in Touch
          </Badge>
          <h1 style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-text-primary)' }}>
            Every Great Solution Starts With a Conversation
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            Whether you have a question, want to discuss a project, or explore how we can help, we're ready to listen and respond.
          </p>
        </div>
      </section>

      {/* Main Split Section: Office Info + Contact Form */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'flex-start',
          }}>
            
            {/* Left Column: Office Credentials & Direct Channels */}
            <div>
              <Badge variant="gold" style={{ marginBottom: '1rem' }}>
                Corporate Headquarters
              </Badge>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
                {companyInfo.headquarters.title}
              </h2>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our primary engineering center and solutions design lab operates out of Chennai, Tamil Nadu, 
                coordinating global client architectures across North America, Europe, and Asia-Pacific.
              </p>

              <Card variant="solid" padding="md" style={{ backgroundColor: 'var(--color-surface-soft)', border: '1px solid var(--color-border-subtle)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <MapPin size={20} style={{ color: 'var(--color-brand-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem' }}>Physical Address:</strong>
                      <span style={{ color: 'var(--color-text-primary)', fontSize: '0.9375rem' }}>
                        {companyInfo.headquarters.address}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <Phone size={20} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem' }}>Direct Line:</strong>
                      <a href={`tel:${companyInfo.headquarters.phone}`} style={{ color: 'var(--color-brand-gold)', fontWeight: 700, textDecoration: 'none' }}>
                        {companyInfo.headquarters.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <MessageSquare size={20} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem' }}>WhatsApp Inquiries:</strong>
                      <a href={`https://wa.me/${companyInfo.headquarters.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-brand-gold)', fontWeight: 700, textDecoration: 'none' }}>
                        +91 6379480931 (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <Mail size={20} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem' }}>General & Sales Email:</strong>
                      <a href={`mailto:${companyInfo.headquarters.email}`} style={{ color: 'var(--color-brand-gold)', fontWeight: 700, textDecoration: 'none' }}>
                        {companyInfo.headquarters.email}
                      </a>
                    </div>
                  </div>

                </div>
              </Card>

              {/* Direct Maps Action Button */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button
                  href={companyInfo.headquarters.mapsUrl}
                  variant="outline"
                  icon={<ExternalLink size={15} />}
                >
                  Locate on Google Maps
                </Button>
                <Button
                  href={`https://wa.me/${companyInfo.headquarters.whatsapp}`}
                  variant="primary"
                  icon={<MessageSquare size={15} />}
                >
                  Open WhatsApp Chat
                </Button>
              </div>

              {/* Operating Hours & NDA Disclaimer */}
              <div style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={15} />
                  <span>Engineering Operating Hours: Mon – Fri, 9:00 AM – 7:00 PM IST.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={15} />
                  <span>All communications are bound under enterprise confidentiality standards.</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Conversion Form */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <Badge variant="gold" style={{ marginBottom: '0.5rem' }}>
                  Online Inquiry Portal
                </Badge>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark-maroon)' }}>
                  Submit Project Inquiries
                </h3>
              </div>

              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
