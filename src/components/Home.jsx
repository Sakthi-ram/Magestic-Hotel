import React from 'react'
import Explore from './Explore/Explore'
import Booking from './booking/Booking'
import Service from '../Services/Services'
import About from './About/About'
import Location from './Location/Location'
import BookingPage from './BookingPage/BookingPage'

const Home = () => {

  return (
    <>
      <div className='home'>
        <div className='home-text'>
          <h1>Magestic Hotel</h1>
          <h3 >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, necessitatibus.</h3>
        </div>
      </div>
      <section id='booking'> 
        <Booking />
      </section>
      <section id='explore'>
        <Explore/>
      </section>
      <section id='service'>
        <Service />
      </section>
      <section id='about'>
        <About />
      </section>
      <section >
        <Location />
      </section>
       
       


    </>
  )
}

export default Home
