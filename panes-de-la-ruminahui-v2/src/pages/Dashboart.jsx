import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './dashboart.css';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    console.log('Dashboard - isSidebarOpen:', isSidebarOpen); // Verifica si el estado se actualiza
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div>
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`dashboard ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <button onClick={toggleSidebar} className="sidebar-toggle">
            {isSidebarOpen ? 'Cerrar' : 'Abrir'} Sidebar
          </button>
          <h1>Dashboard</h1>
          <p>Welcome to the Dashboard!</p>
          <p>Here you can see all the information about your account.</p>
        </div>
      </div>
    );
  }


