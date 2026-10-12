import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const scenarios = [
  {
    situation: 'A legacy ERP estate that blocks reporting',
    challenge:
      'Siloed business applications, duplicated data, and disconnected finance, inventory, and operational workflows slow reporting down. Teams wait on manual reconciliations before they can trust a single number.',
    response:
      'We review the existing systems, integrations, and API constraints first, then connect finance, procurement, inventory, sales, and reporting so business information lives in one place and operational visibility improves.',
    serviceArea: 'ERP & systems integration',
  },
  {
    situation: 'A commerce platform that cannot carry peak traffic',
    challenge:
      'Disconnected sales channels, inconsistent inventory visibility, and manual order processing already create friction across the customer journey. When the platform slows under peak demand, those problems surface as abandoned carts and disputed orders.',
    response:
      'We modernize the application foundation and connect storefronts, inventory, order management, and payment gateways, with load, stress, and latency benchmarking built into the testing stage before release.',
    serviceArea: 'Platform modernization',
  },
  {
    situation: 'Operations still running on manual handoffs',
    challenge:
      'Repetitive data entry, paper-based approvals, and fragmented systems consume team time and introduce errors that are usually caught late, after they have already affected the process downstream.',
    response:
      'We re-engineer the workflow, automate document and approval routes, and integrate the systems involved so cycle times shorten, manual entry drops, and operational reporting is available in real time.',
    serviceArea: 'Process automation',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextScenario = () => {
    setCurrentIndex((prev) => (prev + 1) % scenarios.length);
  };

  const prevScenario = () => {
    setCurrentIndex((prev) => (prev - 1 + scenarios.length) % scenarios.length);
  };

  return (
    <section style={{
      backgroundColor: 'var(--color-canvas-bg)',
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
            Engagement Scenarios
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Problems our engineering teams are built to solve
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            The scenarios below describe typical client situations and how our services respond to them — drawn from the work itself, not attributed testimonials.
          </p>
        </motion.div>

        {/* Scenarios Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Engagement scenarios"
          aria-live="polite"
          style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`Scenario ${currentIndex + 1} of ${scenarios.length}`}
              initial={shouldReduceMotion ? false : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: 'var(--color-surface-muted)',
                padding: '3rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Situation */}
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                lineHeight: 1.3,
                marginBottom: '1rem',
              }}>
                {scenarios[currentIndex].situation}
              </h3>

              {/* Challenge */}
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}>
                {scenarios[currentIndex].challenge}
              </p>

              {/* Response */}
              <div style={{
                backgroundColor: 'var(--color-canvas-card)',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-brand-violet)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--color-brand-violet)',
                  marginBottom: '0.5rem',
                }}>
                  How Azaroth responds
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {scenarios[currentIndex].response}
                </p>
              </div>

              {/* Byline: service area */}
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                letterSpacing: '0.02em',
              }}>
                {scenarios[currentIndex].serviceArea}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <button
              type="button"
              aria-label="Previous scenario"
              onClick={prevScenario}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 180ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-brand-gold)';
                e.currentTarget.style.borderColor = 'var(--color-brand-gold)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              aria-label="Next scenario"
              onClick={nextScenario}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 180ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-brand-gold)';
                e.currentTarget.style.borderColor = 'var(--color-brand-gold)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
          }}>
            {scenarios.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to scenario ${index + 1}`}
                aria-pressed={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: index === currentIndex ? 'var(--color-brand-gold)' : 'var(--color-border-medium)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 180ms ease-out',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
