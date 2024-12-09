import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'
import Blogs from "../components/content/Blogs";
import Partner from "../components/content/Partner";

const Blog = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Blog</h1>
                <p>Descubre nuestro Blog.</p>
            </div>
            <Blogs/>
            <Partner/>
            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Blog;