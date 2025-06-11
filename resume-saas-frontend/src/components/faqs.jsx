import React, { useState } from 'react';


const faqsList = [
  {
    question: "What is this platform used for?",
    answer: "Our platform helps you build, optimize, and download professional resumes with AI-powered insights."
  },
  {
    question: "Is it free to use?",
    answer: "You can create and download basic resumes for free. Premium features are available via subscription."
  },
  {
    question: "Can I save multiple resumes?",
    answer: "Yes, with a registered account, you can save multiple resumes and access them anytime."
  },
  {
    question: "Do you support cover letters too?",
    answer: "Absolutely. You can generate and customize cover letters alongside your resume."
  },
  {
    question: "How does resume analysis work?",
    answer: "Our AI reviews your resume and offers suggestions based on job matching and industry best practices."
  },
    {
        question: "What formats can I download my resume in?",
        answer: "You can download your resume in PDF, DOCX, and TXT formats."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we prioritize your privacy and security. All data is encrypted and stored securely."
    },
    {
        question: "Can I access this on mobile?",
        answer: "Yes, our platform is fully responsive and works seamlessly on mobile devices."
    },
    {
        question: "How can I contact support?",
        answer: "You can reach our support team via the contact form on our website or by emailing support@Genie.com."
    }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqsList.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
