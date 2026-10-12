import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const CtaBanner: React.FC = () => {
  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #2a0408 0%, #7A0C16 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient Gold Halo */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-100px',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '840px' }}>
        <Badge variant="gold" style={{ marginBottom: '1.25rem' }}>
          Let's Build Together
        </Badge>

        <h2 style={{
          fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: '1.25rem',
          letterSpacing: '-0.025em',
        }}>
          Let's Build the Right Digital Solution
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: 'rgba(255, 255, 255, 0.85)',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}>
          Whether you're starting a new initiative or modernizing existing systems, our engineering teams bring the expertise, processes, and commitment to turn your vision into reality. Let's discuss how we can help you achieve your technology goals.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}>
          <Button to="/request-for-quote" variant="gold" size="lg" icon={<ArrowRight size={18} />}>
            Request for Quote
          </Button>

          <Button to="/connect-with-us" variant="outline-dark" size="lg" icon={<MessageSquare size={18} />}>
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
