import React from 'react';
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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