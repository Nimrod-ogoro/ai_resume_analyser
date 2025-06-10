import React from 'react'

const Features = ({icon, title, description}) => {
  return (
    <div className='feature-card'>
       
    <div className='icon'>{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
          

    </div>
  )
}
        

export default Features
// This component is used to display individual feature cards in the application.