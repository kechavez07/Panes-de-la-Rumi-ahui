import React from "react";
import Wallpaper from '../components/wallpaper/Wallpaper'
import { Link } from "react-router-dom";
import Card1 from '../components/card/Card1'
import MisionVision from '../components/content/MisionVision'
import './style.css'

const Home = () => {
    return (
        <>
            <div className="wallpaper">
                <Wallpaper/>
            </div>
            <MisionVision/>
            <div className="container-cards">
                <Link to="/history" className="header-item"><Card1 text="Historia" path="/icons/shop.svg"/></Link>
                <Link to="/product" className="header-item"><Card1 text="Productos" path="/icons/shopping-car.svg"/></Link>
                <Link to="/promotion" className="header-item"><Card1 text="Promociones" path="/icons/star.svg"/></Link>
                <Link to="/contact" className="header-item"><Card1 text="Contactos" path="/icons/comment.svg"/></Link>
            </div>
        </>
    )
}

export default Home;