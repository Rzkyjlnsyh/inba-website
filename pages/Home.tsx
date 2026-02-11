import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StockTicker from '../components/StockTicker';
import ValueProposition from '../components/ValueProposition';
import Features from '../components/Features';
import LearningPath from '../components/LearningPath';
import LatestInsights from '../components/LatestInsights';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <StockTicker />
        <ValueProposition />
        <Features />
        <LearningPath />
        <LatestInsights />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Home;
