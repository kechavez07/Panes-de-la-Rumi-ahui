import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    const goToAdmin = () => {
        const path = 'http://localhost/panes-de-la-ruminahui-v2/public/Administrator/index.php'
        window.open(path, '_blank')
    }

    return (
        <div className="header">
            <div className="header-logo">
            <h2>Panes de la Rumiñahui</h2>
            </div>
            <div className="header-items">
                <Link to="/" className="header-item">Inicio</Link>
                <Link to="/history" className="header-item">Historia</Link>
                <Link to="/blog" className="header-item">Blog</Link>
                <Link to="/product" className="header-item">Productos</Link>
                <Link to="/promotion" className="header-item">Promociones</Link>
                <Link to="/contact" className="header-item">Contactos</Link>
                <button onClick={goToAdmin} className="header-item-button">Login</button>
            </div>
        </div>
    )
}

export default Header;