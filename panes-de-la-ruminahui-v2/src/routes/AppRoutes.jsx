import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import History from '../pages/History';
import Product from '../pages/Product';
import Promotion from '../pages/Promotion';
import Contact from '../pages/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/product" element={<Product />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;
