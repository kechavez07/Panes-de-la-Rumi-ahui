import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './dashboart.css';
import Card1 from '../components/card/Card1';
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Cambia el estado al hacer clic
  };

  return (
    <>
      <nav>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>Gestión de panadería</h1>
      </nav>
      <div className="dashboard-container">
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="dashboard">
          <div className="container-cards">
            <Link to="/history" className="header-item"><Card1 text="Historia" path="/icons/shop.svg"/></Link>
            <Link to="/product" className="header-item"><Card1 text="Productos" path="/icons/shopping-car.svg"/></Link>
            <Link to="/promotion" className="header-item"><Card1 text="Promociones" path="/icons/star.svg"/></Link>
          </div>
        </div>
      </div>
    </>
  );
}


