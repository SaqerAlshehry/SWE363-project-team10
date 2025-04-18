import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ItemDetails.css";
import { useState } from "react";
import TextField from "../components/TextField";

function ItemDetails() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const data = params.get("data");
    const decodedData = decodeURIComponent(data);
    const itemObjectProperties = JSON.parse(decodedData);

    const itemName = itemObjectProperties[0];
    const itemDescription = itemObjectProperties[1];
    const itemDonation = itemObjectProperties[2];
    const itemImage = itemObjectProperties[3];

    const comments = [
        "Thanks, Saud!",
        "Excellent quality.",
        "Very satisfied with the purchase.",
        "Would recommend to others.",
        "I love this!",
        "Very useful.",
    ];

    const [userComment, setUserComment] = useState("");
    return (
        <div className="item-page">
            <div className="item-card">
                <div className="details-column">
                    <p>{itemName}</p>
                    <p className="description">{itemDescription}</p>
                    <p className="price">{itemDonation}</p>
                </div>
                <img className="item-details-img" src={itemImage} alt={`Product ${itemName}`} />
            </div>
        </div >
    );
}

export default ItemDetails;
