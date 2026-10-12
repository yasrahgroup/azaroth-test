import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedSolutions } from '../components/home/FeaturedSolutions';
import { AboutSection } from '../components/home/AboutSection';
import { StrategicSolutions } from '../components/home/StrategicSolutions';
import { Testimonials } from '../components/home/Testimonials';
import { ProcessSection } from '../components/home/ProcessSection';
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
      {/* 1. Hero matching temp.jpeg */}
      <Hero />

      {/* 2. Comprehensive Digital Solutions (Our Services) matching temp.jpeg */}
      <FeaturedSolutions />

      {/* 3. Turning Ideas into Digital Reality (About Azaroth Techhive) matching temp.jpeg */}
      <AboutSection />

      {/* 4. Our Recent Work (Featured Projects) matching temp.jpeg */}
      <StrategicSolutions />

      {/* 5. What Our Clients Say (Client Testimonials) matching temp.jpeg */}
      <Testimonials />

      {/* 6. Enterprise Methodology & FAQ */}
      <ProcessSection />
      <FAQSection />

      {/* 7. Final Conversion CTA */}
      <FinalCTA />
    </div>
  );
};

export default Home;
