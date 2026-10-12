import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Building2,
  Award,
  GitFork,
  ShoppingBag,
  Layers,
  Briefcase
} from 'lucide-react';
import { Button } from './Button';
import logoImg from '../../assets/Logo.png';

const aboutGroupRoutes = ['/about', '/values', '/delivery-framework'];
const productsGroupRoutes = ['/products', '/services', '/portfolio'];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'about' | 'products' | null>(null);
  const location = useLocation();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
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

  // Escape closes whichever layer is open; outside click closes desktop dropdowns
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (openDropdown) {
        setOpenDropdown(null);
      }
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!openDropdown) return;
      const target = event.target as Node;
      if (aboutRef.current?.contains(target) || productsRef.current?.contains(target)) return;
      setOpenDropdown(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [openDropdown, mobileMenuOpen]);

  // Move focus into the drawer when it opens
  useEffect(() => {
    if (mobileMenuOpen) {
      const firstLink = drawerRef.current?.querySelector<HTMLElement>('a, button');
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  const scheduleClose = (delay = 180) => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenDropdown(null), delay);
  };

  const cancelClose = () => window.clearTimeout(closeTimerRef.current);

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    width: '100%',
    transition: 'all 240ms ease-out',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
    boxShadow: isScrolled ? '0 4px 24px -2px rgba(38, 48, 59, 0.08)' : 'none',
  };

  const navLinkStyle = (path: string, exact = false, isActiveOverride?: boolean) => {
    const isActive = isActiveOverride ?? (exact ? location.pathname === path : (location.pathname === path || (path !== '/' && location.pathname.startsWith(`${path}/`))));
    return {
      fontSize: '0.9375rem',
      fontWeight: isActive ? 700 : 600,
      color: isActive ? 'var(--color-brand-violet)' : 'var(--color-text-secondary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      padding: '0.5rem 0.75rem',
      borderRadius: 'var(--radius-sm)',
      transition: 'all var(--transition-fast)',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      fontFamily: 'inherit',
    } satisfies React.CSSProperties;
  };

  const aboutActive = aboutGroupRoutes.some((route) => location.pathname.startsWith(route));
  const productsActive = productsGroupRoutes.some((route) => location.pathname.startsWith(route));

  const dropdownPanelStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    padding: '0.75rem',
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-lg)',
    boxShadow: '0 20px 35px -10px rgba(38, 48, 59, 0.12), 0 0 1px 1px rgba(0,0,0,0.06)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    zIndex: 60,
  };

  const dropdownItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.625rem',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'background-color 150ms',
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.75rem' }}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }} id="nav-brand-logo">
          <img
            src={logoImg}
            alt="Azaroth Tech-Hive Logo"
            width={44}
            height={44}
            style={{
              width: '2.75rem',
              height: '2.75rem',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 6px rgba(216, 173, 89, 0.22))',
              transition: 'transform var(--transition-fast)',
            }}
            className="brand-logo-img"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Azaroth
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-brand-violet)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Tech-Hive
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" style={{ display: 'none', gap: '0.35rem', alignItems: 'center' }} className="desktop-nav">

          <Link to="/" style={navLinkStyle('/', true)} id="nav-home">
            Home
          </Link>

          <div
            ref={aboutRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => { cancelClose(); setOpenDropdown('about'); }}
            onMouseLeave={() => scheduleClose()}
            id="nav-about-container"
          >
            <button
              type="button"
              style={navLinkStyle('/about', false, aboutActive)}
              id="nav-about-trigger"
              aria-expanded={openDropdown === 'about'}
              aria-haspopup="true"
              aria-controls="nav-about-menu"
              onClick={() => setOpenDropdown((prev) => (prev === 'about' ? null : 'about'))}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  setOpenDropdown('about');
                  window.setTimeout(() => {
                    aboutRef.current?.querySelector<HTMLElement>('#nav-about-menu a')?.focus();
                  }, 0);
                }
              }}
            >
              <span>About Us</span>
              <ChevronDown size={15} aria-hidden="true" style={{ transition: 'transform 200ms', transform: openDropdown === 'about' ? 'rotate(180deg)' : 'none' }} />
            </button>

            {openDropdown === 'about' && (
              <div id="nav-about-menu" role="menu" aria-label="About Us" style={{ ...dropdownPanelStyle, width: '300px' }}>
                <Link to="/about" role="menuitem" style={dropdownItemStyle} className="dropdown-item">
                  <div aria-hidden="true" style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--color-surface-lavender)', color: 'var(--color-brand-violet)' }}>
                    <Building2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>Who We Are / About Us</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Purpose, vision and engineering culture</div>
                  </div>
                </Link>

                <Link to="/values" role="menuitem" style={dropdownItemStyle} className="dropdown-item">
                  <div aria-hidden="true" style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--color-surface-peach)', color: 'var(--color-brand-orange)' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>Our Values</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>6 principles that shape every solution</div>
                  </div>
                </Link>

                <Link to="/delivery-framework" role="menuitem" style={dropdownItemStyle} className="dropdown-item">
                  <div aria-hidden="true" style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--color-surface-mint)', color: 'var(--color-brand-emerald)' }}>
                    <GitFork size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>Delivery Framework</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>A clear path from idea to impact</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div
            ref={productsRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => { cancelClose(); setOpenDropdown('products'); }}
            onMouseLeave={() => scheduleClose()}
            id="nav-portfolio-container"
          >
            <button
              type="button"
              style={navLinkStyle('/products', false, productsActive)}
              id="nav-portfolio-trigger"
              aria-expanded={openDropdown === 'products'}
              aria-haspopup="true"
              aria-controls="nav-portfolio-menu"
              onClick={() => setOpenDropdown((prev) => (prev === 'products' ? null : 'products'))}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  setOpenDropdown('products');
                  window.setTimeout(() => {
                    productsRef.current?.querySelector<HTMLElement>('#nav-portfolio-menu a')?.focus();
                  }, 0);
                }
              }}
            >
              <span>Our Products</span>
              <ChevronDown size={15} aria-hidden="true" style={{ transition: 'transform 200ms', transform: openDropdown === 'products' ? 'rotate(180deg)' : 'none' }} />
            </button>

            {openDropdown === 'products' && (
              <div id="nav-portfolio-menu" role="menu" aria-label="Our Products" style={{ ...dropdownPanelStyle, width: '320px' }}>
                <Link to="/portfolio" role="menuitem" style={dropdownItemStyle} className="dropdown-item">
                  <div aria-hidden="true" style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--color-surface-peach)', color: 'var(--color-brand-orange)' }}>
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>Our Portfolio</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Platforms and services in our catalogue</div>
                  </div>
                </Link>

                <Link to="/products" role="menuitem" style={dropdownItemStyle} className="dropdown-item">
                  <div aria-hidden="true" style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--color-surface-rose)', color: 'var(--color-brand-magenta)' }}>
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>Explore Products</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>FMS, Omnichannel Commerce &amp; LMP</div>
                  </div>
                </Link>

                <Link to="/services" role="menuitem" style={dropdownItemStyle} className="dropdown-item">
                  <div aria-hidden="true" style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--color-surface-lavender)', color: 'var(--color-brand-violet)' }}>
                    <Layers size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>Explore Services</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Transformation, Consulting &amp; Pods</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/technology-insights" style={navLinkStyle('/technology-insights')} id="nav-resource-hub">
            Resource Hub
          </Link>

          <Link to="/connect-with-us" style={navLinkStyle('/connect-with-us')} id="nav-connect">
            Connect With Us
          </Link>

        </nav>

        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
          <Button to="/request-for-quote" variant="violet" size="sm" icon={<ArrowRight size={15} />} id="header-rfq-button">
            Request a quote
          </Button>
        </div>

        <button
          ref={mobileToggleRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border-medium)',
            color: 'var(--color-dark-maroon)',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

      </div>

      {mobileMenuOpen && (
        <div
          ref={drawerRef}
          id="mobile-nav-drawer"
          aria-label="Navigation menu"
          style={{
            position: 'fixed',
            top: '4.75rem',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 100,
            padding: '1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid var(--color-border-subtle)',
            boxShadow: '0 25px 50px -12px rgba(38, 48, 59, 0.15)',
          }}
        >
          <Link to="/" style={navLinkStyle('/', true)} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>

          <div style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-border-subtle)', borderTop: '1px solid var(--color-border-subtle)' }}>
            <span id="mobile-nav-about-label" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-brand-violet)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.5rem 0.75rem', display: 'block' }}>
              About Us
            </span>
            <Link to="/about" style={navLinkStyle('/about')} onClick={() => setMobileMenuOpen(false)}>
              Who We Are / About Us
            </Link>
            <Link to="/values" style={navLinkStyle('/values')} onClick={() => setMobileMenuOpen(false)}>
              Our Values
            </Link>
            <Link to="/delivery-framework" style={navLinkStyle('/delivery-framework')} onClick={() => setMobileMenuOpen(false)}>
              Delivery Framework
            </Link>
          </div>

          <div style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <span id="mobile-nav-products-label" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-brand-violet)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.5rem 0.75rem', display: 'block' }}>
              Our Products
            </span>
            <Link to="/portfolio" style={navLinkStyle('/portfolio')} onClick={() => setMobileMenuOpen(false)}>
              Our Portfolio
            </Link>
            <Link to="/products" style={navLinkStyle('/products')} onClick={() => setMobileMenuOpen(false)}>
              Explore Products
            </Link>
            <Link to="/services" style={navLinkStyle('/services')} onClick={() => setMobileMenuOpen(false)}>
              Explore Services
            </Link>
          </div>

          <Link to="/technology-insights" style={navLinkStyle('/technology-insights')} onClick={() => setMobileMenuOpen(false)}>
            Resource Hub
          </Link>
          <Link to="/connect-with-us" style={navLinkStyle('/connect-with-us')} onClick={() => setMobileMenuOpen(false)}>
            Connect With Us
          </Link>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Button to="/request-for-quote" variant="violet" size="lg" icon={<ArrowRight size={18} />}>
              Request a quote
            </Button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .dropdown-item:hover {
          background-color: var(--color-surface-soft) !important;
        }
        .dropdown-item:focus-visible {
          background-color: var(--color-surface-soft) !important;
          outline: 2px solid var(--color-brand-violet);
          outline-offset: 2px;
        }
        #nav-brand-logo:hover .brand-logo-img {
          transform: scale(1.06);
        }
      `}</style>
    </header>
  );
};
