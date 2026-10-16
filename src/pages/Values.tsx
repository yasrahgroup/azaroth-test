import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Maximize2, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { ourValuesPrinciples } from '../data/companyData';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';
import { useCMS } from '../context/CMSContext';

export const Values: React.FC = () => {
  const { pages } = useCMS();
  const pageData = pages['values'];
  const content = pageData?.content || {};

  const badge = content.badge || 'Our Principles';
  const heading = content.heading || pageData?.title || 'Principles That Shape Every Solution';
  const description = content.description || pageData?.meta_description || 'The foundational values that guide our engineering decisions, client partnerships, and continuous pursuit of excellence in every solution we build.';
  const principles = (content.principles && Array.isArray(content.principles) && content.principles.length > 0)
    ? content.principles
    : ourValuesPrinciples;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Lightbulb': return <Lightbulb size={28} />;
      case 'ShieldCheck': return <ShieldCheck size={28} />;
      case 'Maximize2': return <Maximize2 size={28} />;
      case 'CheckCircle': return <CheckCircle size={28} />;
      case 'Users': return <Users size={28} />;
      case 'TrendingUp': return <TrendingUp size={28} />;
      default: return <Lightbulb size={28} />;
    }
  };

  return (
    <div>
      <SEOHead
        title={pageData?.title ? `${pageData.title} — Azaroth Tech-Hive` : 'Our Values — Azaroth Tech-Hive'}
        description={pageData?.meta_description || "The principles that guide our engineering decisions, client partnerships, and delivery of dependable software solutions for every engagement and long-term relationship."}
        canonicalPath="/values"
      />
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            {badge}
          </Badge>
          <h1 style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-text-primary)' }}>
            {heading}
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            {description}
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
            Our Core Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}>
            {principles.map((val: any, index: number) => (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="glass"
                  padding="lg"
                  style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.borderColor = 'var(--color-brand-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '14px',
                      backgroundColor: 'var(--color-surface-peach)',
                      color: 'var(--color-brand-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--color-brand-orange-border)',
                    }}>
                      {getIcon(val.iconName)}
                    </div>

                    <Badge variant="gold">
                      {val.number}
                    </Badge>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.375rem' }}>
                    {val.title}
                  </h3>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, flexGrow: 1 }}>
                    {val.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Button to="/request-for-quote" variant="gold" size="lg">
              Engage an Engineering Pod Backed by These Values
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
