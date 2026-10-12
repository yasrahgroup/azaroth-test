import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { AnimatedWords } from '../components/common/AnimatedWords';
import { ProductModal } from '../components/products/ProductModal';
import { Badge } from '../components/common/Badge';
import { productsCatalog } from '../data/productsData';
import { Product } from '../types';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category') || 'All';
  const categoryOptions = ['All', ...new Set(products.map((product) => product.category))];
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((product) => product.category === activeCategory);

  useEffect(() => {
    // Simulate API call with local data
    setProducts(productsCatalog);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!slug) {
      setSelectedProduct(null);
      setIsModalOpen(false);
      return;
    }

    const product = products.find((item) => item.slug === slug);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    } else if (!isLoading) {
      setSelectedProduct(null);
      setIsModalOpen(false);
    }
  }, [slug, products, isLoading]);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    if (slug !== product.slug) {
      navigate(`/products/${product.slug}`, { replace: true });
    }
  };

  const handleBookDemo = (product: Product) => {
    navigate(`/connect-with-us?product=${encodeURIComponent(product.slug)}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (slug) {
      navigate('/products', { replace: true });
    }
  };

  return (
    <>
      <SEOHead
        title="Enterprise Software Platforms — Fitness, E-Commerce, Healthcare & Learning Management"
        description="Production-ready enterprise software platforms: Fitness Management System, Multi-Store E-Commerce, Healthcare Management System, and Learning Management Platform. Fully customizable with complete source ownership."
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
                  item: 'https://www.azaroth-techhive.com'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Products',
                  item: 'https://www.azaroth-techhive.com/products'
                }
              ]
            },
            {
              '@type': 'WebPage',
              name: 'Enterprise Software Platforms',
              description: 'Production-ready enterprise software platforms: Fitness Management System, Multi-Store E-Commerce, Healthcare Management System, and Learning Management Platform. Fully customizable with complete source ownership.',
              url: slug ? `https://www.azaroth-techhive.com/products/${slug}` : 'https://www.azaroth-techhive.com/products'
            },
            ...(slug ? [{
              '@type': 'SoftwareApplication',
              name: products.find(p => p.slug === slug)?.name || 'Enterprise Platform',
              description: products.find(p => p.slug === slug)?.shortDescription || 'Enterprise software platform',
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
      <section style={{
        padding: '4rem 0',
        borderBottom: '1px solid rgba(122, 12, 22, 0.15)',
        backgroundColor: 'var(--color-canvas-bg)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              Ready-to-Deploy Platforms
            </Badge>
            <h1 style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--color-dark-maroon)',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
            }}>
              <AnimatedWords text="Business Platforms You Can Launch Fast — And Fully Own" />
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              Four proven platforms that save you 6–12 months of development. Each one is delivered as a starting point you fully own — customize it, brand it, and run it on your own systems. No lock-in, no hidden fees, no black boxes.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/request-for-quote"
                style={{
                  padding: '0.875rem 1.5rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)',
                  color: '#2B0408',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
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
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ backgroundColor: 'var(--color-canvas-bg)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            {categoryOptions.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    const next = category === 'All' ? null : category;
                    setSearchParams(next ? { category: next } : {});
                  }}
                  style={{
                    borderRadius: '999px',
                    border: isActive ? '1px solid var(--color-primary-maroon)' : '1px solid rgba(122, 12, 22, 0.2)',
                    backgroundColor: isActive ? 'var(--color-primary-maroon)' : '#ffffff',
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

          {/* Loading Skeleton */}
          {isLoading && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
            }} aria-busy="true">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border-subtle)',
                  overflow: 'hidden',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}>
                  <div style={{ height: '250px', backgroundColor: 'rgba(122, 12, 22, 0.08)' }} />
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ height: '0.75rem', width: '33%', borderRadius: '4px', backgroundColor: 'rgba(122, 12, 22, 0.1)' }} />
                    <div style={{ height: '0.75rem', width: '100%', borderRadius: '4px', backgroundColor: 'rgba(122, 12, 22, 0.08)' }} />
                    <div style={{ height: '0.75rem', width: '83%', borderRadius: '4px', backgroundColor: 'rgba(122, 12, 22, 0.08)' }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {!isLoading && hasError && (
            <div style={{
              padding: '3rem',
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }} role="alert">
              <AlertCircle size={36} style={{ color: '#ef4444' }} />
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-dark-maroon)' }}>
                We couldn't load the platforms right now.
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '400px' }}>
                Reach out directly and we'll walk you through them personally.
              </p>
              <div style={{ paddingTop: '0.5rem' }}>
                <a
                  href="mailto:hello@azaroth-techhive.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)',
                    color: '#2B0408',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={16} />
                  hello@azaroth-techhive.com
                </a>
              </div>
            </div>
          )}

          {/* Products */}
          {!isLoading && !hasError && filteredProducts.length === 0 && (
            <div style={{
              padding: '3rem 1.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed rgba(122, 12, 22, 0.2)',
              backgroundColor: '#ffffff',
              textAlign: 'center',
            }}>
              <h3 style={{ margin: '0 0 0.5rem', color: 'var(--color-dark-maroon)' }}>No products found in this category.</h3>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>Try another filter to explore more solutions.</p>
            </div>
          )}

          {!isLoading && !hasError && filteredProducts.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2.5rem',
            }}>
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
                    e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(122, 12, 22, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.25)';
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
                    backgroundColor: 'rgba(122, 12, 22, 0.08)',
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
                      background: 'linear-gradient(180deg, rgba(24, 9, 11, 0.08) 10%, rgba(24, 9, 11, 0.78) 100%)',
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
                      color: (product.stockStatus || '') === 'Deployment Ready' ? 'var(--color-primary-maroon)' : '#D4AF37',
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: (product.stockStatus || '') === 'Deployment Ready' ? '#006C35' : '#F59E0B',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      }} />
                      <span>{product.stockStatus || 'Under Development'}</span>
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
                        color: '#D4AF37',
                      }}>
                        Ready-to-Deploy Platform
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
                      <button
                        type="button"
                        onClick={() => openModal(product)}
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
                        }}
                      >
                        See Full Details
                      </button>

                      <button
                        type="button"
                        onClick={() => handleBookDemo(product)}
                        style={{
                          flex: 1,
                          padding: '0.625rem 1rem',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)',
                          color: '#2B0408',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: 'none',
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

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
