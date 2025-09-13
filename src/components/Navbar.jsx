import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Majestic_Hotel_hd.png'

const Navbar = () => {
  return (
    <>
      <section className='header'>
        <div className='logo'>
          <a href="#"> <img src={logo} alt="Magestic-logo" /></a>
        </div>
        <nav className='navbar'>
          <ul className='navlinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div>

        </div>
      </section>


    </>
  )
}

export default Navbar
