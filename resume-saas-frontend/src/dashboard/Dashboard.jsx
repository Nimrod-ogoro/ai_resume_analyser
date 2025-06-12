import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import OverviewCards from './OverviewCards';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import SavedDocuments from './SavedDocuments';
import ResumeHistory from './ResumeHistory';
import AISuggestions from './AISuggestions';
import Account from './Account';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  const renderActiveContent = () => {
    switch (activeView) {
      case 'overview':
        return (
          <>
            <OverviewCards />
            <QuickActions />
            <div className="ai-dashboard-subsections">
              <div className="ai-dashboard-row">
                <RecentActivity />
                <SavedDocuments />
              </div>
              <div className="ai-dashboard-row">
                <ResumeHistory />
                <AISuggestions />
              </div>
            </div>
          </>
        );
     
      case 'saved-resumes':
        return <div className='display'><SavedDocuments /></div>;
      case 'resume-history':
        return <div id='resume-history'><ResumeHistory /></div>;
      case 'ai-suggestions':
        return <div className='display'><AISuggestions /></div>;
      case 'account':
        return <div className='display'><Account /></div>;
      default:
        return <OverviewCards/>;
     
     }
  };

  return (
    <div className="ai-dashboard-container">
      <Sidebar setActiveView={setActiveView} activeView={activeView} />
      <div className="ai-dashboard-main">
        <Topbar />
        <div className="ai-dashboard-content">{renderActiveContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;

