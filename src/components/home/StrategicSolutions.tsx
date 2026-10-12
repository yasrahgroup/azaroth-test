import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { ArrowRight, Cpu, Compass, Users, Workflow } from 'lucide-react';
import { serviceOfferings } from '../../data/servicesData';

const getIcon = (name: string) => {
  switch (name) {
    case 'Cpu': return <Cpu size={24} />;
    case 'Compass': return <Compass size={24} />;
    case 'Users': return <Users size={24} />;
    case 'Workflow': return <Workflow size={24} />;
    default: return <Cpu size={24} />;
  }
};

export const StrategicSolutions: React.FC = () => {
  return (
    <section style={{
      backgroundColor: 'var(--color-canvas-bg)',
      padding: '5rem 0',
    }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}
        >
          <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
            Our Services
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Software Engineering for Ideas, Products & Growth
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}>
            A quick look at the engineering services behind our work — advisory, modernization, dedicated teams, and process automation. Open any service for full capabilities and deliverables.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {serviceOfferings.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                variant="glass"
                padding="lg"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid var(--color-border)',
                  transition: 'all 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--color-brand-emerald)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-surface-mint)',
                    color: 'var(--color-brand-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <Badge variant="emerald" style={{ fontSize: '0.7rem' }}>
                      {service.badge}
                    </Badge>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  flexGrow: 1,
                }}>
                  {service.description}
                </p>

                {/* Capabilities */}
                <div style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: 'var(--color-surface-muted)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-brand-emerald)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem',
                  }}>
                    Key Capabilities
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    margin: 0,
                    padding: 0,
                  }}>
                    {(service.capabilities || []).slice(0, 3).map((cap, i) => (
                      <li key={i} style={{
                        fontSize: '0.8125rem',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                      }}>
                        <span style={{ color: 'var(--color-brand-emerald)', fontWeight: 700 }}>•</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Metrics */}
                {service.metrics && service.metrics.length > 0 && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}>
                    {service.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} style={{
                        backgroundColor: 'var(--color-brand-gold-light)',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-brand-gold-border)',
                      }}>
                        <div style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: 'var(--color-brand-gold-text)',
                          marginBottom: '0.25rem',
                        }}>
                          {metric.value}
                        </div>
                        <div style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  to={`/services#${service.slug}`}
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight size={15} />}
                  style={{ marginTop: 'auto' }}
                >
                  View service details
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <Button to="/services" variant="violet" size="lg" icon={<ArrowRight size={18} />}>
            Explore All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
