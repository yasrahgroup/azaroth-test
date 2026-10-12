import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your business goals, challenges, and requirements through in-depth consultations and research.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed wireframes, prototypes, and technical specifications to ensure alignment before development begins.',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'We build your solution using industry best practices, with rigorous testing at every stage to ensure quality and performance.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'After deployment, we provide ongoing support, maintenance, and optimization to help your solution evolve with your business.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#f8fafc',
      padding: '5rem 0',
    }}>
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}
        >
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Our Process
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#1e293b',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Turning Ideas Into Impact
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: '#64748b',
            lineHeight: 1.7,
          }}>
            At Azaroth, we believe that every successful project begins with a deep understanding of your goals and challenges. Here's how we turn your vision into reality.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          position: 'relative',
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb',
                position: 'relative',
                transition: 'all 180ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              {/* Step Number */}
              <div style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: 'rgba(37, 99, 235, 0.15)',
                marginBottom: '1rem',
                lineHeight: 1,
              }}>
                {step.number}
              </div>

              {/* Step Title */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>

              {/* Step Description */}
              <p style={{
                fontSize: '0.9375rem',
                color: '#64748b',
                lineHeight: 1.6,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
