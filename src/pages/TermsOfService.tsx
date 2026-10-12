import React from 'react';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';

export const TermsOfService: React.FC = () => {
  return (
    <div>
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '3.5rem' }}>
        <div className="container-prose" style={{ textAlign: 'center' }}>
          <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
            Commercial Terms
          </Badge>
          <h1 style={{ marginBottom: '1rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Effective Date: October 2026 • Azaroth Tech-Hive Inc.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-prose">
          <Card variant="solid" padding="lg" style={{ backgroundColor: 'rgba(250, 250, 247, 0.5)', border: '1px solid var(--color-border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Scope of Engagement</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
              These Terms of Service govern the access and evaluation of the Azaroth UI platform, architectural documentation, 
              and proprietary software accelerators developed by Azaroth Tech-Hive Inc. Formal engineering engagements and 
              dedicated pod staffing are governed by individual Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Intellectual Property Ownership</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
              All custom software code, schema definitions, and platform components produced by dedicated Azaroth engineering pods 
              for a client are transferred 100% to the client upon milestone acceptance, free of vendor lock-in.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Service Level Commitments (SLAs)</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Operational uptime, response times, and incident remediation guarantees are governed by the specific SLA tier 
              (Standard, Business, or Mission-Critical Enterprise) outlined in the commercial agreement.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Governing Law & Jurisdiction</h2>
            <p style={{ lineHeight: 1.7 }}>
              These terms are construed in accordance with the laws of India, subject to the jurisdiction of the competent courts in Chennai, Tamil Nadu.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
