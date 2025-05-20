import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import Blogpage from './pages/Blog';

const App = () => {
  return (
      <Routes>
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
  );
};

export default App