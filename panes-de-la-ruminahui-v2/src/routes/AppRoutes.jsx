import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import History from '../pages/History';
import Product from '../pages/Product';
import Promotion from '../pages/Promotion';
import Contact from '../pages/Contact';
import Blog from "../pages/Blog";
import LoginPage from "../pages/Login";
import Dashboard from "../pages/Dashboart";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage></LoginPage>} />
            <Route path="/dashboart" element={<Dashboard/>} />
        </Routes>
    );
};

export default AppRoutes;
