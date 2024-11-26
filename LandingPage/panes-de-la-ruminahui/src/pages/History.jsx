import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'

const Home = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Historia</h1>
                <p>Descubre la historia detrás de nuestra panadería.</p>
            </div>

            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Home;