import React from 'react';
import './sidebar.css'; // Aquí van estilos específicos del sidebar

const Sidebar = ({ isVisible }) => {
  return (
    <aside className={`sidebar ${isVisible ? 'show' : ''}`}>
      {/* Sección del usuario (opcional) */}
      <div className="user-section">
        <img
          src="/images/usuario.png" /* Ajusta la ruta a tu carpeta */
          alt="User"
          className="user-image"
        />
        <div className="user-info">
          <p className="user-name">Nombre del Usuario</p>
          <span className="user-email">usuario@example.com</span>
        </div>
      </div>

      <div className="sidebar-header">
        <span className="sidebar-title">Main items</span>
      </div>
      <ul>
        <li className="active">Dashboard</li>
      </ul>

      <div className="sidebar-header">
        <span className="sidebar-title">Analytics</span>
      </div>
      <ul>
        <li>Reports</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
