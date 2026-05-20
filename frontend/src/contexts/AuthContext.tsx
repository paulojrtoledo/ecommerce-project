import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as authService from '../services/authService';
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '../services/apiClient';

export interface AuthUser {
  id: number;
  name?: string;
  email?: string;
  role?: string;
  roles?: string[];
  [key: string]: any;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: authService.RegisterPayload) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function readSavedUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readSavedUser());
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_STORAGE_KEY));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      if (user) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser));
      } catch {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem(USER_STORAGE_KEY);
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [token, user]);

  const persistToken = (value: string | null) => {
    if (value) {
      localStorage.setItem(TOKEN_STORAGE_KEY, value);
    } else {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }
    setToken(value);
  };

  const persistUser = (value: AuthUser | null) => {
    if (value) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(value));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
    setUser(value);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { token: authToken, user: authUser } = await authService.login({ email, password });
      persistToken(authToken);
      persistUser(authUser);
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload: authService.RegisterPayload) => {
    setLoading(true);
    try {
      const newUser = await authService.register(payload);
      persistUser(newUser);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    persistToken(null);
    persistUser(null);
  };

  const isAuthenticated = Boolean(token);
  const isAdmin = Boolean(
    user &&
      (user.role === 'ADMIN' ||
        user.role === 'ROLE_ADMIN' ||
        user.roles?.some((role) => role.toUpperCase().includes('ADMIN')))
  );

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      isAdmin,
      loading,
      login,
      register,
      logout,
    }),
    [user, token, isAuthenticated, isAdmin, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
