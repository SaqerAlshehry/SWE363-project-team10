import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function AdminDashboard() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const totalMembers = 123;
  const totalListings = 456;
  const adminEmails = ["admin1@example.com", "admin2@example.com", "admin3@example.com"];

  const handleAddCategory = async () => {
    if (category.trim()) {
      try {
        const response = await axios.post("http://localhost:3000/api/admin/add", {
          name: category.trim()
        });
  
        alert(`Category "${response.data.category.name}" added!`);
        setCategory("");
        await fetchCategories();
      } catch (error) {
        console.error("❌ Add Category Error:", error);
        alert(error.response?.data?.message || "Failed to add category");
      }
    }
  };
  

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/admin/categories");
      setCategories(response.data.map((cat) => cat.name));
    } catch (error) {
      console.error("❌ Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  
  
  

  return (
    <div className="home-container">
      <div className="grid-container single-column">
        <div className="grid-item">
          <div className="item-card">
            <h3>Total Members</h3>
            <p>{totalMembers}</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="item-card">
            <h3>Total Listings</h3>
            <p>{totalListings}</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="item-card">
            <h3>Admins’ Emails</h3>
            <ul className="custom-list">
              {adminEmails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid-container single-column">
        <div className="grid-item">
          <div className="item-card padded">
            <h3 className="center-text">Listing Controls</h3>
            <div className="button-row centered">
              <div className="horizontal-button">
                <h4 style={{ margin: 0 }}>Manage Listings</h4>
                <br></br>
                <button onClick={() => navigate("/manage-listing-details")}>Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container single-column">
        <div className="grid-item">
          <div className="item-card">
            <h3>Add Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category name"
              className="textfield-input"
            />
            <button onClick={handleAddCategory}>Add</button>
            <div className="category-list">
              <h4>Current Categories</h4>
              <ul className="custom-list">
                {categories.map((cat, index) => (
                  <li key={index}>{cat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;