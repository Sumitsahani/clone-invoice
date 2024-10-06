// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingMain from './LandingPage/LandingMain';
import InvoiceMain from './InvoiceMain';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingMain />} /> {/* Landing Page */}
      <Route path="/invoice" element={<InvoiceMain />} /> {/* Invoice Page */}
    </Routes>
  );
};

export default App;
