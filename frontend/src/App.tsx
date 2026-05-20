import React from 'react';
import AppRoutes from "./AppRoutes";
import { FavoritesProvider } from './contexts/FavoritesContext';
import { CustomThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <CustomThemeProvider>
            <AuthProvider>
                <FavoritesProvider>
                    <CartProvider>
                        <AppRoutes />
                    </CartProvider>
                </FavoritesProvider>
            </AuthProvider>
        </CustomThemeProvider>
    );
}

export default App;