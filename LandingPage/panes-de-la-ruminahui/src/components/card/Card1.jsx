import React from "react";
import './Card1.css'

const Card1 = (props) => {
    const { text, path } = props;
    return (
        <>
            <div class="card wallet">
                <div class="overlay"></div>
                <div class="circle">
                    <img src={path} alt="Icon" />
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Card1;