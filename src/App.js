// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Add other routes for reports, settings here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
