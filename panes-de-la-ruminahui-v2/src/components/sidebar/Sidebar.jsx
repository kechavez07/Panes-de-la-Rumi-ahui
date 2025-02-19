import React from 'react';
import './sidebar.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`sidebar ${isVisible ? 'show' : ''}`}>
      {/* Sección del usuario */}
      <div className="user-section">
        <img 
          src="public\images\usuario.png" // URL de la imagen del usuario
          alt="User" 
          className="user-image"
        />
        <div className="user-info">
          <span className="user-name">Nombre del Usuario</span>
          <span className="user-email">usuario@example.com</span>
        </div>
      </div>

      {/* Lista de opciones del sidebar */}
      <ul className="sidebar-list">
        <li>FinSet</li>
        <li>Destboard</li>
        <li>Transactions</li>
        <li>Settings</li>
        <li>Help</li>
        <li>Log out</li>
      </ul>
    </div>
  );
};

export default Sidebar;