import React from 'react';
import { motion } from 'framer-motion';
import { productsCatalog } from '../data/productsData';
import { serviceOfferings } from '../data/servicesData';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';
import { ArrowRight, Activity, ShoppingBag, GraduationCap, Cpu, Compass, Users, Workflow, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Portfolio: React.FC = () => {
  const getProductIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity size={22} />;
      case 'ShoppingBag': return <ShoppingBag size={22} />;
      case 'GraduationCap': return <GraduationCap size={22} />;
      default: return <Activity size={22} />;
    }
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu size={24} />;
      case 'Compass': return <Compass size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Workflow': return <Workflow size={24} />;
      default: return <Cpu size={24} />;
    }
  };

  return (
    <div>
      <SEOHead
        title="Our Portfolio — Software Solutions & Engineering Services | Azaroth Tech-Hive"
        description="Explore the Azaroth Tech-Hive portfolio of enterprise software platforms and engineering services, from platforms in active development to modernization and advisory support."
        canonicalPath="/portfolio"
      />
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Our Portfolio
          </Badge>
          <h1 style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-text-primary)' }}>
            Software Solutions & Engineering Services Built for Growth
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            Explore customizable platforms, custom application development, system integration, architecture, and engineering support — everything you need to build, modernize, and scale your software ecosystem.
          </p>
        </div>
      </section>

      {/* Explore Products Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }} id="explore-products">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '3.5rem' }}
          >
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              Explore Products
            </Badge>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              Software Solutions & Engineering Services Built for Growth
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '650px' }}>
              Platform foundations designed to grow with your business, providing a practical starting point for operational efficiency and long-term roadmaps.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {productsCatalog.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="solid"
                  padding="lg"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid var(--color-border)',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(38, 48, 59, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-surface-soft)',
                      color: 'var(--color-brand-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {getProductIcon(product.iconName)}
                    </div>
                    {product.badge && (
                      <Badge variant="gold" style={{ fontSize: '0.7rem' }}>
                        {product.badge === 'Feature in Development' ? 'Under Development' : product.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark-maroon)', marginBottom: '0.375rem' }}>
                    {product.name}
                  </h3>

                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-maroon)', marginBottom: '1rem' }}>
                    {product.tagline}
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {product.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {product.keyCapabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                        <Check size={14} style={{ color: 'var(--color-primary-maroon)', flexShrink: 0 }} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(122, 12, 22, 0.1)' }}>
                    <Link
                      to={`/products/${product.slug}`}
                      style={{
                        color: 'var(--color-primary-maroon)',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Browse all products</span>
                      <ArrowRight size={15} />
                    </Link>

                    <Button to="/request-for-quote" variant="gold" size="sm">
                      Request Quote
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)' }} id="explore-services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '3.5rem' }}
          >
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              Explore Services
            </Badge>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              Engineering Services
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '650px' }}>
              Advisory, modernization, dedicated engineering teams, and process automation — each service lists its capabilities and deliverables in full.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="solid"
                  padding="lg"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid var(--color-border)',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(38, 48, 59, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-surface-soft)',
                      color: 'var(--color-brand-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <Badge variant="gold" style={{ fontSize: '0.7rem' }}>
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-dark-maroon)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flexGrow: 1,
                  }}>
                    {service.description}
                  </p>

                  <div style={{
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(122, 12, 22, 0.04)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(122, 12, 22, 0.08)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-maroon)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '0.75rem',
                    }}>
                      Key Capabilities
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      margin: 0,
                      padding: 0,
                    }}>
                      {(service.capabilities || []).slice(0, 3).map((cap, i) => (
                        <li key={i} style={{
                          fontSize: '0.8125rem',
                          color: 'var(--color-text-secondary)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                        }}>
                          <span style={{ color: 'var(--color-primary-maroon)', fontWeight: 700 }}>•</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    to={`/services#${service.slug}`}
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={15} />}
                    style={{ marginTop: 'auto' }}
                  >
                    View service details
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
