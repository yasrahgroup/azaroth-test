import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShoppingBag, GraduationCap, HeartPulse, Check } from 'lucide-react';
import { productsCatalog } from '../../data/productsData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const FeaturedSolutions: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity size={22} />;
      case 'ShoppingBag': return <ShoppingBag size={22} />;
      case 'GraduationCap': return <GraduationCap size={22} />;
      case 'HeartPulse': return <HeartPulse size={22} />;
      default: return <Activity size={22} />;
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface-muted)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}
        >
          <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
            Our Products
          </Badge>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
            Fitness & E-Commerce Solutions
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Our enterprise software platforms are designed to scale with your business, providing the foundation for growth, efficiency, and competitive advantage in today's digital landscape.
          </p>
        </motion.div>

        {/* Products - 2x2 Grid on Desktop */}
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
        }}>
          {productsCatalog.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card
                variant="glass"
                padding="lg"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--color-brand-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-surface-mint)',
                  color: 'var(--color-brand-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-brand-emerald-border)',
                }}>
                  {getIcon(product.iconName)}
                </div>

                {product.badge && (
                  <Badge variant="orange" style={{ fontSize: '0.7rem' }}>
                    {product.badge}
                  </Badge>
                )}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.375rem' }}>
                {product.name}
              </h3>

              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand-emerald)', marginBottom: '1rem' }}>
                {product.tagline}
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                {product.description}
              </p>

              {/* Tech Spec Chips */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                backgroundColor: 'var(--color-surface-muted)',
                padding: '0.875rem 1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                fontSize: '0.8125rem',
                border: '1px solid var(--color-border)'
              }}>
                <div>
                  <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem' }}>Design target — latency</span>
                  <strong style={{ color: 'var(--color-text-primary)' }}>{product.techSpecs.latency}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem' }}>Design target — capacity</span>
                  <strong style={{ color: 'var(--color-text-primary)' }}>{product.techSpecs.concurrency}</strong>
                </div>
              </div>

              {/* Key Capabilities */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {product.keyCapabilities.slice(0, 3).map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                    <Check size={14} style={{ color: 'var(--color-brand-emerald)', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                <Link
                  to={`/products/${product.slug}`}
                  style={{
                    color: 'var(--color-brand-emerald)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>View {product.name} details</span>
                  <ArrowRight size={15} />
                </Link>

                <Button to="/request-for-quote" variant="violet" size="sm">
                  Request Quote
                </Button>
              </div>

            </Card>
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (min-width: 1200px) {
            .products-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
