import React, { useState } from 'react';
import TextField from '../components/TextField';
import '../styles/PostItem.css';
import { useNavigate } from 'react-router-dom';

function PostItem() {
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listingType, setListingType] = useState('trade');
  const [itemType, setItemType] = useState('other');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Item posted!');
    navigate('/profile')
    
  };

  return (
    <div className="post-page">
      <h3>Post An Item</h3>
      <div className="post-container">
        <div className="image-preview">
          {imagePreview ? (
            <img src={imagePreview} alt="Uploaded preview" />
          ) : (
            <p style={{ color: "#999" }}>No image uploaded</p>
          )}
        </div>
  
        <form onSubmit={handleSubmit} className="post-form">
          <TextField 
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
  
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

          <div className="text-field">
            <label className="text-label">A donation or a trade?</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="listingType"
                  value="trade"
                  checked={listingType === 'trade'}
                  onChange={() => setListingType('trade')}
                />
                <span>Trade</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="listingType"
                  value="donation"
                  checked={listingType === 'donation'}
                  onChange={() => setListingType('donation')}
                />
                <span>Donation</span>
              </label>
            </div>
          </div>

          <div className="text-field">
            <label className="text-label">Item Type</label>
            <select
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              className="type-select"
            >
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
          </div>
  
          <div className="text-field">
            <label className="text-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImagePreview(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
  
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
  
}

export default PostItem;