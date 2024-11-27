import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      
      </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
