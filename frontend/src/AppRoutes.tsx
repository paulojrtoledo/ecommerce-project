import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ProductsPage from './pages/products-page/ProductsPage';
import CartPage from './pages/cart-page/CartPage';
import FavoritesPage from './pages/favorites-page/FavoritesPage';
import LoginPage from './pages/login-page/LoginPage';
import AdminProductsPage from './pages/admin-products/AdminProductsPage';
import AdminRoute from './components/AdminRoute';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductsPage />} />
                <Route path="/meu-carrinho" element={<CartPage />} />
                <Route path="/favoritos" element={<FavoritesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/admin/products"
                    element={
                        <AdminRoute>
                            <AdminProductsPage />
                        </AdminRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes 