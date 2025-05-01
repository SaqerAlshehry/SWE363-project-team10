import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryFilter = ({ selectedCategory, onChange }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("/api/categories")
            .then(res => {
                console.log("Fetched categories:", res.data);
                if (Array.isArray(res.data)) {
                    setCategories(res.data);
                } else {
                    setCategories([]);
                }
            })
            .catch(err => {
                console.error("Error fetching categories", err);
                setCategories([]);
            });
    }, []);

    return (
        <select value={selectedCategory} onChange={(e) => onChange(e.target.value)}>
            <option value="">All Categories</option>
            {Array.isArray(categories) &&
                categories.map((cat) => (
                    <option key={cat._id} value={cat.name}>
                        {cat.name}
                    </option>
                ))}
        </select>
    );
};

export default CategoryFilter;


