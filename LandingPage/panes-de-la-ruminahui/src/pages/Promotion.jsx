import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'
import Card3 from '../components/card/Card3'

const Promotion = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Promociones</h1>
                <p>¡No te pierdas nuestras ofertas!</p>
            </div>
            <div className="container-products">
                <Card3 title="Promoción 1" price="2$" text="Promoción 1"/>
                <Card3 title="Promoción 2" price="2$" text="Promoción 2"/>
                <Card3 title="Promoción 3" price="2$" text="Promoción 3"/>
            </div>
            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Promotion;