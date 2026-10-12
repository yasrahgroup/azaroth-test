import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
}) => {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}>
        {/* Progress connecting line */}
        <div style={{
          position: 'absolute',
          top: '1.25rem',
          left: '1.5rem',
          right: '1.5rem',
          height: '2px',
          backgroundColor: 'var(--color-border-subtle)',
          zIndex: 0,
        }}>
          <div style={{
            height: '100%',
            backgroundColor: 'var(--color-primary-green)',
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            transition: 'width 300ms ease-in-out',
          }} />
        </div>

        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNumber) => {
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                backgroundColor: isCompleted 
                  ? 'var(--color-primary-green)' 
                  : isCurrent 
                  ? 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)' 
                  : '#ffffff',
                border: isCurrent 
                  ? '2px solid var(--color-gold-from)' 
                  : isCompleted 
                  ? '2px solid var(--color-primary-green)' 
                  : '2px solid var(--color-border-medium)',
                color: isCompleted 
                  ? '#ffffff' 
                  : isCurrent 
                  ? '#2B0408' 
                  : 'var(--color-text-muted)',
                fontWeight: 800,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isCurrent 
                  ? 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)' 
                  : isCompleted 
                  ? 'var(--color-primary-green)' 
                  : '#ffffff',
                boxShadow: isCurrent 
                  ? '0 0 14px rgba(212, 175, 55, 0.4)' 
                  : 'var(--shadow-xs)',
                transition: 'all 240ms ease-out',
              }}>
                {isCompleted ? <Check size={16} strokeWidth={3} /> : stepNumber}
              </div>

              <span style={{
                fontSize: '0.75rem',
                fontWeight: isCurrent ? 700 : 600,
                color: isCurrent 
                  ? 'var(--color-dark-forest)' 
                  : isCompleted 
                  ? 'var(--color-primary-green)' 
                  : 'var(--color-text-muted)',
                textAlign: 'center',
                maxWidth: '90px',
              }}>
                {stepTitles[stepNumber - 1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
