import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Majestic_Hotel_hd.png'

const Navbar = () => {
  return (
    <>
      <section className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 logo'>
              <a href="#"> <img src={logo} alt="Magestic-logo" /></a>
            </div>
            <div className='col-md-4'>
              <nav className='navbar'>
              <ul className='navlinks '>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            </div>
            <div className='col-md-3'>
              <input type="search" className='input' />
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Navbar
