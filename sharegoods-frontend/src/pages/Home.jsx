import React, { useState, useEffect } from "react";
import TextField from "../components/TextField";
import CategoryFilter from "../components/CategoryFilter";
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TempItemCard from "../components/ItemCard";
import axios from "axios";

function Home() {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get("/api/items", {
                    params: selectedCategory ? { category: selectedCategory } : {}
                });
                setItems(res.data);
            } catch (err) {
                console.error("Error fetching items", err);
            }
        };

        fetchItems();
    }, [selectedCategory]);

    const filteredItems = Array.isArray(items)
  ? items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    )
  : [];


    const itemsToDisplay = search ? filteredItems : items;

    return (
        <div className="home-container">
            <TextField
                label=""
                value={search}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />

            <CategoryFilter
                selectedCategory={selectedCategory}
                onChange={setSelectedCategory}
            />

<div className="grid-container">
  {Array.isArray(itemsToDisplay) && itemsToDisplay.length === 0 ? (
    <p>No results found</p>
  ) : Array.isArray(itemsToDisplay) ? (
    itemsToDisplay.map((item, index) => (
      <div className="grid-item" key={index}>
        <TempItemCard item={item} />
      </div>
    ))
  ) : (
    <p>Loading items...</p>
  )}
</div>

        </div>
    );
}

export default Home;

