import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/Logo.png';

interface NavItem {
  name: string;
  href: string;
  isActive: (pathname: string) => boolean;
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    isActive: (p) => p === '/',
  },
  {
    name: 'About',
    href: '/about',
    isActive: (p) =>
      p.startsWith('/about') ||
      p === '/values' ||
      p === '/delivery-framework',
  },
  {
    name: 'Our Services',
    href: '/services',
    isActive: (p) => p.startsWith('/services'),
  },
  {
    name: 'Our Products',
    href: '/products',
    isActive: (p) => p.startsWith('/products'),
  },
  {
    name: 'Technology Insights',
    href: '/technology-insights',
    isActive: (p) =>
      p.startsWith('/technology-insights') ||
      p.startsWith('/resource-hub'),
  },
  {
    name: 'Connect with Us',
    href: '/connect-with-us',
    isActive: (p) =>
      p.startsWith('/connect-with-us') || p === '/contact',
  },
];

const GOLD = '#B5A642';
const GOLD_DARK = '#97872D';
const MAROON = '#800020';

const rfqButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.7rem 1.35rem',
  borderRadius: '9999px',
  background: 'linear-gradient(135deg, #B5A642 0%, #97872D 100%)',
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '0.9375rem',
  textDecoration: 'none',
  border: '1px solid #B5A642',
  boxShadow: '0 4px 14px rgba(181, 166, 66, 0.35)',
  transition: 'all 200ms ease-out',
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.98)'
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid rgba(181, 166, 66, 0.35)`,
        boxShadow: isScrolled
          ? '0 4px 20px -2px rgba(128, 0, 32, 0.10)'
          : 'none',
        transition: 'all 200ms ease-out',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          height: '4.75rem',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          id="nav-brand-logo"
          aria-label="Azaroth Tech-Hive home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <img
            src={logoImg}
            alt="Azaroth Tech-Hive Logo"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 4px rgba(181, 166, 66, 0.25))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: MAROON,
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
                color: GOLD_DARK,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              TECH-HIVE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-7"
        >
          {navItems.map((item) => {
            const active = item.isActive(location.pathname);

            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: active ? 700 : 600,
                  color: active ? MAROON : '#374151',
                  padding: '0.65rem 0.25rem',
                  textDecoration: 'none',
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 160ms ease-out',
                }}
                className="azaroth-nav-link"
              >
                <span>{item.name}</span>

                {/* Maroon-to-gold active navigation line */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: active
                      ? `linear-gradient(90deg, ${MAROON} 0%, ${GOLD} 100%)`
                      : `linear-gradient(90deg, ${MAROON} 0%, ${GOLD} 100%)`,
                    borderRadius: '2px',
                    transform: active ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 200ms ease-out',
                  }}
                  className="azaroth-nav-indicator"
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            flexShrink: 0,
          }}
        >
          <Link
            to="/request-for-quote"
            style={rfqButtonStyle}
            className="azaroth-rfq-button"
          >
            <span>Request for Quote</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen ? 'Close navigation' : 'Open navigation'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-amber-200 bg-white text-rose-950"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '4.75rem',
            backgroundColor: 'rgba(31, 41, 55, 0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '1.25rem',
              borderBottom: `2px solid ${GOLD}`,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              maxHeight: 'calc(100vh - 4.75rem)',
              overflowY: 'auto',
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {navItems.map((item) => {
              const active = item.isActive(location.pathname);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    fontWeight: active ? 700 : 600,
                    fontSize: '1rem',
                    color: active ? MAROON : '#374151',
                    backgroundColor: active
                      ? 'rgba(181, 166, 66, 0.12)'
                      : 'transparent',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderLeft: active
                      ? `3px solid ${GOLD}`
                      : '3px solid transparent',
                  }}
                >
                  <span>{item.name}</span>

                  {active && (
                    <span
                      aria-hidden="true"
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: GOLD,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(181, 166, 66, 0.35)',
                margin: '0.75rem 0',
              }}
            />

            <Link
              to="/request-for-quote"
              style={{
                ...rfqButtonStyle,
                width: '100%',
                boxSizing: 'border-box',
              }}
              className="azaroth-rfq-button"
            >
              <span>Request for Quote</span>
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}

      {/* Theme-matched hover and keyboard focus styles */}
      <style>{`
        .azaroth-nav-link:hover {
          color: ${MAROON} !important;
        }

        .azaroth-nav-link:hover .azaroth-nav-indicator {
          transform: scaleX(1) !important;
        }

        .azaroth-nav-link:focus-visible,
        .azaroth-rfq-button:focus-visible {
          outline: 3px solid #4F46E5;
          outline-offset: 4px;
        }

        .azaroth-rfq-button:hover {
          background: linear-gradient(135deg, #97872D 0%, #7d6c24 100%) !important;
          border-color: #97872D !important;
          box-shadow: 0 6px 18px rgba(181, 166, 66, 0.3) !important;
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .azaroth-nav-link,
          .azaroth-nav-indicator,
          .azaroth-rfq-button {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;