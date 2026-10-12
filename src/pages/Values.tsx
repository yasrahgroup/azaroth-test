import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Maximize2, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { ourValuesPrinciples } from '../data/companyData';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const Values: React.FC = () => {
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
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Our Principles
          </Badge>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Principles That Shape Every Solution
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            The foundational values that guide our engineering decisions, client partnerships, and continuous pursuit of excellence in every solution we build.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}>
            {ourValuesPrinciples.map((val, index) => (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  variant="solid"
                  padding="lg"
                  style={{
                    backgroundColor: 'rgba(250, 250, 247, 0.6)',
                    border: '1px solid rgba(122, 12, 22, 0.1)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 180ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(122, 12, 22, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.1)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(122, 12, 22, 0.1)',
                      color: 'var(--color-primary-maroon)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(122, 12, 22, 0.2)',
                    }}>
                      {getIcon(val.iconName)}
                    </div>

                    <Badge variant="gold">
                      {val.number}
                    </Badge>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark-maroon)', marginBottom: '0.375rem' }}>
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
