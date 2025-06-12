import React, { useState } from 'react';


const Account = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Nimrod Omanga O.',
    email: 'nimrod@example.com',
    password: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    alert('Account info updated (simulate API call)');
  };

  return (
    <div className="ai-account-container">
      <h2 className="ai-account-title">Account Settings</h2>

      <div className="ai-account-section">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />

        <label>New Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          onChange={handleChange}
        />

        <button onClick={handleUpdate} className="ai-account-save-btn">
          Save Changes
        </button>
      </div>

      <div className="ai-account-section ai-account-subscription">
        <h3>Subscription</h3>
        <p>Plan: <strong>Premium</strong></p>
        <p>Next billing: <strong>July 11, 2025</strong></p>
        <button className="ai-account-cancel-btn">Cancel Subscription</button>
      </div>

      <div className="ai-account-delete">
        <h3>Danger Zone</h3>
        <button className="ai-account-delete-btn">Delete Account</button>
      </div>
    </div>
  );
};

export default Account;
