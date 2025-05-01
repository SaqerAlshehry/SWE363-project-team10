import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Electronics", "Books", "Clothing"]);
  const navigate = useNavigate();

  const totalMembers = 123;
  const totalListings = 456;
  const adminEmails = ["admin1@example.com", "admin2@example.com", "admin3@example.com"];

  const handleAddCategory = () => {
    if (category.trim()) {
      setCategories([...categories, category.trim()]);
      alert(`Category "${category}" added!`);
      setCategory("");
    }
  };

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
                <button onClick={() => navigate("/manage-listings")}>Select</button>
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