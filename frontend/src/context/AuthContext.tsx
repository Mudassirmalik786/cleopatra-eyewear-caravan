import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, UserRole } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo purposes
const MOCK_USERS = [
  { id: '1', email: 'admin@cleopatra.com', password: 'admin123', name: 'Admin User', role: 'admin' as UserRole },
  { id: '2', email: 'customer@example.com', password: 'customer123', name: 'Test Customer', role: 'customer' as UserRole }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('cec_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as User;
        setState({ user, isAuthenticated: true, isLoading: false });
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('cec_user');
        setState({ ...state, isLoading: false });
      }
    } else {
      setState({ ...state, isLoading: false });
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    const userData: User = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
    
    localStorage.setItem('cec_user', JSON.stringify(userData));
    setState({
      user: userData,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const logout = () => {
    localStorage.removeItem('cec_user');
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulate registration
    // In a real app, this would call an API
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: 'customer'
    };
    
    localStorage.setItem('cec_user', JSON.stringify(newUser));
    setState({
      user: newUser,
      isAuthenticated: true,
      isLoading: false
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};