import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import OverviewCards from './OverviewCards';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import SavedDocuments from './SavedDocuments';
import ResumeHistory from './ResumeHistory';
import AISuggestions from './AISuggestions';


const Dashboard = () => {
  return (
    <div className="ai-dashboard-container">
      <Sidebar />
      <div className="ai-dashboard-main">
        <Topbar />
        <div className="ai-dashboard-content">
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

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

