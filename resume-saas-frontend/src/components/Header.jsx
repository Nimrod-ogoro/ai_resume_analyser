{/*import React from 'react'
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className='home-container'>
      <img src="/img/logo.png" alt="ResumeGenius AI Logo" className="logo" />
     <p>Resume Genius AI</p>
       <div className={`header-links ${menuOpen ? 'open' : ''}`}><ul className='nav-links'>
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
          <div className='hamburger' onClick={toggleMenu}>
            {menuOpen ? <IoMdMenu className='menu-icon-open' /> : <IoClose className='menu-icon-close' />}
            </div>
    </div>
  )
}

export default Header*/}
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null); // reset dropdown when closing
  };
  const closeMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  const openDropdown = (key) => {
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className='home-container'>
        <div className='brand'>
          <img src="/img/logo.png" alt="ResumeGenius AI Logo" className="logo" />
          <p>Resume Genius AI</p>
        </div>

        <div className='header-links'>
          <ul className='nav-links'>
            <li><a href="/tools">Tools</a>
              <ul className='dropdown'>
                <li className='dropdown-item'><a href="/tools/ai-writer">Resume Builder</a><p className='dropdown-description'>Create and edit your resume with our resume builder.</p></li>
                <li className='dropdown-item'><a href="/tools/grammar-checker">CV Builder</a><p className='dropdown-description'>Build your CV with our easy-to-use CV builder.</p></li>
                <li className='dropdown-item'><a href="/tools/plagiarism-checker">Resume Checker</a><p className='dropdown-description'>Get your resume checked and scored.</p></li>
              </ul>
            </li>

            <li><a href="/ResumeBuilder">Resume</a>
              <ul className='dropdown'>
                <li className='dropdown-item'><a href="/ResumeBuilder">Resume Builder</a><p className='dropdown-description'>Create and edit your resume with our resume builder.</p></li>
                <li className='dropdown-item'><a href="/tools/grammar-checker">Resume Templates</a><p className='dropdown-description'>Get started with the perfect template for your resume.</p></li>
                <li className='dropdown-item'><a href="/ResumeChecker">Resume Checker</a><p className='dropdown-description'>Get your resume checked and scored.</p></li>
              </ul>
            </li>

            <li><a href="/CvWriter">CV</a>
              <ul className='dropdown'>
                <li className='dropdown-item'><a href="/tools/ai-writer">CV Builder</a><p className='dropdown-description'>Create and edit your CV with our CV builder.</p></li>
                <li className='dropdown-item'><a href="/tools/grammar-checker">CV Examples</a><p className='dropdown-description'>Build your CV with our easy-to-use CV examples.</p></li>
                <li className='dropdown-item'><a href="/tools/plagiarism-checker">CV Helper</a><p className='dropdown-description'>Learn how to write your CV.</p></li>
              </ul>
            </li>

            <li><a href="/CoverLetter">Cover Letter</a>
              <ul className='dropdown'>
                <li className='dropdown-item'><a href="/tools/ai-writer">Cover Letter Builder</a><p className='dropdown-description'>Create and edit your cover letter with our builder.</p></li>
                <li className='dropdown-item'><a href="/tools/grammar-checker">Templates</a><p className='dropdown-description'>Use our templates to start writing your cover letter.</p></li>
                <li className='dropdown-item'><a href="/tools/plagiarism-checker">Cover Letter Helper</a><p className='dropdown-description'>Learn how to write your cover letter.</p></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className='header-buttons'>
          <button className='header-buttons login-button'>Join</button>
        </div>

        <div className='hamburger' onClick={toggleMenu}>
          {menuOpen ? <IoClose className='menu-icon' /> : <IoMdMenu className='menu-icon' />}
        </div>
      </div>

      {/* Overlay Menu */}
      {menuOpen && !activeDropdown && (
        <div className="overlay-menu">
            <button className="close-btn" onClick={closeMenu}>Back</button>
          <ul className="overlay-links">
            <li onClick={() => openDropdown('tools')}>Tools</li>
            <li onClick={() => openDropdown('resume')}>Resume</li>
            <li onClick={() => openDropdown('cv')}>CV</li>
            <li onClick={() => openDropdown('coverletter')}>Cover Letter</li>
            <li><button className=' header-buttons'>Join</button></li>
          </ul>
        </div>
      )}

      {/* Dropdown Overlay View */}
      {activeDropdown && (
        <div className="dropdown-overlay">
          <button className="close-btn" onClick={closeDropdown}>Back</button>
          <ul>
            {activeDropdown === 'tools' && (
              <>
                <li><a href="/tools/ai-writer">Resume Builder</a></li>
                <li><a href="/tools/grammar-checker">CV Builder</a></li>
                <li><a href="/tools/plagiarism-checker">Resume Checker</a></li>
              </>
            )}
            {activeDropdown === 'resume' && (
              <>
                <li><a href="/tools/ai-writer">Resume Builder</a></li>
                <li><a href="/tools/grammar-checker">Resume Templates</a></li>
                <li><a href="/tools/plagiarism-checker">Resume Checker</a></li>
              </>
            )}
            {activeDropdown === 'cv' && (
              <>
                <li><a href="/tools/ai-writer">CV Builder</a></li>
                <li><a href="/tools/grammar-checker">CV Examples</a></li>
                <li><a href="/tools/plagiarism-checker">CV Helper</a></li>
              </>
            )}
            {activeDropdown === 'coverletter' && (
              <>
                <li><a href="/tools/ai-writer">Cover Letter Builder</a></li>
                <li><a href="/tools/grammar-checker">Templates</a></li>
                <li><a href="/tools/plagiarism-checker">Cover Letter Helper</a></li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
