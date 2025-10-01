import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes