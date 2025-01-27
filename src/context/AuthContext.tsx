import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface User {
  name: string;
  lastLogin: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      // استعادة بيانات المستخدم من التوكن أو طلب من API
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/GraduationProject/login', {
        email,
        password,
      });

      const receivedToken = response.data.token;
      const userInfo = response.data.user; // معلومات المستخدم من API

      setToken(receivedToken);
      setUser(userInfo);

      localStorage.setItem('token', receivedToken);
      localStorage.setItem('user', JSON.stringify(userInfo));

      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('فشل تسجيل الدخول. تأكد من البيانات وحاول مرة أخرى.');
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
