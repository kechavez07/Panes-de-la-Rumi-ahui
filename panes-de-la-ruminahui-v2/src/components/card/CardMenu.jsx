import React from "react";
import './Card2.css'
import ImageDinamic from "../loader/ImageDinamic";

const CardMenu = (props) => {
    const { title, text, path } = props;
    return (
        <>
            <div className="card2">
                <div className="card-image-container">
                    {path !== '' ?<img src={path} alt="" />:<ImageDinamic/>}
                </div>
                <p className="card-title">{title}</p>
                <p className="card-des">{text}</p>
            </div>

        </>
    )
}

export default CardMenu;