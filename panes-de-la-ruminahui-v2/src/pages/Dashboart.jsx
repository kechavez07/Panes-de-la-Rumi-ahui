import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './dashboart.css'; // Hoja de estilos principal
import { Link } from "react-router-dom";
import { FaCog } from 'react-icons/fa';
import Card2 from "../components/card/CardMenu";
import CircleDinamic from "../components/loader/CircleDinamic";



export default function Dashboard() {
  // Estado para controlar la visibilidad del sidebar SOLO en móvil
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  var products = [
  {
    name: "Agrear nuemo producto",
    description: "Agrega un nuevo producto",
    path: "/images/agregarPro.jpg"
  },
  {
    name: "Gregar promoción",
    description: "Agrega una nueva promoción",
    path: "/images/promo.jpg"
  },
  {
    name: "funcion nueva",
    description: "descripcion de la funcion nueva",
    path: ""
  }
];

  return (
    <div className="app-container">
      <Sidebar isVisible={isSidebarVisible} />

      <main className="content">
        {/* Barra superior */}
        <div className="top-bar">
          <div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
          <div className="logo">
            <img
            src="/images\logo.jpeg"
            alt="Toolpad"
            style={{ width: '7rem', height: '7rem' }}
            />
          </div>
          <div>
          <h1>Panes de la Rumiñahui</h1>
          </div>

          <div className="settings-icon">
          <FaCog style={{ fontSize: '24px' }} />
          </div>
        </div>

        <div className="main-content">
          <h2>Dashboard content for /dashboard</h2>
          <div className="container-products">
              {products.length > 0 ? (
                products.map((product) => (
                  <Card2
                    title={product.name}
                    text={product.description}
                    path={product.path}
                  />
                ))
            ) : (
                <CircleDinamic/>
              )}
            </div>
        </div>
      </main>
    </div>
  );
}
