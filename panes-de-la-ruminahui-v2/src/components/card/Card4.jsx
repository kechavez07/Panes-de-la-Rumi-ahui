import React from "react";
import './Card4.css'

const Card4 = (props) => {
    const { title, text } = props;
    return (
        <>
            <div class="card4">
                <a class="card41" href="#">
                    <p>{title}</p>
                    <p class="small">{text}</p>
                    <div class="go-corner" href="#">
                    <div class="go-arrow"></div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Card4;