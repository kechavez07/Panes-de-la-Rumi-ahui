import React from "react";
import './Card3.css'

const Card3 = (props) => {
    const { title, text, price } = props;
    return (
        <>
            <div className="card3">
                <div className="content3">
                    <div className="title">{title}</div>
                    <div className="price">{price}</div>
                    <div className="description">{text}</div>
                </div>
            </div>
        </>
    )
}

export default Card3;