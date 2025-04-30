import React from "react";
import "../styles/HistoryItems.css";

function HistoryItems({ itemImage, title }) {
  return (
    <div className="history-item-tile">
      <img src={itemImage} alt="Item" className="history-tile-img" />
      <h4 className="history-tile-title">{title}</h4>
    </div>
  );
}


export default HistoryItems;
