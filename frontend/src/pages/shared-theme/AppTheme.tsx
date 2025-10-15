import React from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
  mode?: 'light' | 'dark';
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents, mode = 'light' } = props;
   console.log('🎨 AppTheme recebendo mode:', mode);

  const theme = React.useMemo(() => {
    console.log('🔄 AppTheme criando tema com mode:', mode);
    if (disableCustomTheme) {
      return createTheme({ palette: { mode } });
    }

    if (mode === 'dark') {
      return createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#2E7D32',    
            light: '#0a0908',   
            dark: '#2E7D32',    
          },
          secondary: {
            main: '#4CAF50',    
            light: '#81C784',
            dark: '#1B5E20',
          },
          background: {
            default: '#000000', 
            paper: '#2a4a2a',   
          },
          text: {
            primary: '#E8F5E8',  
            secondary: '#A8C8A8', 
          },
          success: {
            main: '#4CAF50',     
          },
          info: {
            main: '#E8F5E8',     
          },
          warning: {
            main: '#FFB74D',     
          },
          error: {
            main: '#F44336',     
          },
        },

        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                background: 'radial-gradient(ellipse 50% 40% at 50% -15%, #98c9a3, #0a0908)',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
              },
            },
          },
          MuiAvatar: {
            styleOverrides: {
              root: {
                backgroundColor: '#98c9a3', 
                color: '#0a0908', 
              },
            },
          },
          ...themeComponents,
        },
      });
    }


    return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#0a0908',      
          light: '#2a2a2a',   
          dark: '#000000',     
        },
        secondary: {
          main: '#2E7D32',     
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        background: {
          default: '#98c9a3',  
          paper: '#E8F5E9',   
        },
        text: {
          primary: '#0a0908',  
          secondary: '#0a0908', 
        },
        success: {
          main: '#2E7D32',   
        },
        info: {
          main: '#0a0908',    
        },
        warning: {
          main: '#FF8F00',     
        },
        error: {
          main: '#D32F2F',     
        },
      },

      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              background: 'radial-gradient(ellipse 90% 80% at 50% -20%, #0a0908, #98c9a3)',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
            },
          },
        },
        MuiAvatar: {
          styleOverrides: {
            root: {
              backgroundColor: '#0a0908', 
              color: '#98c9a3', 
            },
          },
        },
        ...themeComponents,
      },
    });
  }, [disableCustomTheme, themeComponents, mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}