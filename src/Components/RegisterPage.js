import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://project-management-2tfk.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Registration failed: ' + err.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/'); // Navigates to the login page
  };

  return (
    <>
      <div className="register-page-container">
        <div className="register-form-container">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="register-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="register-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="register-input"
            />
            <button type="submit" className="register-button">Register</button>
          </form>
          <button type="button" onClick={handleLoginRedirect} className="login-button">
            Already have an account? Login
          </button>
        </div>
      </div>

      {/* Internal CSS */}
      <style jsx="true">{`
        /* General reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Body styling */
        body {
          font-family: 'Arial', sans-serif;
        background: linear-gradient(135deg, #6c63ff, #36cfc9) ;

        }

        /* Register page container */
        .register-page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }

        /* Register form container */
        .register-form-container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          display: flex;
          flex-direction: column;
        }

        /* Register title */
        .register-title {
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        /* Form styling */
        .register-form {
          display: flex;
          flex-direction: column;
        }

        /* Input field styling */
        .register-input {
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .register-input:focus {
          border-color: #5a67d8;
        }

        /* Submit button styling */
        .register-button {
          padding: 12px;
          background-color: #5a67d8;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .register-button:hover {
          background-color: #434190;
        }

        /* Login button styling */
        .login-button {
          margin-top: 15px;
          padding: 12px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-button:hover {
          background-color: #45a049;
        }

        /* Responsive styles */
        @media (max-width: 480px) {
          .register-form-container {
            padding: 20px;
          }

          .register-title {
            font-size: 1.6rem;
          }

          .register-input {
            font-size: 0.9rem;
          }

          .register-button {
            font-size: 1rem;
          }

          .login-button {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default RegisterPage;
