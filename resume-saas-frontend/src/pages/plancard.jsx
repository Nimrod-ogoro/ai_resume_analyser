import React from 'react';

const PlanCard = ({ plan, price, features }) => {
  return (
    <div className="ai-plan-card">
      <h3>{plan}</h3>
      <p className="ai-price">${price}/mo</p>
      <ul>
        {features.map((feat, idx) => (
          <li key={idx}>{feat}</li>
        ))}
      </ul>
      <button className="ai-subscribe-btn">Subscribe</button>
    </div>
  );
};

export default PlanCard;
