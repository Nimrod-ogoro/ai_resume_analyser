import React, { useState } from 'react';


const CVWriter = () => {
  const [personal, setPersonal] = useState({ name: '', email: '', phone: '' });
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState([{ jobTitle: '', company: '', duration: '' }]);
  const [education, setEducation] = useState([{ school: '', degree: '', year: '' }]);
  const [skills, setSkills] = useState(['']);

  const addExperience = () => setExperience([...experience, { jobTitle: '', company: '', duration: '' }]);
  const addEducation = () => setEducation([...education, { school: '', degree: '', year: '' }]);
  const addSkill = () => setSkills([...skills, '']);

  return (
    <div className="cv-writer-container">
      <h2>Build Your CV</h2>

      <section className="cv-section">
        <h3>Personal Details</h3>
        <input type="text" placeholder="Full Name" value={personal.name} onChange={(e) => setPersonal({ ...personal, name: e.target.value })} />
        <input type="email" placeholder="Email" value={personal.email} onChange={(e) => setPersonal({ ...personal, email: e.target.value })} />
        <input type="text" placeholder="Phone" value={personal.phone} onChange={(e) => setPersonal({ ...personal, phone: e.target.value })} />
      </section>

      <section className="cv-section">
        <h3>Professional Summary</h3>
        <textarea value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summarize your qualifications..."></textarea>
      </section>

      <section className="cv-section">
        <h3>Work Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <input type="text" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => {
              const newExp = [...experience];
              newExp[index].jobTitle = e.target.value;
              setExperience(newExp);
            }} />
            <input type="text" placeholder="Company" value={exp.company} onChange={(e) => {
              const newExp = [...experience];
              newExp[index].company = e.target.value;
              setExperience(newExp);
            }} />
            <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => {
              const newExp = [...experience];
              newExp[index].duration = e.target.value;
              setExperience(newExp);
            }} />
          </div>
        ))}
        <button onClick={addExperience}>Add Experience</button>
      </section>

      <section className="cv-section">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <input type="text" placeholder="School" value={edu.school} onChange={(e) => {
              const newEdu = [...education];
              newEdu[index].school = e.target.value;
              setEducation(newEdu);
            }} />
            <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => {
              const newEdu = [...education];
              newEdu[index].degree = e.target.value;
              setEducation(newEdu);
            }} />
            <input type="text" placeholder="Year" value={edu.year} onChange={(e) => {
              const newEdu = [...education];
              newEdu[index].year = e.target.value;
              setEducation(newEdu);
            }} />
          </div>
        ))}
        <button onClick={addEducation}>Add Education</button>
      </section>

      <section className="cv-section">
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <input key={index} type="text" placeholder="Skill" value={skill} onChange={(e) => {
            const newSkills = [...skills];
            newSkills[index] = e.target.value;
            setSkills(newSkills);
          }} />
        ))}
        <button onClick={addSkill}>Add Skill</button>
      </section>

      <div className="cv-actions">
        <button>Preview</button>
        <button>Download CV</button>
        <button>Save & Continue</button>
      </div>
    </div>
  );
};

export default CVWriter;
