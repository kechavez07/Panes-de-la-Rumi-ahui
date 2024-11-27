import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Contactos</h1>
                <p>¡Nos encantaría saber de ti! Pónte en contacto con nosotros para cualquier consulta, comentario o solicitud especial.</p>
            </div>
            <div class="contact-info">
                <h2>Informacion de Contacto</h2>
                <p><strong>Dirección:</strong> 123 Bakery Lane, Sweet City</p>
                <p><strong>Teléfono:</strong> +1 (123) 456-7890</p>
                <p><strong>Email:</strong> contact@ourbakery.com</p>
                <p><strong>Horario:</strong> Mon-Sat, 7 AM - 7 PM</p>
            </div>
            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Contact;