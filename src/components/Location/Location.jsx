import React from 'react'
import '../Location/Location.css'

const Location = () => {
  return (
    <section className='map-location'>
      <div className='map-text'>
      <h2 className='text1'>
        Our Location
      </h2>
      <p >
        Find us easily on Google Maps below 👇
      </p>
      </div>

      <div className='map'>
        <iframe className='frame'
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d137138.70724722513!2d78.12671557064726!3d9.942410449390348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759733049452!5m2!1sen!2sin" 
          width="380"
          height="230"
          style={{
            border: 0,
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hotel Location"
        ></iframe>
      </div>
    </section>
  )
}

export default Location
