import React, { useState } from 'react';


const CoverLetterWriter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    company: '',
    experience: '',
    skills: '',
    customMessage: ''
  });

  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateCoverLetter = (e) => {
    e.preventDefault();
    // Placeholder: integrate with your GPT backend
    const letter = `
Dear ${formData.company},

I am writing to express my interest in the ${formData.jobTitle} position at ${formData.company}. 
With my experience in ${formData.experience}, and proficiency in ${formData.skills}, I am confident in my ability to contribute significantly to your team.

${formData.customMessage || 'I am excited about the opportunity to bring my passion and skills to your esteemed organization.'}

Sincerely,
${formData.name}
    `;
    setGeneratedLetter(letter);
  };

  return (
    <div className="cover-writer-container">
      <h1>AI Cover Letter Writer</h1>
      <form onSubmit={generateCoverLetter} className="cover-form">
        <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        <textarea name="experience" placeholder="Briefly describe your experience" value={formData.experience} onChange={handleChange} required />
        <textarea name="skills" placeholder="Key Skills (comma-separated)" value={formData.skills} onChange={handleChange} required />
        <textarea name="customMessage" placeholder="Optional custom message..." value={formData.customMessage} onChange={handleChange} />
        <button type="submit">Generate Cover Letter</button>
      </form>

      {generatedLetter && (
        <div className="cover-letter-preview">
          <h2>Your Generated Cover Letter</h2>
          <pre>{generatedLetter}</pre>
        </div>
      )}
    </div>
  );
};

export default CoverLetterWriter;
