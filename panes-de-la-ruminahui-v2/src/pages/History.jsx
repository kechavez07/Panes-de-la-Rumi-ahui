import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'
import Card4 from '../components/card/Card4'
import Review from "../components/content/Review";

const Home = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Historia</h1>
                <p>Descubre la historia detrás de nuestra panadería.</p>
            </div>
            <div className="container-products">
                <Card4 title="Legado" text="Nuestro Legado"/>
                <Card4 title="Inicios" text="Nuestros Inicios"/>
                <Card4 title="Vision" text="Nuestra Vision"/>
            </div>
            <Review/>
            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Home;