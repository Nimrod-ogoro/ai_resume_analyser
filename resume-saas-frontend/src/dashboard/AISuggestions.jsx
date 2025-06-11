import React from 'react';


const AISuggestions = () => {
  const suggestions = [
    { id: 1, tip: 'Add quantifiable achievements to your work experience.' },
    { id: 2, tip: 'Use bullet points for better readability.' },
    { id: 3, tip: 'Tailor your resume to the job description.' },
    { id: 4, tip: 'Highlight your top 3 skills relevant to the role.' }
  ];

  return (
    <div className="ai-suggestions">
      <h3 className="ai-suggestions-title">AI Suggestions</h3>
      <ul className="ai-suggestions-list">
        {suggestions.map(suggestion => (
          <li key={suggestion.id} className="ai-suggestions-item">
            {suggestion.tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AISuggestions;
