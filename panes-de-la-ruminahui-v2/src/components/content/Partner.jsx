import React, { useEffect, useState } from "react";
import './Partner.css'
import Title from './Title'
import CircleDinamic from "../loader/CircleDinamic";

const Partner = () => {
    const [partners, setPartners] = useState([]);
    
    useEffect(() => {
        const tableName = "partner";
        fetch(`http://localhost/panes-de-la-ruminahui-v2/public/Administrator/service/get_data.php?table=${tableName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Error:", data.error);
                } else {
                    setPartners(data);
                }
            })
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return (
        <>
            <Title text="Nuestros Partners"/>
            <div class="container-partner">
                {partners.length > 0 ? (
                    partners.map((partner) => (
                        <div className="card-partner">
                            <img src={partner.logo_url}/>
                            <div className="card__content-partner">
                                <p className="card__title-partner">{partner.name}</p>
                                <a className="card__description-partner" href={partner.website}>Sitio Web</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <CircleDinamic/>
                )}
            </div>
        </>
    )
}

export default Partner;