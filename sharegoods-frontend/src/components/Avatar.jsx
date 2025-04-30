import React from 'react';
import "../styles/Avatar.css"

function Avatar({ name, image, onEdit }) {
  return (
    <div className="avatar-container">
      <div className="avatar-header">
        <span className="avatar-name">{name}</span>
      </div>
      <div className="avatar-circle">
        <img src={image} alt={name} className="avatar-image" />
      </div>
    </div>
  );
}

export default Avatar;
