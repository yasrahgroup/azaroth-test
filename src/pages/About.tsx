import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, Building2 } from 'lucide-react';
import { companyInfo, companyVisionMission } from '../data/companyData';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';

export const About: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="About Azaroth Tech-Hive — Engineering Better Ways to Work"
        description="Learn about Azaroth Tech-Hive: our story, vision, mission, and the engineering practices behind dependable software for enterprises in Chennai and worldwide."
        canonicalPath="/about"
      />
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Who We Are
          </Badge>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Engineering better ways to work, build, and grow.
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            We turn ideas and complex challenges into dependable software through lifecycle engineering, intelligent automation, seamless integration, AI capabilities, and continuous improvement.
          </p>
        </div>
      </section>

      {/* About Us Content - Two Column Layout */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}>
            {/* Left: Decorative panel (no photo) */}
            <div>
              <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--color-surface-lavender) 0%, var(--color-surface-peach) 100%)',
                  border: '2px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '20%',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(117, 68, 216, 0.15) 0%, rgba(117, 68, 216, 0) 70%)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '20%',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(216, 173, 89, 0.12) 0%, rgba(216, 173, 89, 0) 70%)',
                }} />
                <div style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  border: '2px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-brand-violet)',
                  boxShadow: 'var(--shadow-lg)',
                }}>
                  <Building2 size={64} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <Badge variant="gold" style={{ marginBottom: '1rem' }}>
                About Us
              </Badge>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
                Engineering meaningful solutions. Building lasting value.
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Azaroth Tech-Hive delivers practical software engineering solutions that help businesses overcome technical challenges, improve operations, and turn ideas into dependable digital products. We partner with organizations to build systems that scale, evolve, and drive meaningful business outcomes.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                From custom applications and enterprise platforms to cloud infrastructure and AI-powered capabilities, we deliver end-to-end engineering excellence that empowers organizations to innovate, adapt, and scale with confidence in an ever-evolving digital landscape.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button to="/delivery-framework" variant="violet">
                  Review Delivery Process
                </Button>
                <Button to="/values" variant="outline">
                  Read Our Values
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              {companyVisionMission.vision.title}
            </Badge>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
              The future we are engineering for
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {companyVisionMission.vision.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              {companyVisionMission.mission.title}
            </Badge>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
              How we deliver on it
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {companyVisionMission.mission.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Card */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}>
            <div>
              <Badge variant="gold" style={{ marginBottom: '1rem' }}>
                Contact Us
              </Badge>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>
                Global Head Office
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Reach out to discuss your project requirements, explore partnership opportunities, or learn more about our engineering services.
              </p>
            </div>

            {/* Chennai Engineering Hub Card */}
            <Card
              variant="glass"
              padding="lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '0.625rem',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-brand-gold)',
                  color: '#ffffff',
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    Chennai, Tamil Nadu, India
                  </h3>
                </div>
              </div>

              <p style={{ color: 'var(--color-text-primary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                <strong>Address:</strong><br />
                {companyInfo.headquarters.address}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} style={{ color: 'var(--color-brand-gold)' }} />
                  <span>{companyInfo.headquarters.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={16} style={{ color: 'var(--color-brand-gold)' }} />
                  <span>WhatsApp: {companyInfo.headquarters.whatsapp}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} style={{ color: 'var(--color-brand-gold)' }} />
                  <span>{companyInfo.headquarters.email}</span>
                </div>
              </div>

              <Button
                href={companyInfo.headquarters.mapsUrl}
                variant="outline"
                size="sm"
                icon={<ExternalLink size={15} />}
                style={{ width: '100%' }}
              >
                View on Google Maps
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
