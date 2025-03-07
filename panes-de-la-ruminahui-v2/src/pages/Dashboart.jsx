import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './dashboart.css'; // Hoja de estilos principal
import { Link } from "react-router-dom";
import { FaCog } from 'react-icons/fa';
import Card2 from "../components/card/CardMenu";
import CircleDinamic from "../components/loader/CircleDinamic";
import TableProduct from '../components/tables/TableProduct'

export default function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  
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
            <div>
              <TableProduct/>
            </div>
        </div>
      </main>
    </div>
  );
}
