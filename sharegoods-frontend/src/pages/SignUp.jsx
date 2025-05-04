import React, { useState } from 'react';
import '../styles/SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    building: '',
    room: ''
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    for (const field in formData) {
      if (!formData[field]) {
        setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        return false;
      }
    }
    
    const emailRegex = /^s\d{9}@kfupm\.edu\.sa$/;
    if (!emailRegex.test(formData.email)) {
      setError('Email must be in the format sXXXXXXXXX@kfupm.edu.sa');
      return false;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (isNaN(formData.building) || isNaN(formData.room)) {
      setError('Building and room must be numbers');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('https://sharegoodss.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Registration failed');
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        navigate('/home');
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (err) {
      console.error('Error during registration:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <span className="inactive-tab" onClick={() => navigate('/login')}>Login</span>
          <span className="active-tab">Sign up</span>
          <button className="close-btn" onClick={() => navigate('/')}>×</button>
        </div>

        <h2 className="welcome-title">Create Account</h2>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input 
              type="text" 
              name="phoneNumber"
              placeholder="+9665xxxxxxx" 
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="sxxxxxxxxx@kfupm.edu.sa" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Building</label>
            <input 
              type="text" 
              name="building"
              placeholder="Building Number" 
              value={formData.building}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Room</label>
            <input 
              type="text" 
              name="room"
              placeholder="Room Number" 
              value={formData.room}
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className="signup-btn" 
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
