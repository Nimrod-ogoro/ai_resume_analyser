import React from 'react'

const Testimonials = ({ icon, name, feedback }) => {
  return (
    <div className='testimonials-section'>
        <h2>Testimonials</h2>
        <div className='testimonials-card'>
            <div className='testimonial-card'>
                <div className='testimonial-icon'>{icon}</div>
                <h3>{name}</h3>
                <p>{feedback}</p>
            </div>
        </div>
    </div>
  )
}
       

export default Testimonials
