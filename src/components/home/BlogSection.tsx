import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insightsArticles } from '../../data/insightsData';
import { useCMS } from '../../context/CMSContext';

export const BlogSection: React.FC = () => {
  const { insights: cmsInsights } = useCMS();
  const displayArticles = (cmsInsights && cmsInsights.length > 0)
    ? cmsInsights.slice(0, 3).map((ins, idx) => {
        const match = insightsArticles.find(ia => ia.slug === ins.slug || ia.id === ins.id);
        return {
          id: ins.slug || ins.id || `art-${idx}`,
          title: ins.title,
          slug: ins.slug || `insight-${idx}`,
          category: ins.category || match?.category || 'System Architecture',
          readTime: ins.readTime || (ins as any).read_time || match?.readTime || '6 min read',
          excerpt: ins.excerpt || match?.excerpt || '',
          publishedDate: ins.publishedDate || (ins as any).published_date || match?.publishedDate || 'October 2026',
        };
      })
    : insightsArticles.slice(0, 3);
  return (
    <section style={{
      backgroundColor: 'var(--color-canvas-bg)',
      padding: '5rem 0',
    }}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}
        >
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Resource Hub
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Practical engineering insight for enterprise teams
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            The Resource Hub collects what our engineers publish on system architecture, enterprise AI, and cloud modernization — the same material we work through when a technical decision needs grounding.
          </p>
        </motion.div>

        {/* Insights Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {displayArticles.map((article: any, index: number) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                transition: 'all 180ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--color-brand-violet)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <Link
                to={`/technology-insights/${article.slug}`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Decorative category panel (no image available) */}
                <div
                  aria-hidden="true"
                  style={{
                    height: '180px',
                    backgroundImage: index % 2 === 0
                      ? 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0 14px, rgba(255, 255, 255, 0) 14px 28px), linear-gradient(135deg, var(--color-surface-lavender) 0%, var(--color-brand-violet-light) 100%)'
                      : 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0 14px, rgba(255, 255, 255, 0) 14px 28px), linear-gradient(135deg, var(--color-surface-peach) 0%, var(--color-brand-gold-light) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: index % 2 === 0 ? 'var(--color-brand-violet)' : 'var(--color-brand-gold-text)',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--color-border)',
                  }}>
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Category & Date */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-muted)',
                  }}>
                    <span style={{
                      backgroundColor: 'var(--color-surface-muted)',
                      color: 'var(--color-brand-violet)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontWeight: 600,
                    }}>
                      {article.category}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} aria-hidden="true" />
                      {article.publishedDate}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={14} aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.4,
                  }}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}>
                    {article.excerpt}
                  </p>

                  {/* Read Article label (inside the card link) */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      color: 'var(--color-brand-violet)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    <span>Read article</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <Button to="/technology-insights" variant="outline" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
