import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="center-container">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  
  return children;
};

// Top Navigation Bar
const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1.5rem 2rem', 
      display: 'flex', 
      alignItems: 'center',
      borderBottom: '1px solid var(--border-color)',
      background: 'rgba(11, 12, 16, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: '32px', height: '32px', background: 'var(--primary-color)', borderRadius: '8px' }}></div>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-light)', letterSpacing: '1px' }}>
          APEX COMMERCE
        </span>
      </div>
    </nav>
  );
};

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/welcome" 
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
