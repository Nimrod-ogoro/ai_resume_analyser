import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer'
import Features from '../components/features'
import { HiTemplate } from "react-icons/hi";
import { BsRobot } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import FAQs from '../components/faqs';
import Newsletter from '../components/newsletter';

const Home = () => {
    const features = [
        {
            title: "AI-Powered Resume Builder",
            description: "Create professional resumes with the help of AI technology.",
            icon: <BsRobot />,
        },
        {
            title: "Customizable Templates",
            description: "Choose from a variety of templates to suit your style.",
            icon: <HiTemplate/>,
        },
        {
            title: "Real-time Feedback",
            description: "Get instant feedback on your resume as you build it.",
            icon: <VscFeedback />,
        },
        {
            title: "Download in Multiple Formats",
            description: "Export your resume in PDF, DOCX, and more.",
            icon: <FaDownload />,
        },
        {
            title: "Cover Letter Builder",
            description: "Easily create matching cover letters.",
            icon: <BsRobot />,
        },
        {
            title: "Resume Analysis and Optimization",
            description: "Analyze and optimize your resume for better job matches.",
            icon: <GrAnalytics />,
        }
    ]
    const testimonials=[
        {
            icon: <img src="" alt="" />,
            name: "John Doe",
            feedback: "This resume builder is amazing! It helped me land my dream job.",
            
        },
        {
            icon: <img src="/img/profile1.jpg" alt="" />,
            name: "Jane Smith",
            feedback: "I love the AI-powered features. My resume has never looked better!",
        },
        {
            icon: <img src="/img/profile2.jpg" alt="" />,
            name: "Alice Johnson",
            feedback: "The customizable templates are a game-changer. Highly recommend!",
        },
        {
            icon: <img src="/img/profile5.jpg" alt="" />,
            name: "Bob Brown",
            feedback: "The real-time feedback feature is incredibly helpful. I got my resume ready in no time!",
        },
        {
            icon: <img src="/img/profile3.jpg" alt="" />,
            name: "Charlie Davis",
            feedback: "The cover letter builder is a lifesaver. Thank you!",
        },
        {
            icon: <img src="/img/profile4.jpg" alt="" />,
            name: "Emily Wilson",
            feedback: "I appreciate the resume analysis feature. It helped me optimize my resume for better job matches.",
        }
    ]
  
  return (
    <>
    <section className='header-section'>
      <Header />
    </section>
    <div className='landing-sect'>
       <h1><em>Professional Resume & Cover Letter<br/> with the ultimate resume builder</em></h1>
       <p>Get your resume and cover letter ready in minutes with our AI-powered resume builder. </p>
       <button className='btn btn-primary' id="button" >Get Started</button>
    </div>
    <div className='about-container'>
        <img src="/img/resume.jpg" alt="resume pic" className='resume-illustration' />
         <div className='contents'>
            <h2>About Us</h2>
         <p>We are a team of professionals dedicated to helping you create the perfect resume and cover letter. <br/>Our AI-powered tools make it easy to build and customize your documents.AI Resume Analyzer helps<br/> you build winning resumes and cover letters with the power of AI.
          <br/> <br/>We analyze, optimize, and match your profile to the right jobs—so you stand out, get noticed, <br/>and land interviews faster. Smart. Simple. Job-ready.</p>
         <p>Whether you're looking for a job or just want to update your resume, we've got you covered.</p>
         </div>
    </div>
    <div className='features-section'>
        <h2>Features</h2>
        <div className='features-card'>
            {features.map((feature, index) => (
                <Features
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    </div>
    <div>
    <FAQs/>
        </div>
  <div className='testimonials-section'>
      <h2> Client Testimonials</h2>
      <div className='testimonials-wrapper'>
        {testimonials.map((testimonial, index) => (
          <div className='testimonial-card' key={index}>
            <div className='testimonial-icon'>{testimonial.icon}</div>
            <h3>{testimonial.name}</h3>
            <p className='testimonial-feedback'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
        <Newsletter/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Home
