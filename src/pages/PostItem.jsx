import React, { useState } from 'react';
import TextField from '../components/TextField';
import '../styles/PostItem.css';

function PostItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Item posted!');
  };

  return (
    <div className="post-page">
      <div className="post-container">
        <div className="image-preview">
          <img src="/assets/kfupm.jpg" alt="Preview" />
        </div>
        <form onSubmit={handleSubmit} className="post-form">
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PostItem;