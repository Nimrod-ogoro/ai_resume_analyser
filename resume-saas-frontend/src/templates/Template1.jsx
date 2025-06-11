import React from 'react';
import './TemplateOne.css';

const TemplateOne = ({ data }) => {
  return (
    <>
    <div className="template-one">
      <header>
        <h1>{data.name}</h1>
        <p className="title">{data.title}</p>
        <p>{data.email} | {data.phone} | {data.location}</p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>{data.summary}</p>
      </section>

      <section>
        <h2>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i}>
            <h3>{exp.jobTitle} - {exp.company}</h3>
            <p className="date">{exp.startDate} – {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i}>
            <h3>{edu.degree} - {edu.institution}</h3>
            <p className="date">{edu.year}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>
    </div>
    </>
  );
};

export default TemplateOne;
