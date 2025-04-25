import React from 'react';
import '../styles/SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <span className="inactive-tab" onClick={() => navigate('/login')}>Login</span>
          <span className="active-tab">Sign up</span>
          <button className="close-btn">×</button>
        </div>

        <h2 className="welcome-title">Create Account</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="sxxxxxxxxx@kfupm.edu.sa" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <button className="signup-btn">Register</button>
      </div>
    </div>
  );
}

export default SignUp;
