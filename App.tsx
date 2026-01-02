import React from 'react';
import TopStrip from './components/TopStrip';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Certifications from './components/Certifications';
import ProductSection from './components/ProductSection';
import ProjectsDelivery from './components/ProjectsDelivery';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import { LanguageProvider } from './contexts/LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans transition-all duration-300">
      <TopStrip />
      <Header />
      <main>
        <Hero />
        <Features />
        <ProjectGallery />
        <Certifications />
        <ProductSection />
        <ProjectsDelivery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;