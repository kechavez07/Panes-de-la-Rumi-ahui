import React from "react";
import './Card3.css'

const Card3 = (props) => {
    const { title, text, price } = props;
    return (
        <>
            <div class="card3">
                <div class="content3">
                    <div class="title">{title}</div>
                    <div class="price">{price}</div>
                    <div class="description">{text}</div>
                </div>
            </div>
        </>
    )
}

export default Card3;