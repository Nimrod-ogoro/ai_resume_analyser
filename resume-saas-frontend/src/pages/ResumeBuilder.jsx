import React, { useState } from 'react';
import Footer from '../components/footer';


const ResumeBuilder = () => {
  const steps = ['Personal Info', 'Experience', 'Education', 'Skills', 'Summary', 'Templates'];
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    experience: '', education: '', skills: '', summary: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStepForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <label>Full Name</label>
            <input name="name" value={formData.name} onChange={handleInputChange} />
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleInputChange} />
            <label>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleInputChange} />
          </>
        );
      case 1:
        return (
          <>
            <label>Work Experience</label>
            <textarea name="experience" value={formData.experience} onChange={handleInputChange} rows={5} />
          </>
        );
      case 2:
        return (
          <>
            <label>Education</label>
            <textarea name="education" value={formData.education} onChange={handleInputChange} rows={5} />
          </>
        );
      case 3:
        return (
          <>
            <label>Skills</label>
            <textarea name="skills" value={formData.skills} onChange={handleInputChange} rows={3} />
          </>
        );
      case 4:
        return (
          <>
            <label>Professional Summary</label>
            <textarea name="summary" value={formData.summary} onChange={handleInputChange} rows={4} />
          </>
        );
      case 5:
        return <p>Select a template (coming soon)</p>;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="resume-builder">
      <aside className="sidebar">
        <ul>
          {steps.map((step, index) => (
            <li
              key={index}
              className={currentStep === index ? 'active' : ''}
              onClick={() => setCurrentStep(index)}
            >
              {step}
            </li>
          ))}
        </ul>
      </aside>
      <main className="form-panel">
        <h2>{steps[currentStep]}</h2>
        <div className="form-fields">{renderStepForm()}</div>
        <div className="navigation-buttons">
          {currentStep > 0 && (
            <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
          )}
          {currentStep < steps.length - 1 && (
            <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
          )}
        </div>
      </main>
      <section className="preview">
        <h3>Live Preview</h3>
        <div className="preview-box">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <p><strong>Education:</strong> {formData.education}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
          <p><strong>Summary:</strong> {formData.summary}</p>
        </div>
      </section>
     
    </div>
    <div>
        <Footer/>
    </div>
    </>
   
  );
};

export default ResumeBuilder;
