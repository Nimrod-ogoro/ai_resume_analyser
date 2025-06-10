import React from 'react'
import { HiOutlineDocumentSearch } from "react-icons/hi";


const Header = () => {
  return (
    <div className='home-container'>
      <img src="/img/logo.png" alt="ResumeGenius AI Logo" className="logo" />
     <p>Resume Genius AI</p>
       <div className='header-links'><ul className='nav-links'>
        <li><a href="/tools">Tools</a><ul className='dropdown'>
            <li className='dropdown-item'><a href="/tools/ai-writer">Resume Builder</a>
            <p className='dropdown-description'>Create and edit your resume with our  resume builder.</p>
            </li>
            <li className='dropdown-item'><a href="/tools/grammar-checker">CV Builder</a>
            <p className='dropdown-description'>Build your CV with our easy-to-use CV builder.</p>
            </li>
            
            <li className='dropdown-item'>
            <a href="/tools/plagiarism-checker">Resume Checker</a>
            <p className='dropdown-description'> Get Your Resume Checked and scored.</p>
            </li>
          </ul></li>
        <li><a href="/upload">Resume </a>
        <ul className='dropdown'>
            <li className='dropdown-item'><a href="/tools/ai-writer">Resume Builder</a>
            <p className='dropdown-description'>Create and edit your resume with our  resume builder.</p>
            </li>
            <li className='dropdown-item'><a href="/tools/grammar-checker">Resume Templates</a>
            <p className='dropdown-description'>Get started with the perfect Template for Your Resume</p>
            </li>
            
            <li className='dropdown-item'>
            <a href="/tools/plagiarism-checker">Resume Checker</a>
            <p className='dropdown-description'> Get Your Resume Checked and scored.</p>
            </li>
          </ul>
        </li>
        <li><a href="/dashboard">CV </a>
        <ul className='dropdown'>
            <li className='dropdown-item'><a href="/tools/ai-writer">CV Builder</a>
            <p className='dropdown-description'>Create and edit your CV with our  CV builder.</p>
            </li>
            <li className='dropdown-item'><a href="/tools/grammar-checker">CV Examples</a>
            <p className='dropdown-description'>Build your CV with our easy-to-use CV Examples</p>
            </li>
            
            <li className='dropdown-item'>
            <a href="/tools/plagiarism-checker">CV Helper</a>
            <p className='dropdown-description'> Learn How to Write Your CV.</p>
            </li>
          </ul>
        </li>
        <li><a href="/about">Cover Letter</a>
        <ul className='dropdown'>
            <li className='dropdown-item'><a href="/tools/ai-writer">Cover Letter Builder</a>
            <p className='dropdown-description'>Create and edit your cover letter with our  resume builder.</p>
            </li>
            <li className='dropdown-item'><a href="/tools/grammar-checker">Cover letter Templates</a>
            <p className='dropdown-description'>Build your cover letter with our easy-to-use cover letter builder.</p>
            </li>
            
            <li className='dropdown-item'>
            <a href="/tools/plagiarism-checker">cover letter helpr</a>
            <p className='dropdown-description'> learn how to write your cover letter </p>
            </li>
          </ul>
        </li>
       </ul>
       </div>
         <div className='header-buttons'>
          <button className='login-button'>Join</button>
         </div>
    </div>
  )
}

export default Header
