import React from 'react';
import { Badge } from '../components/common/Badge';
import { ProcessTimeline } from '../components/framework/ProcessTimeline';
import { FinalCTA } from '../components/home/FinalCTA';
import { SEOHead } from '../components/common/SEOHead';

export const DeliveryFramework: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="How We Work — Delivery Framework | Azaroth Tech-Hive"
        description="A structured, collaborative delivery approach covering discovery, design, development, testing, and deployment to keep solutions aligned with project goals."
        canonicalPath="/delivery-framework"
      />
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Delivery Framework
          </Badge>
          <h1 style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-text-primary)' }}>
            Our Delivery Framework — A Clear Path from Idea to Impact
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            A structured, collaborative approach that brings clarity to every stage of software development, ensuring solutions remain aligned with project goals, built on sound engineering practices, and adaptable to evolving needs.
          </p>
        </div>
      </section>

      {/* Interactive Process Stepper */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <ProcessTimeline />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
