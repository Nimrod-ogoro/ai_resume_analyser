import React from 'react';


const Sidebar = () => {
  return (
    <aside className="ai-sidebar">
      <div className="ai-sidebar-header">
        <h2>MyDashboard</h2>
      </div>
      <ul className="ai-sidebar-menu">
        <li className="ai-sidebar-item ai-active">Overview</li>
        <li className="ai-sidebar-item">Saved Resumes</li>
        <li className="ai-sidebar-item">Resume History</li>
        <li className="ai-sidebar-item">AI Suggestions</li>
        <li className="ai-sidebar-item">Account</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

