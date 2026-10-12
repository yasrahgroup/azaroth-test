import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Enterprise Corp', color: '#1e293b' },
  { name: 'Tech Solutions', color: '#334155' },
  { name: 'Global Innovations', color: '#475569' },
  { name: 'Digital Dynamics', color: '#64748b' },
  { name: 'Future Systems', color: '#1e293b' },
  { name: 'Smart Ventures', color: '#334155' },
];

export const ClientLogos: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '3rem 0',
      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
    }}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '2rem',
          }}
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            opacity: 0.7,
          }}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: client.color,
                border: '1px solid #e2e8f0',
                transition: 'all 180ms ease-out',
                cursor: 'default',
              }}
            >
              {client.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
