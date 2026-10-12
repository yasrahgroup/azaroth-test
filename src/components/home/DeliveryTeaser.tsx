import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { deliveryStages } from '../../data/deliveryData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const DeliveryTeaser: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ maxWidth: '650px' }}>
            <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
              Execution Methodology
            </Badge>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-dark-forest)', marginBottom: '0.75rem' }}>
              Structured 6-Stage Delivery Framework
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
              A milestone-driven, verifiable delivery process designed to guarantee architectural alignment, continuous automated testing, and predictable time-to-value.
            </p>
          </div>

          <Button to="/delivery-framework" variant="outline" icon={<ArrowRight size={16} />}>
            Explore Full Framework
          </Button>
        </div>

        {/* 6-Stage Stepper Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {deliveryStages.map((stage) => (
            <Card
              key={stage.stageNumber}
              variant="solid"
              padding="md"
              style={{
                backgroundColor: 'rgba(250, 250, 247, 0.5)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease-out',
              }}
              className="stage-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-green)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.9375rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0, 108, 53, 0.25)',
                }}>
                  0{stage.stageNumber}
                </span>

                <Badge variant="emerald" style={{ fontSize: '0.7rem' }}>
                  {stage.duration}
                </Badge>
              </div>

              <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--color-dark-forest)', marginBottom: '0.375rem' }}>
                {stage.title}
              </h3>

              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-green)', marginBottom: '0.75rem' }}>
                {stage.tagline}
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
                {stage.description}
              </p>

              <div style={{
                paddingTop: '0.875rem',
                borderTop: '1px solid var(--color-border-subtle)',
                fontSize: '0.8125rem',
                color: 'var(--color-dark-forest)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}>
                <CheckCircle2 size={15} style={{ color: 'var(--color-primary-green)' }} />
                <span>Verified Quality Gate</span>
              </div>
            </Card>
          ))}
        </div>

      </div>

      <style>{`
        .stage-card:hover {
          border-color: rgba(0, 108, 53, 0.3) !important;
          background-color: #ffffff !important;
          box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.08) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
