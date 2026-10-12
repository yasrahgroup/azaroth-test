import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Inbox } from 'lucide-react';
import { insightsArticles } from '../data/insightsData';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');

  const categories = ['All', 'System Architecture', 'Enterprise AI', 'Cloud Modernization'];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(searchQuery.trim());
    }, 300);

    return () => window.clearTimeout(timer);
  }, [searchQuery]);

  const filteredArticles = useMemo(() => {
    return insightsArticles.filter((article) => {
      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
      const normalizedQuery = debouncedQuery.toLowerCase();
      const matchesSearch = !normalizedQuery ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery) ||
        article.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));
      return matchesCat && matchesSearch;
    });
  }, [debouncedQuery, selectedCategory]);

  return (
    <div>
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas-bg)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Resource Hub
          </Badge>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Engineering Insights That Move Ideas Forward
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.6 }}>
            Explore software engineering insights, architecture principles, implementation strategies, and technical guidance to help you make informed technology decisions and build better systems.
          </p>
        </div>
      </section>

      {/* Resource Catalog */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Search & Category Filter Controls */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 180ms ease-out',
                    border: '1px solid',
                    backgroundColor: selectedCategory === cat ? 'var(--color-primary-maroon)' : 'rgba(250, 250, 247, 0.8)',
                    borderColor: selectedCategory === cat ? 'var(--color-primary-maroon)' : 'var(--color-border-medium)',
                    color: selectedCategory === cat ? '#ffffff' : 'var(--color-text-primary)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: '280px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search articles and whitepapers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.875rem 0.5rem 2.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-medium)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div style={{
              padding: '3rem 1.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed rgba(122, 12, 22, 0.2)',
              backgroundColor: 'rgba(250, 250, 247, 0.5)',
              textAlign: 'center',
              color: 'var(--color-text-secondary)',
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'rgba(122, 12, 22, 0.08)', marginBottom: '1rem' }}>
                <Inbox size={20} style={{ color: 'var(--color-primary-maroon)' }} />
              </div>
              <h3 style={{ margin: '0 0 0.5rem', color: 'var(--color-dark-maroon)' }}>No resources match your search</h3>
              <p style={{ margin: 0 }}>Try a different keyword or switch back to another category.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}>
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  variant="solid"
                  padding="lg"
                  style={{
                    backgroundColor: 'rgba(250, 250, 247, 0.5)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <Badge variant="gold">{article.category}</Badge>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-dark-maroon)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                    <Link to={`/technology-insights/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }} className="article-title-link">
                      {article.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {article.excerpt}
                  </p>

                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-dark-maroon)' }}>
                        {article.author.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {article.author.role} • {article.publishedDate}
                      </div>
                    </div>

                    <Link
                      to={`/technology-insights/${article.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: 'var(--color-primary-maroon)',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Read</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

        </div>
      </section>

      <style>{`
        .article-title-link:hover {
          color: var(--color-primary-maroon) !important;
        }
      `}</style>
    </div>
  );
};
