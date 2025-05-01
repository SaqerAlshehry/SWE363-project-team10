import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ManageListingDetails.css";

function ManageListingDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");
  const decodedData = decodeURIComponent(data);
  const itemObjectProperties = JSON.parse(decodedData);

  const itemName = itemObjectProperties[0];
  const itemDescription = itemObjectProperties[1];
  const itemDonation = itemObjectProperties[2];
  const itemImage = itemObjectProperties[3];
  const itemType = itemObjectProperties[4];

  const handleRemove = () => {
    alert(`Listing "${itemName}" removed (fake action).`);
  };

  const handleEdit = () => {
    alert(`Edit "${itemName}" (fake action).`);
  };

  return (
    <div className="item-page">
      <div className="item-card">
        <div className="details-column">
          <p>{itemName}</p>
          <p className="description">{itemDescription}</p>
          <p className="item-type">{itemType}</p>
          <p className="price">{itemDonation}</p>

          <div className="admin-controls">
            <button className="admin-button edit" onClick={handleEdit}>Edit</button>
            <button className="admin-button remove" onClick={handleRemove}>Remove</button>
          </div>
        </div>
        <img className="item-details-img" src={itemImage} alt={`Product ${itemName}`} />
      </div>
    </div>
  );
}

export default ManageListingDetails;
