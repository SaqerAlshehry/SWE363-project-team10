import React, { useEffect, useState } from 'react';
import TextField from '../components/TextField';
import Avatar from '../components/Avatar';
import { FiUser, FiMail, FiPhone, FiLock, FiHome } from 'react-icons/fi';
import '../styles/Profile.css';
import HistoryItems from '../components/HistoryItems';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    building: '',
    room: '',
  });

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData({
          name: res.data.name || '',
          email: res.data.email || '',
          phoneNumber: res.data.phoneNumber || '',
          building: res.data.building || '',
          room: res.data.room || '',
        });
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        'http://localhost:5000/api/users/update-password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message || 'Password updated');
      setPassword('');
    } catch (err) {
      console.error('Error updating password:', err);
      alert('Failed to update password');
    }
  };

  const handleBadgePageNavigation = () => {
    navigate('/badge');
  };

  if (loading) return <div className="profile-page">Loading...</div>;
  if (error) return <div className="profile-page">{error}</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <Avatar name={userData.name} image="/assets/kfupm.jpg" onEdit={handleBadgePageNavigation} />
        <form onSubmit={handleSubmit} className="form-grid">
          <TextField label="Name" value={userData.name} icon={<FiUser />} readOnly />
          <TextField label="Phone Number" value={userData.phoneNumber} icon={<FiPhone />} readOnly />
          <TextField label="Email" value={userData.email} icon={<FiMail />} readOnly />
          <TextField label="Building" value={userData.building} icon={<FiHome />} readOnly />
          <TextField label="Room" value={userData.room} icon={<FiHome />} readOnly />
          <TextField
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<FiLock />}
          />
          <div className="button-row">
            <button type="submit" className="save-button">Save</button>
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
