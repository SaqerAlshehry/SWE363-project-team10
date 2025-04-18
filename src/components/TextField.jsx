import React from 'react';
import "../styles/TextField.css"

function TextField({ label, type = 'text', value, onChange, placeholder, icon }) {
  return (
    <div className="text-field">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        <span className="icon">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-input"
        />
      </div>
    </div>
  );
}

export default TextField;
