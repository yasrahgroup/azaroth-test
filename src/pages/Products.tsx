import React from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { AnimatedWords } from '../components/common/AnimatedWords';
import { Badge } from '../components/common/Badge';
import { PageHeader } from '../components/common/PageHeader';
import { productsCatalog } from '../data/productsData';
import { Product } from '../types';

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category') || 'All';
  const categoryOptions = ['All', ...new Set(productsCatalog.map((product) => product.category))];
  const filteredProducts = activeCategory === 'All'
    ? productsCatalog
    : productsCatalog.filter((product) => product.category === activeCategory);

  const handleBookDemo = (product: Product) => {
    navigate(`/connect-with-us?product=${encodeURIComponent(product.slug)}`);
  };

  return (
    <>
      <SEOHead
        title="Enterprise Software Platforms — Fitness, E-Commerce, Healthcare & Learning Management"
        description="Enterprise software platforms in active development: Fitness Management System, Multi-Store E-Commerce, Healthcare Management System, and Learning Management Platform — available for scoped early builds, fully customizable with complete source ownership."
        canonicalPath={slug ? `/products/${slug}` : '/products'}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://azaroth-techhive.com'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Products',
                  item: 'https://azaroth-techhive.com/products'
                }
              ]
            },
            {
              '@type': 'WebPage',
              name: 'Enterprise Software Platforms',
              description: 'Enterprise software platforms in active development: Fitness Management System, Multi-Store E-Commerce, Healthcare Management System, and Learning Management Platform — available for scoped early builds, fully customizable with complete source ownership.',
              url: slug ? `https://azaroth-techhive.com/products/${slug}` : 'https://azaroth-techhive.com/products'
            },
            ...(slug ? [{
              '@type': 'SoftwareApplication',
              name: productsCatalog.find(p => p.slug === slug)?.name || 'Enterprise Platform',
              description: productsCatalog.find(p => p.slug === slug)?.shortDescription || 'Enterprise software platform',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: 'Contact for pricing',
                priceCurrency: 'USD'
              }
            }] : [])
          ]
        }}
      />

      {/* Hero */}
      <PageHeader
        kicker="- OUR PRODUCTS -"
        title="Our Products & Platform Foundations"
        gradientWords={['Products', 'Platform', 'Foundations']}
        subtitle="Four platforms in active development, each available for scoped early builds. They give your teams a practical starting point for the roadmap while keeping scope, branding, and operational ownership clear."
        actions={
          <>
            <Link
              to="/request-for-quote"
              style={{
                padding: '0.875rem 1.5rem',
                borderRadius: '12px',
                background: 'linear-gradient(110deg, #4338ca 5%, #4f46e5 52%, #0f766e 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(67, 56, 202, 0.25)',
                transition: 'all 180ms ease-out',
              }}
            >
              Request For Quote
            </Link>
            <Link
              to="/services"
              style={{
                padding: '0.875rem 1.5rem',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-medium)',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'all 180ms ease-out',
              }}
            >
              See engineering services
            </Link>
          </>
        }
      />

      {/* Product Grid */}
      <section style={{ backgroundColor: 'var(--color-canvas-bg)', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            {categoryOptions.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    const next = category === 'All' ? null : category;
                    setSearchParams(next ? { category: next } : {});
                  }}
                  style={{
                    borderRadius: '999px',
                    border: isActive ? '1px solid var(--color-brand-gold)' : '1px solid var(--color-border)',
                    backgroundColor: isActive ? 'var(--color-brand-gold)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--color-text-primary)',
                    padding: '0.625rem 1rem',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all 180ms ease-out',
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div style={{
              padding: '3rem 1.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed var(--color-border)',
              backgroundColor: '#ffffff',
              textAlign: 'center',
            }}>
              <h3 style={{ margin: '0 0 0.5rem', color: 'var(--color-text-primary)' }}>No products found in this category.</h3>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>Try another filter to explore more solutions.</p>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="products-grid">
              {filteredProducts.filter((p) => p.isEnabled !== false).map((product) => (
                <div
                  key={product.id}
                  id={product.slug}
                  style={{
                    scrollMarginTop: '7rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(38, 48, 59, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  }}
                >
                  {/* Visual Header */}
                  <div style={{
                    position: 'relative',
                    height: '250px',
                    backgroundColor: product.id === 'prod-fms' ? 'var(--color-surface-lavender)' :
                                   product.id === 'prod-commerce' ? 'var(--color-surface-mint)' :
                                   product.id === 'prod-lmp' ? 'var(--color-surface-peach)' :
                                   'var(--color-surface-rose)',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={product.coverImage}
                      alt={product.coverAlt}
                      loading="lazy"
                      decoding="async"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: product.id === 'prod-fms' ? 'linear-gradient(180deg, rgba(117, 68, 216, 0.1) 10%, rgba(117, 68, 216, 0.6) 100%)' :
                             product.id === 'prod-commerce' ? 'linear-gradient(180deg, rgba(21, 155, 121, 0.1) 10%, rgba(21, 155, 121, 0.6) 100%)' :
                             product.id === 'prod-lmp' ? 'linear-gradient(180deg, rgba(217, 120, 36, 0.1) 10%, rgba(217, 120, 36, 0.6) 100%)' :
                             'linear-gradient(180deg, rgba(196, 63, 145, 0.1) 10%, rgba(196, 63, 145, 0.6) 100%)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border-subtle)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: 'var(--color-brand-gold)',
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-brand-gold)',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      }} />
                      <span>Under Development</span>
                    </div>

                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      color: '#ffffff',
                    }}>
                      <span style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'var(--color-brand-gold)',
                      }}>
                        Platform In Active Development
                      </span>
                      <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        marginTop: '0.25rem',
                      }}>
                        {product.name}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <p style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: '#bf9129',
                        marginBottom: '0.5rem',
                      }}>
                        {product.tagline}
                      </p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* What You Get */}
                    <div style={{
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '1rem',
                      marginBottom: '1.5rem',
                    }}>
                      <span style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.75rem',
                      }}>
                        What You Get
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                        {(product.benefits || []).slice(0, 3).map((benefit, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                            <CheckCircle2 size={14} style={{ color: 'var(--color-primary-maroon)', flexShrink: 0, marginTop: '0.125rem' }} />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      gap: '0.75rem',
                    }}>
                      <Link
                        to={`/products/${product.slug}`}
                        style={{
                          flex: 1,
                          padding: '0.625rem 1rem',
                          borderRadius: '12px',
                          border: '1px solid var(--color-border-medium)',
                          backgroundColor: 'transparent',
                          color: 'var(--color-text-primary)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 180ms ease-out',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                        }}
                      >
                        See Full Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleBookDemo(product)}
                        style={{
                          flex: 1,
                          padding: '0.625rem 1rem',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                          color: '#FFFFFF',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.375rem',
                          transition: 'all 180ms ease-out',
                        }}
                      >
                        <span>Request a Demo</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
