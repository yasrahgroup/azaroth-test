import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';

// Page Views
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Values } from './pages/Values';
import { DeliveryFramework } from './pages/DeliveryFramework';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/InsightDetail';
import { Connect } from './pages/Connect';
import { RequestQuote } from './pages/RequestQuote';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<PublicLayout />}>
          {/* Canonical Homepage */}
          <Route path="/" element={<Home />} />

          {/* Company & Values */}
          <Route path="/about" element={<About />} />
          <Route path="/values" element={<Values />} />

          {/* Methodology & Delivery */}
          <Route path="/delivery-framework" element={<DeliveryFramework />} />

          {/* Software Platforms & Catalogs */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />

          {/* Enterprise Services & SLAs */}
          <Route path="/services" element={<Services />} />

          {/* Portfolio & Case Studies */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<Portfolio />} />
          <Route path="/projects" element={<Navigate to="/portfolio" replace />} />

          {/* Resource Hub & Technology Insights */}
          <Route path="/technology-insights" element={<Insights />} />
          <Route path="/technology-insights/:slug" element={<InsightDetail />} />

          {/* Direct Communication & Conversion Portals */}
          <Route path="/connect-with-us" element={<Connect />} />
          <Route path="/contact" element={<Navigate to="/connect-with-us" replace />} />

          <Route path="/request-for-quote" element={<RequestQuote />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
