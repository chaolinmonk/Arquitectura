import React from 'react';
import "./styles/CustomCard.css";

export default function CustomCard({ src, alt, title, text, width = '240px', height = '240px' }) {
  return (
    <div className="CustomCard" style={{ width, height }}>
      <div className="CustomCardImg">
        <img src={src} alt={alt} />
      </div>
      <div className="CustomCardDesc">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
