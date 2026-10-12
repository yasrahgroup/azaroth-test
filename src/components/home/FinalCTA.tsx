import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section style={{
      backgroundColor: 'var(--color-dark-maroon)',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-100px',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}>
            Let's Build the Right Digital Solution
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--color-text-inverse-muted)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}>
            Whether you're exploring new ideas, modernizing existing systems, or scaling your operations — we're here to help you discuss requirements, explore technical possibilities, and find the right path forward.
          </p>
          <Button to="/connect-with-us" variant="gold" size="lg" icon={<ArrowRight size={18} />}>
            Connect With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
