import React from 'react';
import { Users, Cloud, Sparkles, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { serviceOfferings } from '../data/servicesData';
import { SlaMatrix } from '../components/services/SlaMatrix';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users size={26} />;
      case 'Cloud': return <Cloud size={26} />;
      case 'Sparkles': return <Sparkles size={26} />;
      case 'FileCheck': return <FileCheck size={26} />;
      default: return <Users size={26} />;
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
            Enterprise Capabilities
          </Badge>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Mission-Critical Software Services
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            Dedicated engineering pods, cloud modernization, and autonomous AI systems built for 
            global scalability, zero-debt architecture, and continuous operational SLA adherence.
          </p>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {serviceOfferings.map((service) => (
              <Card
                key={service.id}
                variant="solid"
                padding="lg"
                style={{
                  backgroundColor: 'rgba(250, 250, 247, 0.6)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <div style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0, 108, 53, 0.1)',
                        color: 'var(--color-primary-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(0, 108, 53, 0.2)',
                      }}>
                        {getIcon(service.iconName)}
                      </div>

                      {service.badge && (
                        <Badge variant="gold">
                          {service.badge}
                        </Badge>
                      )}
                    </div>

                    <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--color-dark-forest)', marginBottom: '0.5rem' }}>
                      {service.title}
                    </h2>

                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary-green)', marginBottom: '1.25rem' }}>
                      {service.category}
                    </div>

                    <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                      {service.description}
                    </p>

                    <Button to="/request-for-quote" variant="gold" size="md" icon={<ArrowRight size={16} />}>
                      Deploy This Capability
                    </Button>
                  </div>

                  {/* Outcomes & Deliverables Box */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-xs)',
                  }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-dark-forest)', marginBottom: '1.25rem' }}>
                      Verifiable Outcomes & Deliverables
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                      {service.outcomes.map((outcome, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '0.15rem' }} />
                          <span style={{ color: 'var(--color-text-primary)', lineHeight: 1.5 }}>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Tier Matrix Section */}
      <SlaMatrix />
    </div>
  );
};
