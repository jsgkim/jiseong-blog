import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ThinkingInReact from './pages/ThinkingInReact';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ThinkingInReact" element={<ThinkingInReact />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;