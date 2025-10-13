import React from 'react';
import AppRoutes from "./AppRoutes";
import { FavoritesProvider } from './contexts/FavoritesContext';

function App() {
    return (
        <FavoritesProvider>
        <AppRoutes/>
        </FavoritesProvider>
    );
}

export default App