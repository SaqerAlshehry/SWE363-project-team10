import React, { useState } from "react";
import TextField from "../components/TextField";
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TempItemCard from "../components/ItemCard";

function Home() {
    const [search, setSearch] = useState("");
    const items = [
        { name: "Product 1", description: "Description for Product 1", type: "Electronic", donation: "Donation", image: "/assets/kfupm.jpg" },
        { name: "Product 2", description: "Description for Product 2", type: "Furniture", donation: "Trade", image: "/assets/kfupm.jpg" },
        { name: "Product 3", description: "Description for Product 3", type: "Clothing", donation: "Donation", image: "/assets/kfupm.jpg" },
        { name: "Product 4", description: "Description for Product 4", type: "Books", donation: "Trade", image: "/assets/kfupm.jpg" },
        { name: "Product 5", description: "Description for Product 5", type: "Other", donation: "Donation", image: "/assets/kfupm.jpg" },
        { name: "Product 6", description: "Description for Product 6", type: "Books", donation: "Trade", image: "/assets/kfupm.jpg" }
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
