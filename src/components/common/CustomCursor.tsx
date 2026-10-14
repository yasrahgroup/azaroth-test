import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return;
    }

    const updatePosition = (event: MouseEvent) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = transform;
      if (ringRef.current) ringRef.current.style.transform = transform;
      setIsVisible(true);
    };

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target;
      setIsHovering(
        target instanceof Element &&
          (target.closest('a, button, [role="button"]') !== null),
      );
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    document.addEventListener('mouseleave', hideCursor);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot${isHovering ? ' is-hovering' : ''}`}
        aria-hidden="true"
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring${isHovering ? ' is-hovering' : ''}`}
        aria-hidden="true"
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      />
    </>
  );
};
