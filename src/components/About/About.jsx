import React from 'react'
import '../About/About.css'

const About = () => {
  return (
    <div className='footer'>
      <div className='about'>
        <div className='about-text'>
          <h1>Stay In the Know</h1>
          <p>Subscribe to MagesticHotel newsletter to receive updates about events and activities, the latest news and special offers directly to your inbox.</p>
          <input type="text" placeholder='Enter Your Email' className='about-input' />
          <button className='about-btn' type='submit'>SUBSCRIBE</button>
        </div>
        <div className='about-icon'>
          <h3>Follow Us On Social</h3>
          <i className='bi bi-facebook'></i>
          <i className='bi bi-instagram'></i>
          <a href="https://www.linkedin.com/in/sakthi-web-dev/" target='_blank' className='linkedin'> <i className="bi bi-linkedin"></i></a>
          <i className="bi bi-github"></i>
          <i className="bi bi-google"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </div>
      <div className='contact'>
        <h4>CONTACT US</h4>
        <p className='add'>Magestic Hotel </p>
        <p className='add1'>No.6 , Rathinapuram, T.P.K Road, Madurai-11</p>
        <div className='others'>
          <p className='phone'>Phone Number: 63807 XXXXX </p>
          <p className='email'>Email : sakthiramb975@gmail.com</p>
        </div>
      </div>
      <div className='copyright'>
        @ Developed by SAKTHI B | All rights reserved
      </div>


    </div>
  )
}

export default About
