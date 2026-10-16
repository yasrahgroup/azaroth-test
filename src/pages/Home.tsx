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
import { useCMS } from '../context/CMSContext';

export const Home: React.FC = () => {
  const { settings } = useCMS();

  const isModuleEnabled = (slug: string): boolean => {
    if (!settings.modulesConfig) return true;
    const mod = settings.modulesConfig.find((m) => m.slug === slug);
    return mod ? mod.isEnabled : true;
  };

  return (
    <div>
      <SEOHead
        title={settings.metaTitle || "Azaroth Tech-Hive — Enterprise Technology Solutions & Engineering"}
        description={settings.metaDescription || "Azaroth Tech-Hive architects mission-critical digital systems, resilient microservice ecosystems, high-availability software platforms, and dedicated engineering pods for global enterprises."}
        canonicalPath="/"
      />
      {/* 1. Hero banner matching reference */}
      <Hero />

      {/* 2. Comprehensive Digital Solutions (Our Services) */}
      {isModuleEnabled('services') && <FeaturedSolutions />}

      {/* 3. Turning Ideas into Digital Reality (About Azaroth Techhive) */}
      {isModuleEnabled('about') && <AboutSection />}

      {/* 4. Strategic Solutions & Featured Case Studies (Featured Projects) */}
      {isModuleEnabled('portfolio') && <StrategicSolutions />}

      {/* 5. Client Partnerships & Perspectives (Testimonials) */}
      {isModuleEnabled('testimonials') && <Testimonials />}

      {/* Secondary Modular Capabilities (Configurable via Admin CMS) */}
      {isModuleEnabled('products') && <ProductsSection />}
      <IndustryExpertise />
      {isModuleEnabled('delivery-framework') && <ProcessSection />}
      {isModuleEnabled('insights') && <BlogSection />}
      <FAQSection />
      {(isModuleEnabled('connect') || isModuleEnabled('rfq')) && <FinalCTA />}
    </div>
  );
};

export default Home;
