import React, { useState, useEffect } from 'react';
import TextField from '../components/TextField';
import Avatar from '../components/Avatar';
import { FiUser, FiMail, FiPhone, FiLock, FiHome } from 'react-icons/fi';
import '../styles/Profile.css';
import HistoryItems from '../components/HistoryItems';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [name, setName] = useState('Ahmed s');
  const [email, setEmail] = useState('s200000000@kfupm.edu.sa');
  const [phone, setPhone] = useState('+966');
  const [password, setPassword] = useState('');
  const [building, setBuilding] = useState('862');
  const [room, setRoom] = useState('111');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile saved!');
  };

  const navigate = useNavigate();

  function handleBadgePageNavigation() {
    navigate("/badge");
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <Avatar name={name} image="/assets/kfupm.jpg" onEdit={handleBadgePageNavigation} />
        <form onSubmit={handleSubmit} className="form-grid">
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} icon={<FiUser />} />
          <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} icon={<FiPhone />} />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} icon={<FiMail />} />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} icon={<FiLock />} />
          <TextField label="Building" value={building} onChange={(e) => setBuilding(e.target.value)} icon={<FiHome />} />
          <TextField label="Room" value={room} onChange={(e) => setRoom(e.target.value)} icon={<FiHome />} />
          <div className="button-row">
            <button type="submit" className="save-button">Save</button>
            <button type="button" className="change-password-button" onClick={() => alert('Change Password')}>Change Password</button>
          </div>
        </form>
      </div>

      <div className="history-card">
        <h3>Previous Posts</h3>
        <div className="history-grid">
          <HistoryItems itemImage="/assets/kfupm.jpg" title="Desk Lamp" />
          <HistoryItems itemImage="/assets/kfupm.jpg" title="Office Chair" />
          <HistoryItems itemImage="/assets/kfupm.jpg" title="Bookshelf" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
