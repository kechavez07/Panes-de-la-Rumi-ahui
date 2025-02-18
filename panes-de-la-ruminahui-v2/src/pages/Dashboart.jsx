import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './dashboart.css';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    console.log('Dashboard - isSidebarOpen:', isSidebarOpen); // Verifica si el estado se actualiza
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`dashboard ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <h1>Dashboard</h1>
          <p>Welcome to the Dashboard!</p>
          <p>Here you can see all the information about your account.</p>
        </div>
      </div>
    );
  }


