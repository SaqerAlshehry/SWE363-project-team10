import React from "react";
import { useNavigate } from "react-router-dom";

function TempItemCard({ item }) {
    const navigate = useNavigate();

    // Create an array of item properties
    const itemObjectProperties = [
        item.name,
        item.description,
        item.price,
        item.image,
    ];

    const handleClick = () => {
        // Serialize the array and encode it
        const serializedData = encodeURIComponent(JSON.stringify(itemObjectProperties));

        // Navigate to ItemDetails, passing the serialized data as a query param
        navigate(`/item-details?data=${serializedData}`);
    };

    return (
        <div onClick={handleClick} className="temp-item-card">
            <img
                src={item.image}
                alt={item.name}
            />
            <h3>{item.name}</h3>
            <h3 className="price">${item.price}</h3>
        </div>
    );
}

export default TempItemCard;
