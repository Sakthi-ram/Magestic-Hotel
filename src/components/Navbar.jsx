import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Majestic_Hotel_hd.png'

const Navbar = () => {
  const [isopen,setIsopen]=useState(false);
  const togglemenu=()=>{
    setIsopen(!isopen);
  }
  return (
    <>
      <section className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 logo'>
               <a href="#"><img src={logo} alt="Magestic-logo" /></a>
            </div>
            <div className='col-md-4'>
              <nav className='navbar'>
                <div className='menuicon' onClick={togglemenu}>
                  <i className={isopen ? "bi bi-x-lg" : "bi bi-filter-right"}></i>
                </div>
                <ul className={isopen ? 'navlinks active':'navlinks'}>
                  <li><a href="#">Home</a></li>
                  <li><a href="#explore">Explore</a></li>
                  <li><a href="#rooms">Rooms</a></li>
                  <li><a href="#booking">Booking</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </nav>
            </div>
            <div className='col-md-4'>
              <input type="search" className='input' placeholder=' Search...' />
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Navbar
