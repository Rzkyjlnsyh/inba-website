import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import LearningPath from './components/LearningPath';
import MentorProfile from './components/MentorProfile';
// Testimonials can be reused or skipped if not critical, adding it for completeness
import Testimonials from './components/Testimonials'; 
import Pricing from './components/Pricing';
// Lazy load AI component - heavy Gemini SDK should not block initial load
const AiMarketAnalyst = React.lazy(() => import('./components/AiMarketAnalyst'));
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-emerald selection:text-white bg-bg-primary overflow-x-hidden transition-colors duration-300 font-sans">
      {/* Skip to Content Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-6 focus:py-3 focus:bg-brand-emerald focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-emerald/50 font-bold transition-all"
      >
        Skip to main content
      </a>
      
      <Navbar />
      <main id="main-content" role="main" aria-label="Main content">
        <Hero />
        {/* USP Section */}
        <ValueProposition />
        
        {/* Curriculum Timeline */}
        <section id="curriculum" aria-labelledby="curriculum-heading">
          <LearningPath />
        </section>
        
        {/* Personal Branding */}
        <MentorProfile />
        
        {/* Social Proof */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
           <Testimonials />
        </section>
        
        {/* Unique Feature: AI Assistant - Lazy Loaded */}
        <Suspense fallback={
          <section className="py-24 bg-bg-primary transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="animate-pulse">
                <div className="h-8 bg-bg-secondary rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-64 bg-bg-secondary rounded-2xl"></div>
              </div>
            </div>
          </section>
        }>
          <AiMarketAnalyst />
        </Suspense>
        
        {/* Closing The Deal */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
