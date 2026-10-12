import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Building2,
  Award,
  GitFork,
  ShoppingBag,
  Layers,
  Briefcase,
} from 'lucide-react';
import logoImg from '../../assets/Logo.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'about' | 'products' | null>(null);
  const location = useLocation();
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scheduleClose = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenDropdown(null), 180);
  };

  const cancelClose = () => window.clearTimeout(closeTimerRef.current);

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isAboutActive = ['/about', '/values', '/delivery-framework'].some((p) => location.pathname.startsWith(p));
  const isProductsActive = ['/products', '/portfolio', '/services'].some((p) => location.pathname.startsWith(p));

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none',
        transition: 'all 200ms ease-out',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem',
        }}
      >
        {/* Brand Logo & Name */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          id="nav-brand-logo"
        >
          <img
            src={logoImg}
            alt="Azaroth Tech-Hive Logo"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#006C35',
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
                color: '#D4AF37',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              TECH-HIVE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Updated per Client Docs) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {/* 1. Home */}
          <Link
            to="/"
            style={{
              fontSize: '0.9375rem',
              fontWeight: isActiveRoute('/') ? 700 : 500,
              color: isActiveRoute('/') ? '#006C35' : '#475569',
              padding: '0.5rem 0.875rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 150ms ease-out',
              backgroundColor: isActiveRoute('/') ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
              position: 'relative',
            }}
          >
            Home
            {isActiveRoute('/') && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '2px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '1px',
                }}
              />
            )}
          </Link>

          {/* 2. About Us (Dropdown: Who we are / About Us, Our Values, Delivery Framework) */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { cancelClose(); setOpenDropdown('about'); }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              style={{
                fontSize: '0.9375rem',
                fontWeight: isAboutActive ? 700 : 500,
                color: isAboutActive ? '#006C35' : '#475569',
                padding: '0.5rem 0.875rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: isAboutActive ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: 'inherit',
              }}
              onClick={() => setOpenDropdown((prev) => (prev === 'about' ? null : 'about'))}
            >
              <span>About Us</span>
              <ChevronDown size={14} style={{ opacity: 0.6 }} />
            </button>

            {openDropdown === 'about' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '280px',
                  padding: '0.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 0 1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  zIndex: 60,
                }}
              >
                <Link
                  to="/about"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#1E293B',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                  className="hover:bg-slate-50"
                >
                  <Building2 size={16} style={{ color: '#006C35' }} />
                  <div>
                    <div>Who we are / About Us</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>Company story &amp; mission</div>
                  </div>
                </Link>
                <Link
                  to="/values"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#1E293B',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                  className="hover:bg-slate-50"
                >
                  <Award size={16} style={{ color: '#C68A3D' }} />
                  <div>
                    <div>Our Values</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>6 core engineering principles</div>
                  </div>
                </Link>
                <Link
                  to="/delivery-framework"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#1E293B',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                  className="hover:bg-slate-50"
                >
                  <GitFork size={16} style={{ color: '#2563EB' }} />
                  <div>
                    <div>Delivery Framework</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>6-step path from idea to impact</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 3. Our Portfolio (Dropdown: Our Portfolio, Explore Products, Explore Services per REQ-01) */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { cancelClose(); setOpenDropdown('products'); }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              style={{
                fontSize: '0.9375rem',
                fontWeight: isProductsActive ? 700 : 500,
                color: isProductsActive ? '#006C35' : '#475569',
                padding: '0.5rem 0.875rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: isProductsActive ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: 'inherit',
              }}
              onClick={() => setOpenDropdown((prev) => (prev === 'products' ? null : 'products'))}
            >
              <span>Our Portfolio</span>
              <ChevronDown size={14} style={{ opacity: 0.6 }} />
            </button>

            {openDropdown === 'products' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '280px',
                  padding: '0.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 0 1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  zIndex: 60,
                }}
              >
                <Link
                  to="/portfolio"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#1E293B',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                  className="hover:bg-slate-50"
                >
                  <Briefcase size={16} style={{ color: '#D4AF37' }} />
                  <div>
                    <div>Our Portfolio</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>Solutions &amp; client work</div>
                  </div>
                </Link>
                <Link
                  to="/products"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#1E293B',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                  className="hover:bg-slate-50"
                >
                  <ShoppingBag size={16} style={{ color: '#059669' }} />
                  <div>
                    <div>Explore Products</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>FMS, Commerce &amp; LMP</div>
                  </div>
                </Link>
                <Link
                  to="/services"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: '#1E293B',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                  className="hover:bg-slate-50"
                >
                  <Layers size={16} style={{ color: '#006C35' }} />
                  <div>
                    <div>Explore Services</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>Software engineering practices</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Resource Hub (Renamed from Technology Insights) */}
          <Link
            to="/technology-insights"
            style={{
              fontSize: '0.9375rem',
              fontWeight: isActiveRoute('/technology-insights') ? 700 : 500,
              color: isActiveRoute('/technology-insights') ? '#006C35' : '#475569',
              padding: '0.5rem 0.875rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 150ms ease-out',
              backgroundColor: isActiveRoute('/technology-insights') ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
            }}
          >
            Resource Hub
          </Link>

          {/* 5. Connect With Us */}
          <Link
            to="/connect-with-us"
            style={{
              fontSize: '0.9375rem',
              fontWeight: isActiveRoute('/connect-with-us') ? 700 : 500,
              color: isActiveRoute('/connect-with-us') ? '#006C35' : '#475569',
              padding: '0.5rem 0.875rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 150ms ease-out',
              backgroundColor: isActiveRoute('/connect-with-us') ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
            }}
          >
            Connect With Us
          </Link>
        </nav>

        {/* Right Action: Request for Quote Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <Link
            to="/request-for-quote"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.35rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)',
              color: '#012411',
              fontWeight: 700,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'all 200ms ease-out',
              boxShadow: '0 3px 12px rgba(212, 175, 55, 0.35)',
            }}
            className="hover:brightness-105 hover:shadow-lg"
          >
            <span>Request for Quote</span>
            <ArrowRight size={15} style={{ color: '#012411' }} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            ref={mobileToggleRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-700"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '4.75rem',
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '1.5rem',
              borderBottom: '1px solid #E2E8F0',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to="/"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: 600,
                color: isActiveRoute('/') ? '#006C35' : '#1E293B',
                backgroundColor: isActiveRoute('/') ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            <div style={{ padding: '0.5rem 1rem 0.25rem', fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
              About Us
            </div>
            <Link to="/about" style={{ padding: '0.5rem 1rem 0.5rem 1.5rem', fontSize: '0.875rem', color: '#334155', textDecoration: 'none' }}>
              &bull; Who we are / About Us
            </Link>
            <Link to="/values" style={{ padding: '0.5rem 1rem 0.5rem 1.5rem', fontSize: '0.875rem', color: '#334155', textDecoration: 'none' }}>
              &bull; Our Values
            </Link>
            <Link to="/delivery-framework" style={{ padding: '0.5rem 1rem 0.5rem 1.5rem', fontSize: '0.875rem', color: '#334155', textDecoration: 'none' }}>
              &bull; Delivery Framework
            </Link>

            <div style={{ padding: '0.5rem 1rem 0.25rem', fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
              Our Portfolio
            </div>
            <Link to="/portfolio" style={{ padding: '0.5rem 1rem 0.5rem 1.5rem', fontSize: '0.875rem', color: '#334155', textDecoration: 'none' }}>
              &bull; Our Portfolio
            </Link>
            <Link to="/products" style={{ padding: '0.5rem 1rem 0.5rem 1.5rem', fontSize: '0.875rem', color: '#334155', textDecoration: 'none' }}>
              &bull; Explore Products
            </Link>
            <Link to="/services" style={{ padding: '0.5rem 1rem 0.5rem 1.5rem', fontSize: '0.875rem', color: '#334155', textDecoration: 'none' }}>
              &bull; Explore Services
            </Link>

            <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '0.5rem 0' }} />

            <Link
              to="/technology-insights"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: 600,
                color: isActiveRoute('/technology-insights') ? '#006C35' : '#1E293B',
                backgroundColor: isActiveRoute('/technology-insights') ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Resource Hub
            </Link>

            <Link
              to="/connect-with-us"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: 600,
                color: isActiveRoute('/connect-with-us') ? '#006C35' : '#1E293B',
                backgroundColor: isActiveRoute('/connect-with-us') ? 'rgba(0, 108, 53, 0.08)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Connect With Us
            </Link>

            <div style={{ marginTop: '1rem' }}>
              <Link
                to="/request-for-quote"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)',
                  color: '#012411',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                <span>Request for Quote</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
