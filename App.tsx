import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PerformanceChart from "./components/PerformanceChart";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import AiMarketAnalyst from "./components/AiMarketAnalyst";

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* AI Tutor Section */}
        <AiMarketAnalyst />
        <PerformanceChart />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
