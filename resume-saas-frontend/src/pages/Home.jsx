import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <div className='home-container'>
         <Header/>
    </div>
    <div className='landing-sect'>
       <h1><em>Professional Resume & Cover Letter<br/> with the ultimate resume builder</em></h1>
       <p>Get your resume and cover letter ready in minutes with our AI-powered resume builder. </p>
       <button className='btn btn-primary'>Get Started</button>
    </div>
    </>
  )
}

export default Home
