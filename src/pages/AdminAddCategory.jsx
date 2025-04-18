import React, { useState } from "react";
import TextField from "../components/TextField";
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard() {
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    const totalMembers = 123;
    const totalListings = 456;
    const adminEmails = ["admin1@example.com", "admin2@example.com", "admin3@example.com"];

    const handleAddCategory = () => {
        if (category.trim()) {
            alert(`Category "${category}" added!`);
            setCategory("");
        }
    };

    return (
        <div className="home-container">
            {/* Search Bar */}
            <div style={{ marginBottom: "2.5rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "1200px" }}>
                    <TextField
                        label=""
                        value={search}
                        placeholder="Search dashboard..."
                        onChange={(e) => setSearch(e.target.value)}
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid-container" style={{ gap: "1.5rem", marginBottom: "2.5rem", gridTemplateColumns: "1fr" }}>
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
                        <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                            {adminEmails.map((email, index) => (
                                <li key={index}>{email}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Listing Controls - Clean Horizontal Layout */}
            <div className="grid-container" style={{ marginBottom: "2.5rem", gridTemplateColumns: "1fr" }}>
                <div className="grid-item">
                    <div className="item-card" style={{ padding: "30px" }}>
                        <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Listing Controls</h3>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            gap: "2rem",
                            alignItems: "center"
                        }}>
                            {["Add Listing", "Remove Listing", "Manage Listings"].map((label, i) => (
                                <div key={i} style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    minWidth: "160px",
                                    height: "100px"
                                }}>
                                    <h4 style={{ marginBottom: "0.5rem" }}>{label}</h4>
                                    <button style={{
                                        padding: "10px 20px",
                                        backgroundColor: "green",
                                        color: "white",
                                        fontWeight: "bold",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer"
                                    }}>
                                        Select
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Category */}
            <div className="grid-container" style={{ marginBottom: "4rem", gridTemplateColumns: "1fr" }}>
                <div className="grid-item">
                    <div className="item-card">
                        <h3>Add Category</h3>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category name"
                            style={{
                                padding: "10px",
                                width: "100%",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc"
                            }}
                        />
                        <button
                            onClick={handleAddCategory}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
