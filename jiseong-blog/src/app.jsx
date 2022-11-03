import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ThinkingInReact from './pages/ThinkingInReact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ThinkingInReact" element={<ThinkingInReact />} />
    </Routes>
  );
}

export default App;