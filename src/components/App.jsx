import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ScanDetail from './ScanDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan/:id" element={<ScanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
