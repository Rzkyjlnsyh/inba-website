import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import LearningPath from './components/LearningPath';
import MentorProfile from './components/MentorProfile';
// Testimonials can be reused or skipped if not critical, adding it for completeness
import Testimonials from './components/Testimonials'; 
import Pricing from './components/Pricing';
import AiMarketAnalyst from './components/AiMarketAnalyst';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-emerald selection:text-white bg-bg-primary overflow-x-hidden transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* USP Section */}
        <ValueProposition />
        
        {/* Curriculum Timeline */}
        <section id="curriculum">
          <LearningPath />
        </section>
        
        {/* Personal Branding */}
        <MentorProfile />
        
        {/* Social Proof */}
        <section id="testimonials">
           <Testimonials />
        </section>
        
        {/* Unique Feature: AI Assistant */}
        <AiMarketAnalyst />
        
        {/* Closing The Deal */}
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
