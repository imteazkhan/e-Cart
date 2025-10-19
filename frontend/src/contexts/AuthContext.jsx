import { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = apiService.getToken();
      if (token) {
        const response = await apiService.getUser();
        if (response.success) {
          setUser(response.data.user);
          setIsAuthenticated(true);
        } else {
          apiService.removeToken();
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      apiService.removeToken();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await apiService.login(credentials);
      if (response.success) {
        apiService.setToken(response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
        return { 
          success: true, 
          message: response.message, 
          user: response.data.user 
        };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const register = async (userData) => {
    try {
      console.log('Attempting to register user:', userData);
      const response = await apiService.register(userData);
      console.log('Registration response:', response);
      
      if (response.success) {
        apiService.setToken(response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
        return { success: true, message: response.message };
      }
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      apiService.removeToken();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  // Helper functions for role checking
  const isAdmin = () => {
    return user && user.role && user.role.name === 'admin';
  };

  const isUser = () => {
    return user && user.role && user.role.name === 'user';
  };

  const hasRole = (roleName) => {
    return user && user.role && user.role.name === roleName;
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    isAdmin,
    isUser,
    hasRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};