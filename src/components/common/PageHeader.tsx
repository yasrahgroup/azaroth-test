import React from 'react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  subtitle?: string;
  gradientWords?: string[];
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  gradientWords = [],
  actions
}) => {
  // Split title to apply gradient to specific words
  const renderTitle = () => {
    if (gradientWords.length === 0) {
      return title;
    }

    const parts = title.split(/(\s+)/);
    return parts.map((part, index) => {
      const trimmedPart = part.trim();
      if (trimmedPart && gradientWords.includes(trimmedPart)) {
        return (
          <span
            key={index}
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      style={{
        backgroundColor: '#F3E8FF',
        paddingTop: '5rem',
        paddingBottom: actions ? '4rem' : '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="page-header-section"
    >
      {/* Decorative circles in top left */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dashed yellow circle */}
        <div
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px dashed #FBBF24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Small green circle */}
          <div
            style={{
              width: '1rem',
              height: '1rem',
              borderRadius: '50%',
              backgroundColor: '#10B981',
            }}
          />
        </div>
      </div>

      <div
        className="container"
        style={{
          textAlign: 'center',
          maxWidth: '840px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Kicker text */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8125rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: '#2563EB',
            animation: 'fadeInUp 1s ease-out 0.3s forwards',
            opacity: 0,
          }}
          className="page-header-kicker"
        >
          {kicker}
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 800,
            color: '#1E293B',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            animation: 'fadeInUp 1s ease-out 0.5s forwards',
            opacity: 0,
          }}
          className="page-header-title"
        >
          {renderTitle()}
        </h1>

        {/* Subtitle if provided */}
        {subtitle && (
          <p
            style={{
              fontSize: '1.1875rem',
              color: '#4B5563',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto',
              animation: 'fadeInUp 1s ease-out 0.7s forwards',
              opacity: 0,
            }}
            className="page-header-subtitle"
          >
            {subtitle}
          </p>
        )}

        {/* Actions if provided */}
        {actions && (
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              animation: 'fadeInUp 1s ease-out 0.9s forwards',
              opacity: 0,
            }}
            className="page-header-actions"
          >
            {actions}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
