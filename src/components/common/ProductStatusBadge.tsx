import React from 'react';

export type ProductStatusType = 'Live' | 'Under Development' | 'PUBLISHED' | 'DRAFT' | string;

interface ProductStatusBadgeProps {
  status?: ProductStatusType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
  style?: React.CSSProperties;
}

/**
 * ProductStatusBadge
 * Renders consistent, accessible color-coded badges for product statuses:
 * - Live: Green background (#DCFCE7) with dark green text (#15803D) and green border (#86EFAC)
 * - Under Development: Amber background (#FEF3C7) with dark amber text (#B45309) and amber border (#FDE68A)
 */
export const ProductStatusBadge: React.FC<ProductStatusBadgeProps> = ({
  status = 'Under Development',
  className = '',
  size = 'md',
  showDot = true,
  style = {},
}) => {
  const normalized = (status || '').trim().toLowerCase();
  const isLive = normalized === 'live' || normalized === 'published';
  const isUnderDev = normalized === 'under development' || normalized === 'in development' || normalized === 'development' || normalized === 'draft';

  // Config based on status
  let label = status || 'Under Development';
  let bg = '#FEF3C7'; // Amber background
  let text = '#B45309'; // Dark amber text
  let border = '#FDE68A'; // Amber border
  let dotColor = '#D97706';
  let pulse = true;

  if (isLive) {
    label = 'Live';
    bg = '#DCFCE7'; // Green background
    text = '#15803D'; // Dark green text
    border = '#86EFAC'; // Green border
    dotColor = '#16A34A';
    pulse = false;
  } else if (isUnderDev || !status) {
    label = 'Under Development';
    bg = '#FEF3C7';
    text = '#B45309';
    border = '#FDE68A';
    dotColor = '#D97706';
    pulse = true;
  }

  // Size styling
  const sizeStyles = {
    sm: {
      padding: '0.2rem 0.5rem',
      fontSize: '0.6875rem',
      gap: '0.3rem',
      dotSize: '5px',
    },
    md: {
      padding: '0.3rem 0.65rem',
      fontSize: '0.75rem',
      gap: '0.375rem',
      dotSize: '6px',
    },
    lg: {
      padding: '0.4rem 0.85rem',
      fontSize: '0.8125rem',
      gap: '0.45rem',
      dotSize: '7px',
    },
  }[size];

  return (
    <span
      role="status"
      aria-label={`Product status: ${label}`}
      className={`inline-flex items-center font-semibold rounded-full select-none ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sizeStyles.gap,
        padding: sizeStyles.padding,
        backgroundColor: bg,
        color: text,
        border: `1px solid ${border}`,
        borderRadius: '9999px',
        fontSize: sizeStyles.fontSize,
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '0.02em',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
        transition: 'all 180ms ease-in-out',
        ...style,
      }}
    >
      {showDot && (
        <span
          aria-hidden="true"
          style={{
            width: sizeStyles.dotSize,
            height: sizeStyles.dotSize,
            borderRadius: '50%',
            backgroundColor: dotColor,
            flexShrink: 0,
            animation: pulse ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
          }}
        />
      )}
      <span>{label}</span>
    </span>
  );
};

export default ProductStatusBadge;
