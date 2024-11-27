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

            <div class="map">
                <p>Te esperamos!</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153159!3d-37.81627937975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57791d0c0b2a5c0!2sBakery!5e0!3m2!1sen!2sus!4v1614147106248!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa"
                ></iframe>
            </div>

            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Location;