import React, { createContext, useState, useEffect, useContext } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await authAPI.getMe();
          setUser(res.data);
        } catch (err) {
          console.error("Token expired or invalid", err);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      const res = await authAPI.login(email, password);
      localStorage.setItem('token', res.data.access_token);
      const userRes = await authAPI.getMe();
      setUser(userRes.data);
      return true;
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
      return false;
    }
  };

  const register = async (email, password) => {
    setError(null);
    try {
      await authAPI.register(email, password);
      // Auto-login after register
      await login(email, password);
      return true;
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
