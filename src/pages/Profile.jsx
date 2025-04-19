import React, { useState } from 'react';
import TextField from '../components/TextField';
import Avatar from '../components/Avatar';
import { FiUser, FiMail, FiPhone, FiLock, FiHome } from 'react-icons/fi';
import '../styles/Profile.css'
import HistoryItems from '../components/HistoryItems';
import { useNavigate } from 'react-router-dom';


function Profile() {
  const [name, setName] = useState('Ahmed s');
  const [email, setEmail] = useState('s200000000@kfupm.edu.sa');
  const [phone, setPhone] = useState('+966');
  const [password, setPassword] = useState('');
  const [building, setBuilding] = useState('862');
  const [room, setRoom] = useState('111');

  const comments = [
    {
      name: 'Saud Maashi',
      comment: 'Great user, very helpful!',
    },
    {
      name: 'Saud Alshushan',
      comment: 'Very responsive and kind.',
    },
    {
      name: 'Saqer Alshehri',
      comment: 'Had a great experience!',
    },
    {
      name: 'Osama Alghamdi',
      comment: 'Could improve on communication.',
    },
    {
      name: 'Hussain Alabdalali',
      comment: 'Highly recommended!',
    },
  ];

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
      <div className="badge-container">
        <div className="badge-header">
          <h1>My Badges</h1>
          <p>⭐ 360</p>
          <p className="badge-rank">Your Rank is Bronze</p>
        </div>
        <div className="badge-content">
          <p className="badge-description">
            This badge is awarded for exceptional performance and contributions.
          </p>
        </div>
        <h2>Badge History</h2>
        <ul className="badge-list">
          <li className="badge-item">
            ⭐ 140 - Awarded on 2025/1/15
          </li>
          <li className="badge-item">
            ⭐ 120 - Awarded on 2025/1/16
          </li>
          <li className="badge-item">
            ⭐ 100 - Awarded on 2025/1/17
          </li>
        </ul>
      </div>
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
          <HistoryItems itemImage="/assets/kfupm.jpg" title="Desk Lamp" status="Completed" />
          <HistoryItems itemImage="/assets/kfupm.jpg" title="Office Chair" status="Still" />
          <HistoryItems itemImage="/assets/kfupm.jpg" title="Bookshelf" status="Still" />
        </div>
      </div>
      <div className="history-card">
        <h3>What People Say About This User</h3>
        <div className="history-grid">
          <div className='comments-container'>
            {comments.map((comment, index) => (
              <div>
                <strong>{comment.name}</strong>
                <div key={index} className="comment">
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );

}

export default Profile;
