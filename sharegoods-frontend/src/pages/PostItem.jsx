import React, { useState, useEffect } from 'react';
import TextField from '../components/TextField';
import '../styles/PostItem.css';
import { useNavigate } from 'react-router-dom';

function PostItem() {
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listingType, setListingType] = useState('trade');
  const [itemType, setItemType] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch categories when component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);

        // Set default item type to first category if available
        if (data.length > 0) {
          setItemType(data[0]._id);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      type: listingType.charAt(0).toUpperCase() + listingType.slice(1),
      itemType: itemType, // Changed back to itemType to match backend expectations
      image: imagePreview,
      //userId:
    };

    try {
      const response = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log(result);
      alert("Item posted!");
      navigate('/profile');
    } catch (err) {
      console.error("Error posting item:", err);
      alert("Failed to post item.");
    }
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
            {isLoading ? (
              <p>Loading categories...</p>
            ) : (
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="type-select"
                required
              >
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))
                ) : (
                  <option value="">No categories available</option>
                )}
              </select>
            )}
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