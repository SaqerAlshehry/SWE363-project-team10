import React, { useState } from 'react';
import TextField from '../components/TextField';
import '../styles/PostItem.css';
import { useNavigate } from 'react-router-dom';

function PostItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Item posted!');
    navigate('/profile')
    
  };

  return (
    <div className="post-page">
      <div className="post-container">
        <div className="image-preview">
          <img src="/assets/kfupm.jpg" alt="Preview" />
        </div>
        <form onSubmit={handleSubmit} className="post-form">
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <div className="text-field">
  <label className="text-label">Description</label>
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Enter description"
    rows={4}
    className="text-area"
  />
</div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PostItem;