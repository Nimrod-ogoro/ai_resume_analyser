import React from 'react';


const RecentActivity = () => {
  const activities = [
    { id: 1, text: 'Uploaded a new resume', time: '2 hours ago' },
    { id: 2, text: 'Scored a resume', time: 'Yesterday' },
    { id: 3, text: 'Created a cover letter', time: '3 days ago' }
  ];

  return (
    <div className="ai-recent-activity">
      <h3 className="ai-recent-title">Recent Activity</h3>
      <ul className="ai-recent-list">
        {activities.map(activity => (
          <li key={activity.id} className="ai-recent-item">
            <span className="ai-recent-text">{activity.text}</span>
            <span className="ai-recent-time">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
