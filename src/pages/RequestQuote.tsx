import React from 'react';
import { Badge } from '../components/common/Badge';
import { RfqWizard } from '../components/rfq/RfqWizard';

export const RequestQuote: React.FC = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '3.5rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Get Started
          </Badge>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Request a Quote
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            Share your project requirements, timeline, goals, and objectives. Our team will review your needs and provide a tailored proposal with suitable solutions.
          </p>
        </div>
      </section>

      {/* RFQ Wizard Container */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <RfqWizard />
        </div>
      </section>
    </div>
  );
};
