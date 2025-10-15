import React from 'react';
import AppRoutes from "./AppRoutes";
import { FavoritesProvider } from './contexts/FavoritesContext';
import { CustomThemeProvider } from './contexts/ThemeContext';

function App() {
    return (
        <CustomThemeProvider>
            <FavoritesProvider>
                <AppRoutes/>
            </FavoritesProvider>
        </CustomThemeProvider>
    );
}

export default App;