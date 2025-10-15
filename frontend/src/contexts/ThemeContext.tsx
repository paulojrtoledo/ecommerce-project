import React, { createContext, useContext, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../pages/shared-theme/AppTheme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  toggleColorMode: () => void;
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    return savedMode || 'light';
  });

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', newMode);
      console.log('🌙 Tema salvo no localStorage:', newMode);
      return newMode;
    });
  };

  const value = useMemo(() => ({ toggleColorMode, mode }), [mode]);

  console.log('🚀 CustomThemeProvider renderizado - Mode:', mode);

  return (
    <ThemeContext.Provider value={value}>
      <AppTheme mode={mode}>
        <CssBaseline />
        {children}
      </AppTheme>
    </ThemeContext.Provider>
  );
};