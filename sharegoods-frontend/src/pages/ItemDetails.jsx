import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ItemDetails.css";

function ItemDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const data = params.get("data");

    if (!data) {
        return <p>Invalid item data.</p>;
    }

    const decodedData = decodeURIComponent(data);
    const itemObjectProperties = JSON.parse(decodedData);
    const itemName = itemObjectProperties[0];
    const itemDescription = itemObjectProperties[1];
    const itemDonation = itemObjectProperties[2];
    const itemImage = itemObjectProperties[3];
    const itemType = itemObjectProperties[4]
    const itemId = itemObjectProperties[5];

    const fromManage = location.state?.fromManage || false;

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`/api/items/${itemId}`, {
                method: "DELETE",
            });

            const result = await response.json();
            alert(result.message || "Item deleted.");
            navigate("/manage-listing-details");
        } catch (err) {
            console.error("Error deleting item:", err);
            alert("Failed to delete item.");
        }
    };

    return (
        <div className="item-page">
            <div className="item-card">
                <div className="details-column">
                    <p>{itemName}</p>
                    <p className="description">{itemDescription}</p>
                    <p className="item-type">{itemType}</p>
                    <p className="price">{itemDonation}</p>
                    {fromManage && (
                        <button className="delete-button" onClick={handleDelete}>
                            Delete Item
                        </button>
                    )}

                </div>
                <img className="item-details-img" src={itemImage} alt={`Product ${itemName}`} />
            </div>
        </div >
    );
}

export default ItemDetails;
