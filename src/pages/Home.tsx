import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedSolutions } from '../components/home/FeaturedSolutions';
import { StrategicSolutions } from '../components/home/StrategicSolutions';
import { ProcessSection } from '../components/home/ProcessSection';
import { IndustryExpertise } from '../components/home/IndustryExpertise';
import { BlogSection } from '../components/home/BlogSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';
import { SEOHead } from '../components/common/SEOHead';

export const Home: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Azaroth Tech-Hive — Enterprise Software Engineering"
        description="Azaroth Tech-Hive engineers enterprise software platforms, cloud modernization, AI integration, and dedicated delivery pods that help businesses build, evolve, and scale systems."
        canonicalPath="/"
      />
      <Hero />
      <FeaturedSolutions />
      <StrategicSolutions />
      <ProcessSection />
      <IndustryExpertise />
      <BlogSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};
