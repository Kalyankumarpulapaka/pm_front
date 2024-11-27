// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="ai-dashboard">
      {/* Navbar Section */}
      <header className="ai-dashboard__navbar">
        <div className="ai-dashboard__brand">Ai Interviewer</div>

        <p onClick={handleLogout} className="ai-dashboard__logout">
          Logout
        </p>
      </header>

   
    </div>
  );
}

export default Dashboard;
