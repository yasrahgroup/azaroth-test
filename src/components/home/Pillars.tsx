import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Server, ShieldCheck, Check } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const Pillars: React.FC = () => {
  const capabilities = [
    {
      icon: <Zap size={24} />,
      title: 'End-to-End Software Engineering',
      description: 'Full-lifecycle software development from concept to deployment and beyond.',
    },
    {
      icon: <Server size={24} />,
      title: 'Technology Modernization & Evolution',
      description: 'Transforming legacy systems into modern, scalable architectures.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Business Process Optimization & Automation',
      description: 'Streamlining operations through intelligent automation and integration.',
    },
    {
      icon: <Check size={24} />,
      title: 'Dedicated Engineering & Delivery Teams',
      description: 'Experienced pods working as an extension of your organization.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}
        >
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Who We Are
          </Badge>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-dark-maroon)' }}>
            Engineering Software. Enabling Progress.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Azaroth Tech-Hive delivers practical software engineering solutions that help businesses overcome technical challenges, improve operations, and turn ideas into dependable digital products. We partner with organizations to build systems that scale, evolve, and drive meaningful business outcomes.
          </p>
        </motion.div>

        {/* 4-Column Capabilities Grid */}
        <div className="grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card
                variant="solid"
                padding="lg"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(122, 12, 22, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <div style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(122, 12, 22, 0.08)',
                  color: 'var(--color-primary-maroon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(122, 12, 22, 0.15)',
                  marginBottom: '1.25rem',
                }}>
                  {capability.icon}
                </div>

                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-dark-maroon)', marginBottom: '0.75rem' }}>
                  {capability.title}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {capability.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
