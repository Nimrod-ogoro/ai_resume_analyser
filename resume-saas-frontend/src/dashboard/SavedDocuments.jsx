import React from 'react';

const SavedDocuments = () => {
  const documents = [
    { title: 'Software Engineer Resume', date: 'June 10, 2025' },
    { title: 'Project Manager Resume', date: 'May 22, 2025' },
    { title: 'Data Analyst Resume', date: 'April 18, 2025' },
  ];

  return (
    <div className="ai-saved-documents">
      <h3 className="ai-saved-documents-title">Saved Documents</h3>
      <ul className="ai-saved-documents-list">
        {documents.map((doc, index) => (
          <li key={index} className="ai-saved-document">
            <div className="ai-saved-document-info">
              <strong>{doc.title}</strong>
              <span>{doc.date}</span>
            </div>
            <button className="ai-view-btn">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedDocuments;

