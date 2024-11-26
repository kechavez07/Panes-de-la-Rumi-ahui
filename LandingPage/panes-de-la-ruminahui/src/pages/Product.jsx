import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'

const Product = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Nuestos Productos</h1>
                <p>Deléitese con nuestra amplia variedad de productos, elaborados con los mejores ingredientes.</p>
            </div>

            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Product;