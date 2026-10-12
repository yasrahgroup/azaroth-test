import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1000,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '900px',
              maxHeight: '90vh',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 1001,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--color-border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <Badge variant="gold" style={{ marginBottom: '0.5rem' }}>
                  {product.badge || 'Under Development'}
                </Badge>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark-maroon)' }}>
                  {product.name}
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-primary-maroon)', fontWeight: 600 }}>
                  {product.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: 'rgba(122, 12, 22, 0.08)',
                  color: 'var(--color-primary-maroon)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Key Capabilities */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-dark-maroon)', marginBottom: '1rem' }}>
                  Key Capabilities
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {product.keyCapabilities.map((cap, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary-maroon)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Specs */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-dark-maroon)', marginBottom: '1rem' }}>
                  Technical Specifications
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  backgroundColor: 'rgba(250, 250, 247, 0.5)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--color-border-subtle)',
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Latency</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-maroon)' }}>{product.techSpecs.latency}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Concurrency</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-maroon)' }}>{product.techSpecs.concurrency}</div>
                  </div>
                </div>
              </div>

              {/* Compliance */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-dark-maroon)', marginBottom: '1rem' }}>
                  Compliance & Standards
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.techSpecs.compliance.map((comp, i) => (
                    <Badge key={i} variant="gold" style={{ fontSize: '0.75rem' }}>
                      {comp}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-dark-maroon)', marginBottom: '1rem' }}>
                  Additional Features
                </h3>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                      <ArrowRight size={14} style={{ color: 'var(--color-primary-maroon)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '1.5rem 2rem',
              borderTop: '1px solid var(--color-border-subtle)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '1rem',
            }}>
              <Button to="/request-for-quote" variant="outline" size="md">
                Request Quote
              </Button>
              <Button to="/connect-with-us" variant="gold" size="md" icon={<ArrowRight size={16} />}>
                Request Demo
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
