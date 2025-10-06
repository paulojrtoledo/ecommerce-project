import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ProductsPage from './pages/products-page/ProductsPage';
import CartPage from './pages/cart-page/CartPage';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductsPage />} />
                <Route path="/meu-carrinho" element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes 