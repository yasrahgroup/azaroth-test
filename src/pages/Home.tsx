import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { FeaturedSolutions } from '../components/home/FeaturedSolutions';
import { StrategicSolutions } from '../components/home/StrategicSolutions';
import { IndustryExpertise } from '../components/home/IndustryExpertise';
import { Testimonials } from '../components/home/Testimonials';
import { BlogSection } from '../components/home/BlogSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedSolutions />
      <StrategicSolutions />
      <IndustryExpertise />
      <Testimonials />
      <BlogSection />
      <FinalCTA />
    </div>
  );
};
