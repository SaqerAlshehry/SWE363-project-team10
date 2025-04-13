import React, { useState } from "react";
import TextField from "../components/TextField";
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TempItemCard from "../components/TempItemCard";

function Home() {
    const [search, setSearch] = useState("");
    const items = [
        { name: "Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1", description: "Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1" },
        { name: "Product 2", description: "Description for Product 2", price: 63 },
        { name: "Product 3", description: "Description for Product 3", price: 214 },
        { name: "Product 4", description: "Description for Product 4", price: 736 },
        { name: "Product 5", description: "Description for Product 5", price: 850 },
        { name: "Product 6", description: "Description for Product 6", price: 24 }
    ];

    const filteredItems = items.filter(item => {
        const searchLower = search.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
        );
    }
    );
    const itemsToDisplay = search ? filteredItems : items;
    const products = itemsToDisplay.slice(0, 10);

    return (
        <div className="home-container">
            <TextField
                label=""
                value={search}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
            <div className="grid-container">
                {products.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    products.map((item, index) => (
                        <div className="grid-item" key={index}>
                            <TempItemCard item={item} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;
