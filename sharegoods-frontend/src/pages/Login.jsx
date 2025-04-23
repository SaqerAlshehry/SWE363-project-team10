import React from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/home'); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <span className="active-tab">Login</span>
          <span className="inactive-tab" onClick={() => navigate('/signup')}>Sign up</span>
          <button className="close-btn">×</button>
        </div>
        <h2 className="welcome-title">Welcome</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="sxxxxxxxxx@kfupm.edu.sa" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="password" />
          <div className="forgot-password">Forgot Password?</div>
        </div>

        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
