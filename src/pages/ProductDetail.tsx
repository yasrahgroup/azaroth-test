import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Activity,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  CheckCircle2, 
  FileCheck, 
  Zap, 
  Globe
} from 'lucide-react';
import { productsCatalog } from '../data/productsData';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsCatalog.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="section container" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Platform Not Found</h2>
        <p style={{ marginBottom: '2rem' }}>The requested enterprise platform specification does not exist.</p>
        <Button to="/products" variant="primary" icon={<ArrowLeft size={16} />} iconPosition="left">
          Back to Products Catalog
        </Button>
      </div>
    );
  }

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity size={32} />;
      case 'ShoppingBag': return <ShoppingBag size={32} />;
      case 'GraduationCap': return <GraduationCap size={32} />;
      case 'HeartPulse': return <HeartPulse size={32} />;
      default: return <Activity size={32} />;
    }
  };

  return (
    <div>
      {/* Product Hero */}
      <section className="section theme-dark-obsidian bg-grid-pattern">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              color: 'var(--color-gold-from)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Products Directory</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(122, 12, 22, 0.25)',
              color: '#D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}>
              {getIcon(product.iconName)}
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Badge variant="gold">{product.category}</Badge>
                {product.badge && <Badge variant="gold">{product.badge}</Badge>}
              </div>
              <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: '#ffffff', margin: 0 }}>
                {product.name}
              </h1>
            </div>
          </div>

          <p style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#D4AF37',
            marginBottom: '1rem',
            maxWidth: '800px',
          }}>
            {product.tagline}
          </p>

          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--color-text-inverse-muted)',
            lineHeight: 1.7,
            maxWidth: '820px',
            marginBottom: '2.5rem',
          }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/request-for-quote" variant="gold" size="lg" icon={<ArrowRight size={18} />}>
              Request Technical Deployment
            </Button>
            <Button to="/connect-with-us" variant="outline-dark" size="lg">
              Speak with Solution Architect
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specifications Deep-Dive */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-dark-maroon)' }}>
            System Architecture & Benchmarks
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            <Card variant="solid" padding="md" style={{ backgroundColor: 'var(--color-canvas-bg)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-maroon)', marginBottom: '0.5rem' }}>
                <Zap size={18} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Latency Benchmark</span>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark-maroon)' }}>
                {product.techSpecs.latency}
              </div>
            </Card>

            <Card variant="solid" padding="md" style={{ backgroundColor: 'var(--color-canvas-bg)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-maroon)', marginBottom: '0.5rem' }}>
                <Zap size={18} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Concurrency Benchmark</span>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark-maroon)' }}>
                {product.techSpecs.concurrency}
              </div>
            </Card>

            <Card variant="solid" padding="md" style={{ backgroundColor: 'var(--color-canvas-bg)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-maroon)', marginBottom: '0.5rem' }}>
                <FileCheck size={18} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Compliance Guardrails</span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-maroon)', lineHeight: 1.4 }}>
                {product.techSpecs.compliance.join(', ')}
              </div>
            </Card>

            <Card variant="solid" padding="md" style={{ backgroundColor: 'var(--color-canvas-bg)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-maroon)', marginBottom: '0.5rem' }}>
                <Globe size={18} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Supported Protocols</span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-maroon)', lineHeight: 1.4 }}>
                {product.techSpecs.protocols.join(', ')}
              </div>
            </Card>
          </div>

          {/* Core Capabilities Detailed List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-dark-maroon)' }}>
                Key Architectural Capabilities
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.keyCapabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-primary-maroon)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-dark-maroon)' }}>
                Enterprise Integration Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} style={{ color: '#D4AF37', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
