import React from "react";
import './Card2.css'

const Card2 = (props) => {
    const { title, text, path } = props;
    return (
        <>
            <div class="card2">
            <div class="card-image-container">
                <img src={path} alt="" />
            </div>
            <p class="card-title">{title}</p>
            <p class="card-des">{text}</p>
            </div>
        </>
    )
}

export default Card2;