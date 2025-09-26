import React from 'react'
import Explore from './Explore/Explore'
import Booking from './booking/Booking'
import Rooms from './Rooms'
import About from './About'

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
      <section id='rooms'>
        <Rooms />
      </section>
      <section id='about'>
        <About />
      </section>


    </>
  )
}

export default Home
