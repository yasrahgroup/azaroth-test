import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Director',
    company: 'Vaken Technologies',
    content: 'Azaroth has consistently provided highly skilled professionals who seamlessly integrate into our team. Their dedication to understanding our needs and delivering the right talent is outstanding.',
    rating: 5,
  },
  {
    name: 'CEO',
    company: 'Tontine Groups',
    content: 'Working with Azaroth\'s dedicated and skilled professionals was truly rewarding, showcasing exceptional responsiveness and technical expertise. My sincere thanks to the entire team.',
    rating: 5,
  },
  {
    name: 'Founder',
    company: 'Tech Startup',
    content: 'Working with Azaroth has been transformative. Their team truly understood our goals and crafted a custom app tailored to our needs. From seamless cloud solutions to AI-powered analytics, every detail was handled with care.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '5rem 0',
    }}>
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}
        >
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Client Testimonials
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#1e293b',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Client Testimonials that Inspire Growth
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          aria-live="polite"
          style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
              initial={shouldReduceMotion ? false : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: 'var(--color-canvas-bg)',
                padding: '3rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--color-gold-from)" color="var(--color-gold-from)" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-dark-maroon)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-maroon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                }}>
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div style={{
                    fontWeight: 700,
                    color: 'var(--color-dark-maroon)',
                    fontSize: '1rem',
                  }}>
                    {testimonials[currentIndex].name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                  }}>
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prevTestimonial}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 180ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-maroon)';
                e.currentTarget.style.borderColor = 'var(--color-primary-maroon)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                e.currentTarget.style.color = 'var(--color-dark-maroon)';
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 180ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-maroon)';
                e.currentTarget.style.borderColor = 'var(--color-primary-maroon)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                e.currentTarget.style.color = 'var(--color-dark-maroon)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-pressed={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: index === currentIndex ? 'var(--color-primary-maroon)' : 'var(--color-border-medium)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 180ms ease-out',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
