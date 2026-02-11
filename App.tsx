import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wawasan from './pages/Wawasan';
import MindsetSahamVsJudi from './pages/articles/MindsetSahamVsJudi';
import JebakanInvestorDadakan from './pages/articles/JebakanInvestorDadakan';
import BahayaSahamGorengan from './pages/articles/BahayaSahamGorengan';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wawasan" element={<Wawasan />} />
        <Route path="/wawasan/mindset-saham-judi" element={<MindsetSahamVsJudi />} />
        <Route path="/wawasan/jebakan-investor-dadakan" element={<JebakanInvestorDadakan />} />
        <Route path="/wawasan/bahaya-saham-gorengan" element={<BahayaSahamGorengan />} />
      </Routes>
    </Router>
  );
};

export default App;
