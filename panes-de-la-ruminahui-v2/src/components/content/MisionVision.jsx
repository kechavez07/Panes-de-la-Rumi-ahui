import React from "react";
import './MisionVision.css'

const Card1 = (props) => {
    const { text, title } = props;
    return (
        <>
            <div class="MisionVision">
                <h1>---</h1>
                <h2>Misión</h2>
                <p>En Panes de la Rumiñahui, nos dedicamos a elaborar panes y productos de pastelería con ingredientes frescos y de alta calidad, conservando tradiciones y técnicas artesanales. Nos esforzamos por satisfacer a nuestros clientes ofreciendo sabores auténticos y servicio cálido.</p>
                <h1>---</h1>
                <h2>Visión</h2>
                <p>Ser reconocidos como la panadería líder en la región, destacándonos por nuestra calidad, innovación y respeto por las raíces culturales.</p>
            </div>
        </>
    )
}

export default Card1;