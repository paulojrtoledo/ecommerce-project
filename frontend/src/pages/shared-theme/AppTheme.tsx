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
      return createTheme({ palette: { mode: 'light' } }); // default theme
    }

    return createTheme({
      palette: {
        mode: 'light', // ou 'dark' se quiser
      },
      components: themeComponents || {}, // garante que não seja undefined
    });
  }, [disableCustomTheme, themeComponents]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
