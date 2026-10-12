import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface HeroSlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    src: '/images/hero/slide-1.jpg',
    alt: 'Network cabling and server racks inside a modern data centre',
    title: 'Cloud & platform engineering',
    caption: 'Resilient architectures for systems that carry day-to-day operations.',
  },
  {
    id: 'slide-2',
    src: '/images/hero/slide-2.jpg',
    alt: 'Source code displayed on a developer workstation',
    title: 'Product & software engineering',
    caption: 'Discovery, build and release owned end to end by one delivery team.',
  },
  {
    id: 'slide-3',
    src: '/images/hero/slide-3.jpg',
    alt: 'Operational analytics dashboard showing usage and performance charts',
    title: 'Data, analytics & applied AI',
    caption: 'Operational data shaped into reporting and decisions teams can defend.',
  },
  {
    id: 'slide-4',
    src: '/images/hero/slide-4.jpg',
    alt: 'Illuminated printed circuit board under close inspection',
    title: 'Legacy system modernisation',
    caption: 'Critical estates evolved in stages, without pausing the business.',
  },
];

const SLIDE_INTERVAL_MS = 6000;

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(() => heroSlides.map(() => false));
  const sectionRef = useRef<HTMLElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const markLoaded = useCallback((index: number) => {
    setImagesLoaded((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsPlaying(false);
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (!isPlaying || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPlaying, reduceMotion]);

  const pauseForInteraction = () => setIsPlaying(false);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Azaroth Tech-Hive engineering capabilities"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => {
        if (!reduceMotion) setIsPlaying(true);
      }}
      onFocusCapture={pauseForInteraction}
      style={{ position: 'relative', minHeight: 'min(92vh, 780px)', overflow: 'hidden', backgroundColor: '#1a0508' }}
    >
      {/* Background slides */}
      <div style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt=""
            fetchPriority={index === 0 ? 'high' : 'auto'}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => markLoaded(index)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentIndex ? 1 : 0,
              transition: reduceMotion ? 'none' : 'opacity 1200ms ease-in-out',
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(105deg, rgba(26, 5, 8, 0.94) 0%, rgba(59, 5, 11, 0.82) 42%, rgba(26, 5, 8, 0.55) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          minHeight: 'min(92vh, 780px)',
          display: 'flex',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '7rem 1.5rem 9rem',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(2.25rem, 4.6vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1.25rem',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
            }}
          >
            Enterprise software engineering for business-critical systems
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.65,
              marginBottom: '1.75rem',
              maxWidth: '620px',
            }}
          >
            Azaroth Tech-Hive designs, builds and modernises the platforms behind commerce,
            healthcare, education, logistics and ERP operations — with a delivery framework
            that keeps scope, quality and communication visible at every stage.
          </motion.p>

          {/* Rotating capability caption (decorative for assistive tech; mirrored above) */}
          <div aria-hidden="true" style={{ minHeight: '3.75rem', marginBottom: '2rem' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#D4AF37' }}>
                  {currentSlide.title}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.82)' }}>
                  {currentSlide.caption}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link
              to="/request-for-quote"
              style={{
                padding: '0.95rem 1.9rem',
                background: 'linear-gradient(135deg, #D4AF37 0%, #BF9129 100%)',
                border: 'none',
                borderRadius: '12px',
                color: '#2B0408',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'transform 180ms ease-out, box-shadow 180ms ease-out',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)',
              }}
            >
              Request a quote
            </Link>
            <Link
              to="/products"
              style={{
                padding: '0.95rem 1.9rem',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.32)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'background-color 180ms ease-out',
              }}
            >
              See the 4 platforms
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#ffffff',
          }}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        <div role="group" aria-label="Choose slide" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
              aria-current={index === currentIndex ? 'true' : undefined}
              style={{
                width: index === currentIndex ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: index === currentIndex ? '#D4AF37' : 'rgba(255, 255, 255, 0.35)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 180ms ease-out, background-color 180ms ease-out',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#ffffff',
          }}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>

        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? 'Pause slide rotation' : 'Resume slide rotation'}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
            }}
          >
            {isPlaying ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
          </button>
        )}
      </div>

      {/* Screen-reader summary of all slides */}
      <ul className="sr-only">
        {heroSlides.map((slide) => (
          <li key={slide.id}>
            {slide.title}: {slide.caption}
          </li>
        ))}
      </ul>

      {!imagesLoaded[currentIndex] && (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: '#1a0508' }} />
      )}
    </section>
  );
};
