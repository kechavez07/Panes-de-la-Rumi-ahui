import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'

const Promotion = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Promociones</h1>
                <p>¡No te pierdas nuestras ofertas!</p>
            </div>

            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Promotion;