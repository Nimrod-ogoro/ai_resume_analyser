import React from 'react';


const Sidebar = ({ setActiveView, activeView }) => {
  const links = [
    { key: 'overview', label: 'Overview' },
    { key: 'saved-resumes', label: 'Saved Resumes' },
    { key: 'resume-history', label: 'Resume History' },
    { key: 'ai-suggestions', label: 'AI Suggestions' },
    { key: 'account', label: 'Account' },
  ];

  return (
    <aside className="ai-sidebar">
      <div className="ai-sidebar-header">
        <h2>MyDashboard</h2>
      </div>
      <ul className="ai-sidebar-menu">
        {links.map((link) => (
          <li
            key={link.key}
            className={`ai-sidebar-item ${
              activeView === link.key ? 'ai-active' : ''
            }`}
            onClick={() => setActiveView(link.key)}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;



