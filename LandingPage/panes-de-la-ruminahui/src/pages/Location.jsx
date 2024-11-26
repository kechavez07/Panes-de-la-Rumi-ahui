import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'

const Location = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Ubicación</h1>
                <p>¡Nos encantaría saber de ti! Pónte en contacto con nosotros para cualquier consulta, comentario o solicitud especial.</p>
            </div>

            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Location;