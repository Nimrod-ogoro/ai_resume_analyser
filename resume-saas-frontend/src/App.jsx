import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Upload from './pages/Upload'
import ResumeBuilder from './pages/resumeBuilder'
import ResumeChecker from './pages/ResumeCheker'
import CVWriter from './pages/CvWriter'
import CoverLetterWriter from './pages/CoverLetter'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './dashboard/Dashboard'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/ResumeChecker" element={<ResumeChecker />} />
        <Route path="/CvWriter" element={<CVWriter />} />
        <Route path="/CoverLetter" element={<CoverLetterWriter />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup"  element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
