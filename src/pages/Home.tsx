import React from 'react';
import { Hero } from '../components/home/Hero';
import { ProductsSection } from '../components/home/ProductsSection';
import { FeaturedSolutions } from '../components/home/FeaturedSolutions';
import { AboutSection } from '../components/home/AboutSection';
import { IndustryExpertise } from '../components/home/IndustryExpertise';
import { StrategicSolutions } from '../components/home/StrategicSolutions';
import { Testimonials } from '../components/home/Testimonials';
import { ProcessSection } from '../components/home/ProcessSection';
import { BlogSection } from '../components/home/BlogSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';
import { SEOHead } from '../components/common/SEOHead';

export const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Azaroth Tech-Hive — Enterprise Technology Solutions & Engineering"
        description="Azaroth Tech-Hive architects mission-critical digital systems, resilient microservice ecosystems, high-availability software platforms, and dedicated engineering pods for global enterprises."
        canonicalPath="/"
      />
      {/* 1. Hero banner with approved headline & CTAs */}
      <Hero />

      {/* 2. Enterprise Software Solutions (Products in one row / responsive reflow) */}
      <ProductsSection />

      {/* 3. Comprehensive Digital Solutions (Our Services) */}
      <FeaturedSolutions />

      {/* 4. Turning Ideas into Digital Reality (Company introduction & engineering capabilities) */}
      <AboutSection />

      {/* 5. Industrial Expertise across sectors */}
      <IndustryExpertise />

      {/* 6. Strategic Solutions & Featured Case Studies */}
      <StrategicSolutions />

      {/* 7. Client Partnerships & Perspectives */}
      <Testimonials />

      {/* 8. Delivery Framework / How We Work Overview */}
      <ProcessSection />

      {/* 9. Resource Hub / Engineering Publications Highlights */}
      <BlogSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Final Conversion CTA */}
      <FinalCTA />
    </div>
  );
};

export default Home;
