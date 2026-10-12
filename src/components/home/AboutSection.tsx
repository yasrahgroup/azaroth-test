import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { Cpu, Cloud, Users, Workflow, Building2 } from 'lucide-react';

const capabilities = [
  {
    icon: <Cpu size={24} />,
    title: 'End-to-End Software Engineering',
    description: 'Full lifecycle development from architecture to deployment and maintenance.',
  },
  {
    icon: <Cloud size={24} />,
    title: 'Technology Modernization & Evolution',
    description: 'Modernizing legacy systems and adopting contemporary technology stacks.',
  },
  {
    icon: <Users size={24} />,
    title: 'Dedicated Engineering & Delivery Teams',
    description: 'Specialized teams aligned with your business goals and delivery timelines.',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Business Process Optimization & Automation',
    description: 'Streamlining operations through intelligent automation and workflow design.',
  },
];

const principles = [
  {
    title: 'Discovery-led',
    label: 'Delivery approach',
    description: 'Every engagement starts with requirements, constraints, and measurable outcomes.',
  },
  {
    title: 'Architecture-first',
    label: 'Execution model',
    description: 'We align technology choices with business context before implementation begins.',
  },
  {
    title: 'Transparent',
    label: 'Communication',
    description: 'Progress, blockers, and decisions are surfaced in a way teams can act on quickly.',
  },
  {
    title: 'Partnership',
    label: 'Working style',
    description: 'We support long-term product evolution rather than one-off feature delivery.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <>
      {/* Who We Are Section */}
      <section style={{
        backgroundColor: 'var(--color-canvas-bg)',
        padding: '5rem 0',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="blue" style={{ marginBottom: '1rem' }}>
                Enterprise Technology Partner
              </Badge>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}>
                Engineered solutions for complex enterprise challenges.
              </h2>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}>
                We work with enterprise teams responsible for complex, business-critical systems. Our engineers design, build, and modernize the software those operations run on — platforms, integrations, and automated workflows — and can embed dedicated engineers alongside your own team to deliver them.
              </p>
            </motion.div>

            {/* Right: Decorative panel (no photo) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--color-surface-lavender) 0%, var(--color-surface-peach) 100%)',
                  border: '2px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '20%',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(117, 68, 216, 0.15) 0%, rgba(117, 68, 216, 0) 70%)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '20%',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(216, 173, 89, 0.12) 0%, rgba(216, 173, 89, 0) 70%)',
                }} />
                <div
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    border: '2px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-brand-violet)',
                    boxShadow: 'var(--shadow-lg)',
                  }}>
                    <Building2 size={64} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '5rem 0',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}
          >
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              Technical Expertise
            </Badge>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              marginBottom: '1rem',
            }}>
              Enterprise engineering capabilities for modern businesses
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="solid"
                  padding="lg"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid var(--color-border)',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    e.currentTarget.style.borderColor = 'var(--color-brand-violet)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.borderColor = ''
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-surface-lavender)',
                    color: 'var(--color-brand-violet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}>
                    {capability.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.75rem',
                  }}>
                    {capability.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {capability.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section style={{
        backgroundColor: 'var(--color-surface-muted)',
        padding: '5rem 0',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}
          >
            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              Founded 2024
            </Badge>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              marginBottom: '1rem',
            }}>
              How we work
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}>
              Azaroth Tech-Hive was founded in 2024. These are the working principles we apply on every engagement today.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="glass"
                  padding="lg"
                  style={{
                    textAlign: 'center',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}>
                    {principle.title}
                  </h3>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-brand-violet)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {principle.label}
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5,
                  }}>
                    {principle.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
