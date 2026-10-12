import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle interactive particle mesh background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    const particleCount = Math.min(width > 768 ? 45 : 20, 50);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(122, 12, 22, ${p1.alpha * 0.35})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(122, 12, 22, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '4.5rem',
      paddingBottom: '5.5rem',
      backgroundColor: 'var(--color-canvas-bg)',
      borderBottom: '1px solid rgba(28, 35, 32, 0.06)'
    }}>
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '20%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122, 12, 22, 0.08) 0%, rgba(122, 12, 22, 0) 70%)',
        pointerEvents: 'none',
        filter: 'blur(50px)',
        zIndex: 0,
      }} />

      <div style={{
        position: 'absolute',
        top: '100px',
        right: '5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0) 70%)',
        pointerEvents: 'none',
        filter: 'blur(50px)',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Enterprise Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-flex', marginBottom: '1.75rem' }}
        >
          <Badge variant="gold" icon={<Sparkles size={14} />}>
            Next-Gen Enterprise Software Engineering
          </Badge>
        </motion.div>

        {/* High-Impact Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: '960px',
            margin: '0 auto 1.5rem auto',
            color: 'var(--color-dark-maroon)',
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Intelligence, Engineered and Innovation Unleashed
        </motion.h1>

        {/* Narrative Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: '740px',
            margin: '0 auto 2.5rem auto',
            fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
          }}
        >
          Azaroth Tech-Hive engineers, evolves, and sustains intelligent software solutions, delivering end-to-end engineering excellence that empowers businesses to innovate, adapt, and scale with confidence.
        </motion.p>

        {/* Dual Primary Conversion CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <Button to="/request-for-quote" variant="gold" size="lg" icon={<ArrowRight size={18} />}>
            Request for Quote
          </Button>

          <Button to="/products" variant="outline" size="lg">
            Explore Our Products
          </Button>
        </motion.div>

        {/* Floating Trust Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.75rem',
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ padding: '0.3rem', borderRadius: '50%', backgroundColor: 'rgba(122, 12, 22, 0.1)', color: 'var(--color-primary-maroon)' }}>
              <ShieldCheck size={16} />
            </div>
            <span>Engineering Excellence</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ padding: '0.3rem', borderRadius: '50%', backgroundColor: 'rgba(122, 12, 22, 0.1)', color: 'var(--color-primary-maroon)' }}>
              <Zap size={16} />
            </div>
            <span>Innovation at Scale</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ padding: '0.3rem', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.15)', color: '#bf9129' }}>
              <Sparkles size={16} />
            </div>
            <span>End-to-End Solutions</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
