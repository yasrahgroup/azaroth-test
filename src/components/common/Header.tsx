import React, { useState, useEffect, useRef } from 'react';
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
    isActive: (p) => p === '/about' || p.startsWith('/about') || p === '/values' || p === '/delivery-framework',
  },
  {
    name: 'Our Services',
    href: '/services',
    isActive: (p) => p === '/services' || p.startsWith('/services'),
  },
  {
    name: 'Our Products',
    href: '/products',
    isActive: (p) => p === '/products' || p.startsWith('/products'),
  },
  {
    name: 'Technology Insights',
    href: '/technology-insights',
    isActive: (p) => p === '/technology-insights' || p.startsWith('/technology-insights') || p.startsWith('/resource-hub'),
  },
  {
    name: 'Connect with Us',
    href: '/connect-with-us',
    isActive: (p) => p === '/connect-with-us' || p.startsWith('/connect-with-us') || p === '/contact',
  },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

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
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
        borderBottom: '1px solid var(--color-border, #E0E7FF)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(67, 56, 202, 0.08)' : 'none',
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
              filter: 'drop-shadow(0 2px 4px rgba(79, 70, 229, 0.3))',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--color-link-main, #4338CA)',
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
                color: 'var(--color-primary-button, #4F46E5)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              TECH-HIVE
            </span>
          </div>
        </Link>

        {/* Desktop Direct Navigation Links (Without Dropdowns) */}
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
                  color: active ? 'var(--color-link-main, #4338CA)' : 'var(--color-text-primary, #1F2937)',
                  padding: '0.5rem 0.25rem',
                  textDecoration: 'none',
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 160ms ease-out',
                }}
                className="hover:text-indigo-700"
              >
                <span>{item.name}</span>
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #4338CA 0%, #4F46E5 100%)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Primary Button (Indigo #4F46E5) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <Link
            to="/request-for-quote"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.35rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-primary-button, #4F46E5)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'all 200ms ease-out',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
            }}
            className="hover:bg-indigo-700 hover:shadow-lg"
          >
            <span>Request for Quote</span>
            <ArrowRight size={15} style={{ color: '#FFFFFF' }} />
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

      {/* Mobile Drawer (Direct Flat Links) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '4.75rem',
            backgroundColor: 'rgba(31, 41, 55, 0.4)',
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
              borderBottom: '1px solid var(--color-border, #E0E7FF)',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const active = item.isActive(location.pathname);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontWeight: active ? 700 : 600,
                    fontSize: '1rem',
                    color: active ? 'var(--color-link-main, #4338CA)' : 'var(--color-text-primary, #1F2937)',
                    backgroundColor: active ? 'var(--color-nav-active-bg, #F5F3FF)' : 'transparent',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderLeft: active ? '3px solid var(--color-link-main, #4338CA)' : '3px solid transparent',
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div style={{ height: '1px', backgroundColor: 'var(--color-border, #E0E7FF)', margin: '0.75rem 0' }} />

            <div>
              <Link
                to="/request-for-quote"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-primary-button, #4F46E5)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
                }}
                className="hover:bg-indigo-700"
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
