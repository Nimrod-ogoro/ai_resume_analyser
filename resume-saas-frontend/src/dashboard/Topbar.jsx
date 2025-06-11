import React from 'react';


const Topbar = () => {
  return (
    <header className="ai-topbar">
      <div className="ai-topbar-left">
        <h3>Welcome back, Nimrod 👋</h3>
      </div>
      <div className="ai-topbar-right">
        <input
          type="text"
          placeholder="Search documents..."
          className="ai-topbar-search"
        />
        <img
          src="/img/profile4.jpg"
          alt="User Profile"
          className="ai-topbar-avatar"
        />
      </div>
    </header>
  );
};

export default Topbar;
