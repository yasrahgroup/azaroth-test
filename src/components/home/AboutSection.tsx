import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { Cpu, Cloud, Users, Workflow } from 'lucide-react';

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

const statistics = [
  {
    value: '95%',
    label: 'Client Satisfaction',
    description: 'Consistently delivering solutions that meet and exceed expectations.',
  },
  {
    value: '100%',
    label: 'Commitment to Quality',
    description: 'Every project undergoes rigorous testing and quality assurance.',
  },
  {
    value: '90%',
    label: 'On-Time Delivery',
    description: 'Reliable project execution with transparent communication and timelines.',
  },
  {
    value: 'Long-Term',
    label: 'Client Partnerships',
    description: 'Building lasting relationships through trust and collaborative success.',
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
              <Badge variant="gold" style={{ marginBottom: '1rem' }}>
                Who We Are
              </Badge>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--color-dark-maroon)',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}>
                Engineering Software. Enabling Progress.
              </h2>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                Azaroth Tech-Hive engineers, evolves, and sustains intelligent software solutions that transform ideas into dependable digital products. We combine technical expertise with strategic thinking to help businesses overcome challenges, improve operations, and achieve sustainable growth through technology.
              </p>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}>
                From custom applications and enterprise platforms to cloud infrastructure and AI-powered capabilities, we deliver end-to-end engineering excellence that empowers organizations to innovate, adapt, and scale with confidence in an ever-evolving digital landscape.
              </p>
            </motion.div>

            {/* Right: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(122, 12, 22, 0.1) 0%, rgba(212, 175, 55, 0.08) 100%)',
                border: '2px solid rgba(122, 12, 22, 0.15)',
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
                  background: 'radial-gradient(circle, rgba(122, 12, 22, 0.15) 0%, rgba(122, 12, 22, 0) 70%)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '20%',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0) 70%)',
                }} />
                <div style={{
                  fontSize: '5rem',
                  opacity: 0.3,
                }}>
                  🚀
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
              Our Engineering Capabilities
            </Badge>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--color-dark-maroon)',
              marginBottom: '1rem',
            }}>
              Comprehensive Solutions for Every Challenge
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
                    border: '1px solid rgba(122, 12, 22, 0.1)',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(122, 12, 22, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(122, 12, 22, 0.08)',
                    color: 'var(--color-primary-maroon)',
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
                    color: 'var(--color-dark-maroon)',
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

      {/* Statistics Section */}
      <section style={{
        backgroundColor: 'var(--color-dark-maroon)',
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
            <Badge variant="dark" style={{ marginBottom: '1rem' }}>
              Our Impact
            </Badge>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Delivering Excellence at Scale
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="glass-dark"
                  padding="lg"
                  style={{
                    textAlign: 'center',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: 'var(--color-gold-from)',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {stat.label}
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-inverse-muted)',
                    lineHeight: 1.5,
                  }}>
                    {stat.description}
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
