import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  ArrowRight 
} from 'lucide-react';
import { deliveryStages } from '../../data/deliveryData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const ProcessTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      {/* Stage Selector Pills (Horizontal on desktop, stacked on mobile) */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        justifyContent: 'center',
        padding: '0.75rem',
        backgroundColor: 'rgba(250, 250, 247, 0.8)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border-subtle)',
      }}>
        {deliveryStages.map((stage) => {
          const isSelected = activeStage === stage.stageNumber;
          return (
            <button
              key={stage.stageNumber}
              onClick={() => setActiveStage(stage.stageNumber)}
              aria-pressed={isSelected}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.625rem 1.25rem',
                borderRadius: 'var(--radius-lg)',
                border: isSelected ? '1px solid var(--color-primary-maroon)' : '1px solid transparent',
                backgroundColor: isSelected ? 'var(--color-primary-maroon)' : '#ffffff',
                color: isSelected ? '#ffffff' : 'var(--color-text-primary)',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 200ms ease-out',
                boxShadow: isSelected ? '0 4px 12px rgba(0, 108, 53, 0.25)' : 'var(--shadow-xs)',
              }}
            >
              <span style={{
                width: '1.5rem',
                height: '1.5rem',
                borderRadius: '50%',
                backgroundColor: isSelected ? '#ffffff' : 'rgba(0, 108, 53, 0.1)',
                color: isSelected ? 'var(--color-primary-green, #006C35)' : 'var(--color-primary-green, #006C35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 800,
              }}>
                {stage.stageNumber}
              </span>
              <span>{stage.title.split(' ')[0]} {stage.title.split(' ')[1] || ''}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Breakdown Panel */}
      {deliveryStages
        .filter((s) => s.stageNumber === activeStage)
        .map((stage) => (
          <Card
            key={stage.stageNumber}
            variant="glass"
            padding="lg"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 108, 53, 0.2)',
              boxShadow: '0 20px 40px -15px rgba(0, 108, 53, 0.08)',
            }}
          >
            {/* Stage Header */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--color-border-subtle)',
              marginBottom: '2rem',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Badge variant="gold">
                    Stage 0{stage.stageNumber}
                  </Badge>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>
                    <Clock size={15} />
                    <span>Duration: {stage.duration}</span>
                  </div>
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-dark-maroon)', marginBottom: '0.375rem' }}>
                  {stage.title}
                </h2>
                
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary-maroon)' }}>
                  {stage.tagline}
                </p>
              </div>

              <Button to="/request-for-quote" variant="gold" size="sm" icon={<ArrowRight size={15} />}>
                Engage Pod for this Stage
              </Button>
            </div>

            {/* Narrative Overview */}
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {stage.description}
            </p>

            {/* Activities & Deliverables 3-Column Detailed Matrix */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}>
              
              {/* Key Activities */}
              <div style={{
                backgroundColor: 'rgba(250, 250, 247, 0.8)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)',
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-maroon)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={18} style={{ color: 'var(--color-primary-maroon)' }} />
                  <span>Key Activities</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {stage.keyActivities.map((act, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-primary-maroon)', fontWeight: 700, marginTop: '-0.1rem' }}>•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible Deliverables */}
              <div style={{
                backgroundColor: 'rgba(250, 250, 247, 0.8)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)',
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-maroon)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileCheck size={18} style={{ color: 'var(--color-primary-maroon)' }} />
                  <span>Tangible Deliverables</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {stage.deliverables.map((del, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary-maroon)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ fontWeight: 600, color: 'var(--color-dark-maroon)' }}>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Gates */}
              <div style={{
                backgroundColor: 'rgba(250, 250, 247, 0.8)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0, 108, 53, 0.2)',
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-forest, #012411)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: '#006C35' }} />
                  <span>Verified Quality Gates</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {stage.qualityGates.map((gate, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: '#006C35', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{gate}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </Card>
        ))}

    </div>
  );
};
