import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Ensure this imports the provided CSS

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://project-management-2tfk.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  const goToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="main-content">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h2>Login</h2>
              <p>Welcome back, please login to your account</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn login-btn">Log In</button>
            </form>
            <div className="login-footer">
              <p>Don't have an account? <a href="#" onClick={goToRegisterPage}>Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
