import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ShieldCheck,
  Cookie
} from 'lucide-react';
import logoImg from '../../assets/Logo.png';
import { useCMS } from '../../context/CMSContext';

export const Footer: React.FC = () => {
  const { settings } = useCMS();

  const phone = settings?.phone || settings?.primary_phone || '+974 1234 5678';
  const email = settings?.supportEmail || settings?.primary_email || 'hello@azaroth-techhive.com';
  const address = settings?.headquarters || settings?.headquarters_address || 'Doha, Qatar';
  const copyright = settings?.copyright_text || 'All rights reserved © 2026 Azaroth Tech-Hive Inc';
  const isReversed = (settings?.footerLayout || 'reversed') === 'reversed';

  // 1. Brand Logo & Tagline Column
  const brandColumn = (
    <div key="col-brand" style={{ maxWidth: '280px' }}>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          marginBottom: '1rem',
        }}
      >
        <img
          src={settings?.logoUrl || logoImg}
          alt={settings?.companyName || "Azaroth Techhive Logo"}
          style={{
            maxHeight: '2.5rem',
            maxWidth: '8rem',
            objectFit: 'contain',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: 'serif',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
            }}
          >
            AZAROTH
          </span>
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              color: 'var(--color-brand-gold, #F59E0B)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            TECHHIVE
          </span>
        </div>
      </Link>

      <div
        style={{
          fontSize: '0.875rem',
          color: '#94A3B8',
          letterSpacing: '0.08em',
          fontWeight: 500,
          marginTop: '0.5rem',
        }}
      >
        Build &middot; Innovate &middot; Grow
      </div>
    </div>
  );

  // 2. Quick Links Column
  const quickLinksColumn = (
    <div key="col-quicklinks">
      <h4
        style={{
          color: '#FFFFFF',
          fontSize: '0.9375rem',
          fontWeight: 700,
          marginBottom: '1.25rem',
        }}
      >
        Quick Links
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <li>
          <Link to="/" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/connect-with-us" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );

  // 3. Our Services Column
  const servicesColumn = (
    <div key="col-services">
      <h4
        style={{
          color: '#FFFFFF',
          fontSize: '0.9375rem',
          fontWeight: 700,
          marginBottom: '1.25rem',
        }}
      >
        Our Services
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <li>
          <Link to="/services#web-development" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Web Development
          </Link>
        </li>
        <li>
          <Link to="/services#mobile-applications" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Mobile Applications
          </Link>
        </li>
        <li>
          <Link to="/services#cloud-solutions" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            Cloud Solutions
          </Link>
        </li>
        <li>
          <Link to="/services#it-consulting" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            IT Consulting
          </Link>
        </li>
        <li>
          <Link to="/services#ui-ux-design" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 160ms' }} className="hover:text-amber-400">
            UI/UX Design
          </Link>
        </li>
      </ul>
    </div>
  );

  // 4. Contact Us & Follow Us Column
  const contactSocialColumn = (
    <div key="col-contact">
      <h4
        style={{
          color: '#FFFFFF',
          fontSize: '0.9375rem',
          fontWeight: 700,
          marginBottom: '1.25rem',
        }}
      >
        Contact Us
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <Phone size={15} style={{ color: 'var(--color-brand-gold, #F59E0B)', flexShrink: 0 }} />
          <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-white">
            {phone}
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <Mail size={15} style={{ color: 'var(--color-brand-gold, #F59E0B)', flexShrink: 0 }} />
          <a href={`mailto:${email}`} style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-white">
            {email}
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <MapPin size={15} style={{ color: 'var(--color-brand-gold, #F59E0B)', flexShrink: 0 }} />
          <span style={{ color: '#94A3B8' }}>{address}</span>
        </div>
      </div>

      {/* Follow Us Social Icons matching reference */}
      <div>
        <div style={{ fontSize: '0.8125rem', color: '#CBD5E1', fontWeight: 600, marginBottom: '0.75rem' }}>
          Follow Us
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href={settings?.linkedinUrl || "https://linkedin.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#CBD5E1',
              transition: 'all 160ms',
            }}
            className="hover:border-amber-400 hover:text-amber-400"
          >
            <Linkedin size={15} />
          </a>

          <a
            href={settings?.twitterUrl || "https://x.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="X (formerly Twitter)"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#CBD5E1',
              transition: 'all 160ms',
            }}
            className="hover:border-amber-400 hover:text-amber-400"
          >
            <Twitter size={15} />
          </a>

          <a
            href={(settings as any)?.facebookUrl || "https://facebook.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#CBD5E1',
              transition: 'all 160ms',
            }}
            className="hover:border-amber-400 hover:text-amber-400"
          >
            <Facebook size={15} />
          </a>

          <a
            href={(settings as any)?.instagramUrl || "https://instagram.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#CBD5E1',
              transition: 'all 160ms',
            }}
            className="hover:border-amber-400 hover:text-amber-400"
          >
            <Instagram size={15} />
          </a>

          <a
            href={(settings as any)?.youtubeUrl || "https://youtube.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#CBD5E1',
              transition: 'all 160ms',
            }}
            className="hover:border-amber-400 hover:text-amber-400"
          >
            <Youtube size={15} />
          </a>
        </div>
      </div>
    </div>
  );

  // Dynamic Column Distribution based on CMS footerLayout configuration
  const footerColumns = isReversed
    ? [contactSocialColumn, servicesColumn, quickLinksColumn, brandColumn]
    : [brandColumn, quickLinksColumn, servicesColumn, contactSocialColumn];

  return (
    <footer
      style={{
        backgroundColor: '#0A1118',
        color: '#94A3B8',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="site-footer"
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          width: '500px',
          height: '250px',
          background: 'radial-gradient(ellipse at center, var(--color-primary-glow, rgba(24, 24, 27, 0.2)) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '20%',
          width: '450px',
          height: '220px',
          background: 'radial-gradient(ellipse at center, var(--color-brand-gold-light, rgba(245, 158, 11, 0.08)) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
        {/* 4 Footer Columns (Reversible via CMS) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {footerColumns}
        </div>

        {/* Bottom Bar: Copyright, Legal, Cookies & Direct Admin Portal Access */}
        <div
          style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#64748B',
          }}
        >
          <div>
            {copyright}
          </div>

          {/* Privacy Policy, Cookies & Admin Portal Access */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/privacy-policy"
              style={{
                color: '#94A3B8',
                textDecoration: 'none',
                transition: 'color 160ms ease',
              }}
              className="hover:text-amber-400"
            >
              Privacy Policy
            </Link>

            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>&bull;</span>

            <Link
              to="/privacy-policy#cookies"
              style={{
                color: '#94A3B8',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 160ms ease',
              }}
              className="hover:text-amber-400"
            >
              <Cookie size={13} style={{ opacity: 0.7 }} />
              <span>Cookies</span>
            </Link>

            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>&bull;</span>

            {/* Direct Admin Portal Access Link */}
            <Link
              to="/admin/login"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--color-brand-gold, #F59E0B)',
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 600,
                transition: 'all 160ms ease',
              }}
              className="hover:bg-amber-500 hover:text-slate-950"
              title="Access CMS Control Center"
            >
              <ShieldCheck size={13} />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
