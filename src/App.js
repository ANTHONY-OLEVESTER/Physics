import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Class11 from './components/Class11';
import Class12 from './components/Class12';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/class11">Class 11</Link></li>
          <li><Link to="/class12">Class 12</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/class11" element={<Class11 />} />
        <Route path="/class12" element={<Class12 />} />
        <Route path="/" element={<div>Welcome to the study portal</div>} />
      </Routes>
    </Router>
  );
}

export default App;
