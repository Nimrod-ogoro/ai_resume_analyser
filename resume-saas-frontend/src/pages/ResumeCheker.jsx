import React, { useState } from 'react';

const ResumeChecker = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dummy logic: simulate resume scoring
    setTimeout(() => {
      setScore(85); // pretend we scored 85
      setFeedback("Great resume! Improve the summary section and quantify more achievements.");
    }, 1500);
  };

  return (
    <div className="resume-checker-container">
      <h1>Resume Checker & Scorer</h1>
      <p>Upload your resume and receive instant feedback.</p>

      <form onSubmit={handleSubmit} className="resume-checker-form">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
        <button type="submit">Analyze Resume</button>
      </form>

      {score && (
        <div className="resume-results">
          <h2>Score: {score}/100</h2>
          <p className="feedback">{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeChecker;
