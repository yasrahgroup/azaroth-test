import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const insightsData = [
  {
    title: 'Building Scalable Software Architecture: Key Principles',
    category: 'Architecture',
    date: 'Jan 15, 2026',
    excerpt: 'Discover the fundamental principles of scalable software architecture and how to design systems that grow with your business.',
  },
  {
    title: 'Application Modernization Strategies for Legacy Systems',
    category: 'Modernization',
    date: 'Jan 10, 2026',
    excerpt: 'Learn proven strategies for modernizing legacy applications without disrupting business operations.',
  },
  {
    title: 'Technology Decision Frameworks for Business Leaders',
    category: 'Strategy',
    date: 'Jan 5, 2026',
    excerpt: 'A practical guide to making informed technology decisions that align with business goals and ROI.',
  },
];

export const BlogSection: React.FC = () => {
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
            Insights & Resources
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--color-dark-maroon)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Engineering Insights That Move Ideas Forward
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            Explore software engineering insights, architecture principles, implementation strategies, and technical guidance to help you make informed technology decisions.
          </p>
        </motion.div>

        {/* Insights Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {insightsData.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(122, 12, 22, 0.1)',
                transition: 'all 180ms ease-out',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(122, 12, 22, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.1)';
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: '180px',
                backgroundColor: index % 2 === 0 ? 'rgba(122, 12, 22, 0.08)' : 'rgba(212, 175, 55, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
              }}>
                �
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                {/* Category & Date */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                }}>
                  <span style={{
                    backgroundColor: 'rgba(122, 12, 22, 0.08)',
                    color: 'var(--color-primary-maroon)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                  }}>
                    {post.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-maroon)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}>
                  {post.excerpt}
                </p>

                {/* Read Article Link */}
                <Link
                  to="/technology-insights"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    color: 'var(--color-primary-maroon)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
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
          <Button to="/technology-insights" variant="outline" size="lg" icon={<ArrowRight size={18} />}>
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
