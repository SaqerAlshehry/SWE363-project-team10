import React from "react";
import { useNavigate } from "react-router-dom";

function TempItemCard({ item, editable }) {
    const navigate = useNavigate();

    const itemObjectProperties = [
        item.title,
        item.description,
        item.type,
        item.image,
        item.itemType,
        item._id
    ];

    const handleClick = () => {
        const serializedData = encodeURIComponent(JSON.stringify(itemObjectProperties));
        navigate(`/item-details?data=${serializedData}`, {
            state: { fromManage: editable || false }
          });          
    };

    return (
        <div onClick={handleClick} className="temp-item-card">
            <img
                src={item.image}
                alt={item.title}
            />
            <h3>{item.title}</h3>
            <h3 className="price">{item.type}</h3> 
        </div>
    );
}

export default TempItemCard;

