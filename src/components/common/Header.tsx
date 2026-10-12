import React, { useState, useEffect } from 'react';
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

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky header shadow and backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setPortfolioDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
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

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    width: '100%',
    transition: 'all 240ms ease-out',
    backgroundColor: isScrolled ? 'rgba(250, 250, 247, 0.94)' : 'rgba(250, 250, 247, 0.82)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: isScrolled ? '1px solid rgba(122, 12, 22, 0.08)' : '1px solid transparent',
    boxShadow: isScrolled ? '0 4px 20px -2px rgba(122, 12, 22, 0.06)' : 'none',
  };

  const navLinkStyle = (path: string, exact = false) => {
    const isActive = exact ? location.pathname === path : (location.pathname === path || (path !== '/' && location.pathname.startsWith(`${path}/`)));
    return {
      fontSize: '0.9375rem',
      fontWeight: isActive ? 700 : 600,
      color: isActive ? 'var(--color-primary-maroon)' : 'var(--color-text-secondary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      padding: '0.5rem 0.75rem',
      borderRadius: 'var(--radius-sm)',
      transition: 'color var(--transition-fast)',
      cursor: 'pointer',
    };
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.75rem' }}>
        
        {/* Brand Logo & Mark - Azaroth Tech-Hive */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }} id="nav-brand-logo">
          <img
            src={logoImg}
            alt="Azaroth Tech-Hive Logo"
            style={{
              width: '2.75rem',
              height: '2.75rem',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 6px rgba(122, 12, 22, 0.22))',
              transition: 'transform var(--transition-fast)',
            }}
            className="brand-logo-img"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-dark-maroon)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Azaroth
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary-maroon)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Tech-Hive
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '0.35rem', alignItems: 'center' }} className="desktop-nav">
          
          {/* Home */}
          <Link to="/" style={navLinkStyle('/', true)} id="nav-home">
            Home
          </Link>

          {/* About Us (Dropdown / In-Page Navigation: Who we are / About Us, Our Values, Delivery Framework) */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
            id="nav-about-container"
          >
            <div 
              style={navLinkStyle('/about')}
              role="button"
              tabIndex={0}
              id="nav-about-trigger"
            >
              <span>About Us</span>
              <ChevronDown size={15} style={{ transition: 'transform 200ms', transform: aboutDropdownOpen ? 'rotate(180deg)' : 'none' }} />
            </div>

            {aboutDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '300px',
                padding: '0.75rem',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 35px -10px rgba(122, 12, 22, 0.15), 0 0 1px 1px rgba(0,0,0,0.06)',
                border: '1px solid rgba(122, 12, 22, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                zIndex: 60,
              }}>
                <Link to="/about" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 150ms'
                }} className="dropdown-item">
                  <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'rgba(122, 12, 22, 0.08)', color: 'var(--color-primary-maroon)' }}>
                    <Building2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark-maroon)' }}>Who We Are / About Us</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Purpose, vision and engineering culture</div>
                  </div>
                </Link>

                <Link to="/values" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 150ms'
                }} className="dropdown-item">
                  <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'rgba(212, 175, 55, 0.12)', color: '#bf9129' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark-maroon)' }}>Our Values</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>6 principles that shape every solution</div>
                  </div>
                </Link>

                <Link to="/delivery-framework" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 150ms'
                }} className="dropdown-item">
                  <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'rgba(122, 12, 22, 0.08)', color: 'var(--color-primary-maroon)' }}>
                    <GitFork size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark-maroon)' }}>Delivery Framework</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>A clear path from idea to impact</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Our Products (Dropdown / In-Page Navigation: Our Portfolio, Explore Products, Explore Services) */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setPortfolioDropdownOpen(true)}
            onMouseLeave={() => setPortfolioDropdownOpen(false)}
            id="nav-portfolio-container"
          >
            <div 
              style={navLinkStyle('/products')}
              role="button"
              tabIndex={0}
              id="nav-portfolio-trigger"
            >
              <span>Our Products</span>
              <ChevronDown size={15} style={{ transition: 'transform 200ms', transform: portfolioDropdownOpen ? 'rotate(180deg)' : 'none' }} />
            </div>

            {portfolioDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '320px',
                padding: '0.75rem',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 35px -10px rgba(122, 12, 22, 0.15), 0 0 1px 1px rgba(0,0,0,0.06)',
                border: '1px solid rgba(122, 12, 22, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                zIndex: 60,
              }}>
                <Link to="/portfolio" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 150ms'
                }} className="dropdown-item">
                  <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'rgba(212, 175, 55, 0.15)', color: '#bf9129' }}>
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark-maroon)' }}>Our Portfolio</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Case studies and delivered systems</div>
                  </div>
                </Link>

                <Link to="/products" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 150ms'
                }} className="dropdown-item">
                  <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'rgba(122, 12, 22, 0.08)', color: 'var(--color-primary-maroon)' }}>
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark-maroon)' }}>Explore Products</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>FMS, Omnichannel Commerce & LMP</div>
                  </div>
                </Link>

                <Link to="/services" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 150ms'
                }} className="dropdown-item">
                  <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'rgba(122, 12, 22, 0.08)', color: 'var(--color-primary-maroon)' }}>
                    <Layers size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark-maroon)' }}>Explore Services</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Transformation, Consulting & Pods</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Resource Hub (renamed from Technology Insights) */}
          <Link to="/technology-insights" style={navLinkStyle('/technology-insights')} id="nav-resource-hub">
            Resource Hub
          </Link>

          {/* Connect With Us */}
          <Link to="/connect-with-us" style={navLinkStyle('/connect-with-us')} id="nav-connect">
            Connect With Us
          </Link>

        </nav>

        {/* Right Action CTA Button - Request for Quote */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
          <Button to="/request-for-quote" variant="gold" size="sm" icon={<ArrowRight size={15} />} id="header-rfq-button">
            Request for Quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
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
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div style={{
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
          boxShadow: '0 25px 50px -12px rgba(122, 12, 22, 0.25)',
        }}>
          <Link to="/" style={navLinkStyle('/', true)} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>

          <div style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-border-subtle)', borderTop: '1px solid var(--color-border-subtle)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-maroon)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.5rem 0.75rem', display: 'block' }}>
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
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-maroon)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.5rem 0.75rem', display: 'block' }}>
              Our Products
            </span>
            <Link to="/products" style={navLinkStyle('/products')} onClick={() => setMobileMenuOpen(false)}>
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
            <Button to="/request-for-quote" variant="gold" size="lg" icon={<ArrowRight size={18} />}>
              Request for Quote
            </Button>
          </div>
        </div>
      )}

      {/* Inline styles for responsive breakpoints */}
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
          background-color: rgba(122, 12, 22, 0.05) !important;
        }
        #nav-brand-logo:hover .brand-logo-img {
          transform: scale(1.06);
        }
      `}</style>
    </header>
  );
};
