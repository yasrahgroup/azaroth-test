import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What should I look for when hiring a software development company?',
    answer: 'Look for a company that asks about your business before talking technology, communicates clearly without jargon, gives transparent pricing, and has a track record of delivering on time. That is exactly how we work at Azaroth.',
  },
  {
    question: 'How much does custom software development cost?',
    answer: 'It depends on scope and complexity. A business website sits at a very different price point from a custom app or AI integration. We provide a clear, itemised quote after our first conversation — no hidden costs.',
  },
  {
    question: 'How long does it take to build a website or app?',
    answer: 'A business website typically takes 2–4 weeks. A mobile or web app takes 8–12 weeks. AI and automation projects vary by complexity. We give you a realistic timeline before we start — and stick to it.',
  },
  {
    question: 'How can AI help my business practically?',
    answer: 'AI can automate repetitive tasks, handle customer enquiries around the clock, analyse your data for better decisions, and reduce operational costs. We help you identify where AI makes a genuine difference — then implement it without the overwhelm.',
  },
  {
    question: 'Do I need to be technical to work with a software company?',
    answer: 'Not at all. We work with non-technical business owners every day. We explain everything in plain language and handle all the complexity on our end.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            FAQ
          </Badge>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#1e293b',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: '#64748b',
            lineHeight: 1.7,
          }}>
            Still have questions? Can't find the answer you're looking for? Please chat to our friendly team!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 3rem',
        }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              style={{
                marginBottom: '1rem',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: openIndex === index ? '#f8fafc' : '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }
                }}
              >
                <span style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  textAlign: 'left',
                  flex: 1,
                }}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} color="#2563eb" />
                ) : (
                  <ChevronDown size={20} color="#64748b" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{
                      padding: '1.25rem 1.5rem',
                      borderTop: '1px solid #e5e7eb',
                      backgroundColor: '#f8fafc',
                    }}>
                      <p style={{
                        fontSize: '0.9375rem',
                        color: '#64748b',
                        lineHeight: 1.7,
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <Button to="/connect-with-us" variant="gold" size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
