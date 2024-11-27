import React from "react";
import Header from '../components/header/Header'
import './style.css'
import WhatsApp from '../components/button/WhatsApp/index'
import Card2 from '../components/card/Card2'
import Title from '../components/content/Title'

const Product = () => {
    return (
        <>
            <Header/>
            <div className="primary-container">
                <h1>Nuestos Productos</h1>
                <p>Deléitese con nuestra amplia variedad de productos, elaborados con los mejores ingredientes.</p>
            </div>
            <Title text="Postres"/>
            <div className="container-products">
                <Card2 title="Postre 1" text="Postre 1" path="/images/chocolate-cake.jpg"/>
                <Card2 title="Postre 2" text="Postre 2" path="/images/chocolate-cake.jpg"/>
                <Card2 title="Postre 3" text="Postre 3" path="/images/chocolate-cake.jpg"/>
            </div>
            <Title text="Panes"/>
            <div className="container-products">
                <Card2 title="Pan 1" text="Pan 1" path="/images/croissant.jpg"/>
                <Card2 title="Pan 2" text="Pan 2" path="/images/croissant.jpg"/>
                <Card2 title="Pan 3" text="Pan 3" path="/images/croissant.jpg"/>
            </div>
            <div className="button-whatsapp">
                <WhatsApp/>
            </div>
        </>
    )
}

export default Product;