import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShoppingBag, GraduationCap, HeartPulse } from 'lucide-react';
import { productsCatalog } from '../../data/productsData';

export const ProductsSection: React.FC = () => {
  const getProductIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={24} aria-hidden="true" />;
      case 'ShoppingBag':
        return <ShoppingBag size={24} aria-hidden="true" />;
      case 'GraduationCap':
        return <GraduationCap size={24} aria-hidden="true" />;
      case 'HeartPulse':
        return <HeartPulse size={24} aria-hidden="true" />;
      default:
        return <ShoppingBag size={24} aria-hidden="true" />;
    }
  };

  return (
    <section
      id="software-solutions"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)',
      }}
      aria-label="Enterprise Software Solutions"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--color-link-main, #4338CA)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            &mdash; SOFTWARE PLATFORMS &mdash;
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--color-text-primary, #1F2937)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Enterprise Software{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Solutions
            </span>
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary, #4B5563)', lineHeight: 1.65 }}>
            Purpose-engineered software platforms designed for scalable multi-location operations, omnichannel digital commerce, healthcare informatics, and enterprise workforce learning.
          </p>
        </div>

        {/* Product Cards: One row on desktop where viewport allows, reflowing responsively */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
        >
          {productsCatalog.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'var(--color-canvas-card, #FFFFFF)',
                borderRadius: '1.25rem',
                border: '1px solid var(--color-border, #E0E7FF)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 200ms ease-out',
                position: 'relative',
              }}
              className="hover:shadow-lg hover:border-indigo-300"
            >
              <div>
                {/* Header with icon and status badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(79, 70, 229, 0.08)',
                      color: 'var(--color-primary-button, #4F46E5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getProductIcon(product.iconName)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--color-warning-light, #FEF3C7)',
                      color: 'var(--color-warning, #D97706)',
                      border: '1px solid var(--color-warning-border, #FDE68A)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary, #1F2937)',
                    marginBottom: '0.625rem',
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: 'var(--color-text-secondary, #4B5563)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {product.description}
                </p>
              </div>

              {/* Action Button: "Explore More" */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border, #E0E7FF)' }}>
                <Link
                  to={`/products/${product.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-link-main, #4338CA)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'all 150ms ease-out',
                  }}
                  className="hover:gap-3"
                  aria-label={`Explore more about ${product.name}`}
                >
                  <span>Explore More</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-primary-button, #4F46E5)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
              transition: 'all 180ms ease-out',
            }}
            className="hover:bg-indigo-700"
          >
            <span>View Complete Platform Catalog</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
