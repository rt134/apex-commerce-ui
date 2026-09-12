import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Rocket } from 'lucide-react';

const Welcome = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="center-container">
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            background: 'rgba(102, 252, 241, 0.1)', 
            padding: '1rem', 
            borderRadius: '50%',
            color: 'var(--primary-color)'
          }}>
            <Rocket size={48} />
          </div>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(102,252,241,0.3)' }}>
          Welcome Aboard!
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
          You're successfully logged in as <br/>
          <strong style={{ color: 'var(--text-light)', fontSize: '1.25rem' }}>{user?.email}</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
           <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Organizations</h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: 'bold' }}>0</p>
           </div>
           <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Marketplaces</h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: 'bold' }}>0</p>
           </div>
        </div>
        
        <button onClick={handleLogout} className="btn" style={{ maxWidth: '200px', borderColor: 'var(--error-color)', color: 'var(--error-color)' }}>
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;
