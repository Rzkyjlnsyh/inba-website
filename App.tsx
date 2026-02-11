import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wawasan from './pages/Wawasan';
import ArticleDetail from './pages/ArticleDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wawasan" element={<Wawasan />} />
        <Route path="/wawasan/:slug" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
