import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { slaMatrixData } from '../../data/servicesData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const SlaMatrix: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
            Service Level Agreements
          </Badge>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-dark-forest)', marginBottom: '1rem' }}>
            Enterprise SLA Tier Comparison
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)' }}>
            Transparent engagement models, clear delivery checkpoints, and architecture support shaped around your operating model and risk profile.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}>
          {slaMatrixData.map((tier) => (
            <Card
              key={tier.tierName}
              variant={tier.highlight ? 'glass-dark' : 'solid'}
              padding="lg"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-xl)',
                border: tier.highlight ? '2px solid var(--color-brand-gold)' : '1px solid var(--color-border-subtle)',
                backgroundColor: tier.highlight ? 'linear-gradient(135deg, #FFF9F0 0%, #F5F3FF 100%)' : '#ffffff',
                boxShadow: tier.highlight ? '0 20px 40px -10px rgba(117, 68, 216, 0.12)' : 'var(--shadow-sm)',
                transform: tier.highlight ? 'scale(1.01)' : 'none',
                zIndex: tier.highlight ? 2 : 1,
                background: tier.highlight ? 'linear-gradient(135deg, #FFF9F0 0%, #F5F3FF 100%)' : '#ffffff',
              }}
            >
              {tier.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                }}>
                  <Badge variant="gold" icon={<Sparkles size={14} />}>
                    Recommended for Global Enterprises
                  </Badge>
                </div>
              )}

              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: tier.highlight ? '#ffffff' : 'var(--color-dark-forest)',
                  marginBottom: '0.5rem',
                }}>
                  {tier.tierName}
                </h3>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: tier.highlight ? 'var(--color-gold-from)' : 'var(--color-primary-green)',
                }}>
                  {tier.availabilityTarget}
                </div>
              </div>

              {/* Attributes List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginBottom: '2.5rem',
                flexGrow: 1,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem' }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    backgroundColor: tier.highlight ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 108, 53, 0.1)',
                    color: tier.highlight ? 'var(--color-gold-from)' : 'var(--color-primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', color: tier.highlight ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)' }}>Response Incident SLA</span>
                    <strong style={{ color: tier.highlight ? '#ffffff' : 'var(--color-dark-forest)' }}>{tier.responseTime}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem' }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    backgroundColor: tier.highlight ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 108, 53, 0.1)',
                    color: tier.highlight ? 'var(--color-gold-from)' : 'var(--color-primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', color: tier.highlight ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)' }}>Architect Support</span>
                    <strong style={{ color: tier.highlight ? '#ffffff' : 'var(--color-dark-forest)' }}>{tier.leadArchitectSupport}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem' }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    backgroundColor: tier.highlight ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 108, 53, 0.1)',
                    color: tier.highlight ? 'var(--color-gold-from)' : 'var(--color-primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', color: tier.highlight ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)' }}>Engineering Pod Allocation</span>
                    <strong style={{ color: tier.highlight ? '#ffffff' : 'var(--color-dark-forest)' }}>{tier.dedicatedEngineeringPod}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem' }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    backgroundColor: tier.highlight ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 108, 53, 0.1)',
                    color: tier.highlight ? 'var(--color-gold-from)' : 'var(--color-primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', color: tier.highlight ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)' }}>Security & Pentest Audit</span>
                    <strong style={{ color: tier.highlight ? '#ffffff' : 'var(--color-dark-forest)' }}>{tier.securityAuditsIncluded}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem' }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    backgroundColor: tier.highlight ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 108, 53, 0.1)',
                    color: tier.highlight ? 'var(--color-gold-from)' : 'var(--color-primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', color: tier.highlight ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)' }}>Release & Deployment Cadence</span>
                    <strong style={{ color: tier.highlight ? '#ffffff' : 'var(--color-dark-forest)' }}>{tier.deploymentCadence}</strong>
                  </div>
                </div>
              </div>

              <Button
                to="/request-for-quote"
                variant={tier.highlight ? 'gold' : 'primary'}
                size="md"
                className="w-full"
                icon={<ArrowRight size={16} />}
              >
                Discuss this model
              </Button>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
