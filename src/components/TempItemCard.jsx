import React from "react";

function TempItemCard({ item }) {
    return (
        <div className="temp-item-card">
            <img
                src="https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png"
                alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
    );
}

export default TempItemCard;
