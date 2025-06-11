import React from 'react';


const OverviewCards = () => {
  const cards = [
    { label: 'Resumes Created', value: 18 },
    { label: 'Cover Letters', value: 7 },
    { label: 'Scored Resumes', value: 12 },
    { label: 'AI Suggestions', value: 29 }
  ];

  return (
    <section className="ai-overview-cards">
      {cards.map((card, index) => (
        <div key={index} className="ai-overview-card">
          <h4 className="ai-overview-label">{card.label}</h4>
          <p className="ai-overview-value">{card.value}</p>
        </div>
      ))}
    </section>
  );
};

export default OverviewCards;

