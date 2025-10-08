import React from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;

  const theme = React.useMemo(() => {
    if (disableCustomTheme) {
      return createTheme({ palette: { mode: 'light' } });
    }

    return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#2E7D32', // Verde principal
          light: '#4CAF50', // Verde claro
          dark: '#1B5E20',  // Verde escuro
        },
        info: {
          main: '#FFFFFF',
        },
        background: {
          default: '#F1F8E9', // Verde muito claro para fundo
          paper: '#FFFFFF',   // Branco para cards
        },
        text: {
          primary: '#1B5E20', // Verde escuro para texto
          secondary: '#4CAF50', // Verde para texto secundário
        },

      },
      components: themeComponents || {},
    });
  }, [disableCustomTheme, themeComponents]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}