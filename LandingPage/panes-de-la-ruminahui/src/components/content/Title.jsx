import React from "react";
import './styleContents.css'

const Title = (props) => {
    const { text } = props;
    return (
        <>
            <div className="container-title">
                <h1>{text}</h1>
            </div>
        </>
    )
}

export default Title;