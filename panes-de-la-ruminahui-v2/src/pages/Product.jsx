import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import "./style.css";
import WhatsApp from "../components/button/WhatsApp/index";
import Card2 from "../components/card/Card2";
import CircleDinamic from "../components/loader/CircleDinamic";

const Product = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const tableName = "product";
        fetch(`http://localhost/panes-de-la-ruminahui-v2/public/Administrator/service/get_data.php?table=${tableName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Error:", data.error);
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);
    
    return (
        <>
            <Header />
            <div className="primary-container">
                <h1>Nuestros Productos</h1>
                <p>Deléitese con nuestra amplia variedad de productos, elaborados con los mejores ingredientes.</p>
            </div>
            <div className="container-products">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Card2
                            title={product.name}
                            text={product.description}
                        />
                    ))
                ) : (
                    <CircleDinamic/>
                )}
            </div>
            <div className="button-whatsapp">
                <WhatsApp />
            </div>
        </>
    );
};

export default Product;