import React, { useEffect, useState } from "react";
import Header from '../components/header/Header';
import './style.css';
import WhatsApp from '../components/button/WhatsApp/index';
import Card3 from '../components/card/Card3';
import CircleDinamic from "../components/loader/CircleDinamic";

const Promotion = () => {
    const [promotion, setPromotion] = useState([]);

    useEffect(() => {
        const tableName = "promotion";
        fetch(`http://localhost/panes-de-la-ruminahui-v2/public/Administrator/service/get_data.php?table=${tableName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Error:", data.error);
                } else {
                    setPromotion(data);
                }
            })
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return (
        <>
            <Header />
            <div className="primary-container">
                <h1>Promociones</h1>
                <p>¡No te pierdas nuestras ofertas!</p>
            </div>
            <div className="container-products">
                {promotion.length > 0 ? (
                    promotion.map((item) => (
                        <Card3 
                            key={item.id_promotion} 
                            title={item.name} 
                            price={`${item.discount}%`} 
                            text={item.description} 
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

export default Promotion;