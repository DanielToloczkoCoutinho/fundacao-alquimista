
import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  token: string | null;
  operator: string | null;
  roles: string[];
  login: (op: string, pass: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const decoded: any = jwtDecode(storedToken);
        setToken(storedToken);
        setOperator(decoded.operator);
        setRoles(decoded.roles);
      } catch (e) {
        logout();
      }
    }
  }, []);

  const login = async (op: string, pass: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operator: op, password: pass }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('authToken', data.token);
        setToken(data.token);
        setOperator(data.operator);
        setRoles(data.roles);
        setError(null);
      } else {
        throw new Error(data.error || 'Falha na autenticação');
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setOperator(null);
    setRoles([]);
  };

  const value = { token, operator, roles, login, logout, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
