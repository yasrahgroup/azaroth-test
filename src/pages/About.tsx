import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ExternalLink,
  Target,
  Compass,
  ShieldCheck,
  Zap,
  UserCheck,
  ArrowRight
} from 'lucide-react';
import { companyInfo, companyVisionMission } from '../data/companyData';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';
import { PageHeader } from '../components/common/PageHeader';
import { heroWorkspaceImg } from '../assets/images';
import { useCMS } from '../context/CMSContext';

export const About: React.FC = () => {
  const { pages, settings } = useCMS();
  const pageData = pages['about'];
  const content = pageData?.content || {};

  const kicker = content.kicker || '- WHO WE ARE -';
  const heroTitle = content.heroTitle || pageData?.title || 'Engineering Meaningful Solutions Building Lasting Value';
  const heroSubtitle = content.heroSubtitle || pageData?.meta_description || 'At Azaroth Techhive, we are passionate about technology and driven by a simple goal — to help businesses build smarter, stronger and more innovative digital solutions with a client-first approach.';
  const storyBadge = content.storyBadge || '— OUR STORY —';
  const storyTitle = content.storyTitle || 'Turning Ideas into Digital Reality';
  const storyParagraph1 = content.storyParagraph1 || 'Azaroth Techhive delivers practical software engineering solutions that help businesses overcome complex technical bottlenecks, modernise legacy operations, and turn high-stakes ideas into dependable digital products.';
  const storyParagraph2 = content.storyParagraph2 || 'With dedicated engineering pods, cloud modernisation, and custom application development, we bring your vision to life, one line of clean, tested code at a time.';
  const visionText = content.vision || companyVisionMission.vision.statement;
  const missionText = content.mission || companyVisionMission.mission.statement;

  const address = settings.headquarters || settings.headquarters_address || companyInfo.headquarters.address;
  const phone = settings.phone || settings.primary_phone || companyInfo.headquarters.phone;
  const email = settings.supportEmail || settings.primary_email || companyInfo.headquarters.email;
  const whatsapp = settings.whatsapp_number || companyInfo.headquarters.whatsapp;

  return (
    <div>
      <SEOHead
        title={pageData?.title ? `${pageData.title} | Azaroth Techhive` : "About Us — Turning Ideas into Digital Reality | Azaroth Techhive"}
        description={pageData?.meta_description || "Learn about Azaroth Techhive: our vision, mission, and the engineering practices behind dependable software for enterprises worldwide."}
        canonicalPath="/about"
      />

      {/* Page Hero Banner */}
      <PageHeader
        kicker={kicker}
        title={heroTitle}
        gradientWords={['Building', 'Lasting', 'Value', 'Meaningful', 'Solutions']}
        subtitle={heroSubtitle}
      />

      {/* Main Narrative with Visual Workspace Image */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Professional Workspace Photography */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                }}
              >
                <img
                  src={heroWorkspaceImg}
                  alt="Azaroth Techhive Engineering Pods Workspace"
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Float Quality Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '24px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1rem 1.5rem',
                  boxShadow: '0 12px 30px -4px rgba(15, 23, 42, 0.15)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                }}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '10px',
                    backgroundColor: '#EDE9FE',
                    color: '#7C3AED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <UserCheck size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#1E293B', lineHeight: 1.2 }}>
                    Full Lifecycle
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                    Engineering Delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Philosophy */}
            <div style={{ maxWidth: '580px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#C68A3D',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {storyBadge}
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#1E293B',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                }}
              >
                {storyTitle}
              </h2>

              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {storyParagraph1}
              </p>
              <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                {storyParagraph2}
              </p>

              {/* Stats Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border, #E0E7FF)',
                  marginBottom: '2rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-text-primary, #1F2937)', lineHeight: 1.2 }}>Sound Architecture</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary, #4B5563)' }}>Principled Design</div>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-success, #047857)', lineHeight: 1.2 }}>Tested Quality</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary, #4B5563)' }}>Rigorous Verification</div>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-warning, #D97706)', lineHeight: 1.2 }}>True Partnership</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary, #4B5563)' }}>Transparent Delivery</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button to="/delivery-framework" variant="primary">
                  Explore Delivery Framework
                </Button>
                <Button to="/values" variant="outline">
                  Our Engineering Values
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2x2 Grid Layout for Vision, Mission & Core Pillars */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#C68A3D',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              &mdash; STRATEGIC FOUNDATIONS &mdash;
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 800,
                color: '#1E293B',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              How We Architect{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Sustainable Value
              </span>
            </h2>

            <p style={{ fontSize: '1.0625rem', color: '#64748B', lineHeight: 1.6 }}>
              Our 4 foundational pillars ensure every client engagement is transparent, technically sound, and engineered for long-term scalability.
            </p>
          </div>

          {/* 2x2 Grid of Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {/* Card 1: Vision */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '1.25rem',
                padding: '2.25rem 2rem',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease-out',
              }}
              className="hover:shadow-lg hover:border-slate-300"
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#EDE9FE',
                  color: '#7C3AED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>
                Long-Horizon Vision
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                {visionText}
              </p>
            </div>

            {/* Card 2: Mission */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '1.25rem',
                padding: '2.25rem 2rem',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease-out',
              }}
              className="hover:shadow-lg hover:border-slate-300"
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>
                Precision Delivery Mission
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                {missionText}
              </p>
            </div>

            {/* Card 3: Engineering Rigor */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '1.25rem',
                padding: '2.25rem 2rem',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease-out',
              }}
              className="hover:shadow-lg hover:border-slate-300"
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#E0F2FE',
                  color: '#0284C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>
                Enterprise Quality &amp; Security
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                Rigorous automated testing, zero-trust cloud infrastructure, continuous vulnerability scanning, and strict 99.9% uptime SLA commitments for high-load platforms.
              </p>
            </div>

            {/* Card 4: Rapid Execution */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '1.25rem',
                padding: '2.25rem 2rem',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease-out',
              }}
              className="hover:shadow-lg hover:border-slate-300"
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#FEF3C7',
                  color: '#D97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>
                Agile Pod Execution
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                Dedicated 100% focused engineering pods that embed with your stakeholder teams to design, iterate, and deploy release candidates every two weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations & Head Office Section */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#C68A3D',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                &mdash; GLOBAL PRESENCE &mdash;
              </div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#1E293B', marginBottom: '1.25rem' }}>
                Headquarters &amp; Engineering Hubs
              </h2>
              <p style={{ fontSize: '1.0625rem', color: '#64748B', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Serving global enterprises across the GCC, Asia-Pacific, Europe, and North America from our key hubs in Doha, Qatar and Chennai, India.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button to="/connect-with-us" variant="gold" icon={<ArrowRight size={16} />}>
                  Connect With Our Team
                </Button>
                <Button to="/request-for-quote" variant="outline">
                  Submit an RFQ
                </Button>
              </div>
            </div>

            {/* Office Info Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 12px 35px -5px rgba(15, 23, 42, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    backgroundColor: '#FEF3C7',
                    color: '#D97706',
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B', margin: 0 }}>
                    Chennai Engineering Hub
                  </h3>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>Primary Delivery Center</div>
                </div>
              </div>

              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                <strong>Address:</strong><br />
                {address}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#334155' }}>
                  <Phone size={16} style={{ color: '#C68A3D' }} />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {phone}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#334155' }}>
                  <MessageSquare size={16} style={{ color: '#059669' }} />
                  <a href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    WhatsApp: {whatsapp}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#334155' }}>
                  <Mail size={16} style={{ color: '#2563EB' }} />
                  <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {email}
                  </a>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
