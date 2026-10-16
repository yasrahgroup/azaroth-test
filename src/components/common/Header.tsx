import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/Logo.png';
import { useCMS } from '../../context/CMSContext';

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
    name: 'Services',
    href: '/services',
    isActive: (p) => p.startsWith('/services'),
  },
  {
    name: 'About',
    href: '/about',
    isActive: (p) => p.startsWith('/about'),
  },
  {
    name: 'Projects',
    href: '/portfolio',
    isActive: (p) => p.startsWith('/portfolio') || p.startsWith('/projects'),
  },
  {
    name: 'Contact',
    href: '/connect-with-us',
    isActive: (p) => p.startsWith('/connect-with-us') || p === '/contact',
  },
];

const GOLD = 'var(--color-brand-gold, #F59E0B)';
const GOLD_DARK = 'var(--color-brand-gold, #D97706)';
const MAROON = 'var(--color-primary, #18181B)';
const BRAND_PRIMARY = 'var(--color-primary, #18181B)';

const getStartedButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.625rem 1.4rem',
  borderRadius: '9999px',
  background: 'transparent',
  color: 'var(--color-brand-gold-text, var(--color-brand-gold, #F59E0B))',
  fontWeight: 600,
  fontSize: '0.9375rem',
  textDecoration: 'none',
  border: '1.5px solid var(--color-brand-gold, #F59E0B)',
  transition: 'all 200ms ease-out',
};

export const Header: React.FC = () => {
  const { navigation: cmsNavigation, settings } = useCMS();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentNavItems = (cmsNavigation && cmsNavigation.length > 0)
    ? cmsNavigation.filter(item => item.isVisible).map(item => ({
        name: item.label,
        href: item.path,
        isActive: (p: string) => p === item.path || (item.path !== '/' && p.startsWith(item.path)),
      }))
    : navItems;

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
        borderBottom: `1px solid var(--color-border, #E4E4E7)`,
        boxShadow: isScrolled
          ? '0 4px 20px -2px rgba(24, 24, 27, 0.08)'
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
            src={settings?.logoUrl || logoImg}
            alt={settings?.companyName || "Azaroth Tech-Hive Logo"}
            style={{
              maxHeight: '2.5rem',
              maxWidth: '8rem',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 4px rgba(24, 24, 27, 0.15))',
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
          {currentNavItems.map((item) => {
            const active = item.isActive(location.pathname);

            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: active ? 700 : 600,
                  color: active ? BRAND_PRIMARY : '#374151',
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

                {/* Dynamic brand gradient navigation indicator */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2.5px',
                    background: 'var(--color-brand-gold, #F59E0B)',
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
            to="/connect-with-us"
            style={getStartedButtonStyle}
            className="hover:opacity-90 hover:shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
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
            {currentNavItems.map((item) => {
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
                    color: active ? BRAND_PRIMARY : '#374151',
                    backgroundColor: active
                      ? 'rgba(24, 24, 27, 0.06)'
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
                        backgroundColor: BRAND_PRIMARY,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--color-border, #E4E4E7)',
                margin: '0.75rem 0',
              }}
            />

            <Link
              to="/connect-with-us"
              style={{
                ...getStartedButtonStyle,
                width: '100%',
                boxSizing: 'border-box',
              }}
              className="hover:opacity-90"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}

      {/* Theme-matched hover and keyboard focus styles */}
      <style>{`
        .azaroth-nav-link:hover {
          color: ${BRAND_PRIMARY} !important;
        }

        .azaroth-nav-link:hover .azaroth-nav-indicator {
          transform: scaleX(1) !important;
        }

        .azaroth-nav-link:focus-visible,
        .azaroth-rfq-button:focus-visible {
          outline: 3px solid var(--color-primary, #18181B);
          outline-offset: 4px;
        }

        .azaroth-rfq-button:hover {
          background: var(--color-primary-button-hover, #27272A) !important;
          border-color: #27272A !important;
          box-shadow: 0 6px 18px rgba(24, 24, 27, 0.3) !important;
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