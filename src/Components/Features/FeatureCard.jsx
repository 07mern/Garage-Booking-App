// FeatureCard.jsx
import React from 'react';
import './Features.css';

function FeatureCard({ icon, title }) {
  return (
    <div className="col">
      <div className="feature-card p-3 text-center">
        <i className={`bi ${icon} feature-icon`}></i>
        <h5 className="mt-2">{title}</h5>
      </div>
    </div>
  );
}

export default FeatureCard;
