import React from 'react';
import './sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {isOpen ? 'Cerrar' : 'Abrir'} Sidebar
      </button>
      <ul>
        <li>Inicio</li>
        <li>Acerca de</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;