import React, { useState, useEffect } from "react";
import "../styles/ManageListings.css"; // Use a new style sheet if you want to separate styles
import TempItemCard from "../components/ItemCard";
import axios from "axios";

function ManageListings() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("https://sharegoodss.onrender.com/api/items");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching items", err);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(
    item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-container">
      <h1 className="manage-header">Manage Your Listings</h1>

      <input
        className="manage-search"
        type="text"
        placeholder="Search your items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid-container">
        {filteredItems.length === 0 ? (
          <p className="no-results">No items match your search.</p>
        ) : (
          filteredItems.map((item) => (
            <div className="grid-item" key={item._id}>
              <TempItemCard item={item} editable={true} /> 
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ManageListings;
