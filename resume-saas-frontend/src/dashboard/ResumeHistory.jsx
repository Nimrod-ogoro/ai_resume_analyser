import React from 'react';


const ResumeHistory = () => {
  const history = [
    { id: 1, action: 'Scored Resume - Software Engineer', date: 'June 10, 2025' },
    { id: 2, action: 'Downloaded Resume - Data Analyst', date: 'June 5, 2025' },
    { id: 3, action: 'Updated Resume - Product Manager', date: 'May 30, 2025' },
  ];

  return (
    <div className="ai-resume-history">
      <h3 className="ai-resume-history-title">Resume History</h3>
      <ul className="ai-resume-history-list">
        {history.map(item => (
          <li key={item.id} className="ai-resume-history-item">
            <p>{item.action}</p>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeHistory;

