import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { BackToTop } from '../components/common/BackToTop';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { CustomCursor } from '../components/common/CustomCursor';
import { Chatbot } from '../components/common/Chatbot';

export const PublicLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CustomCursor />
      <Header />
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};
