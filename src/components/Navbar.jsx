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
              <Link to='/'> <img src={logo} alt="Magestic-logo" /></Link>
            </div>
            <div className='col-md-4'>
              <nav className='navbar'>
                <div className='menuicon' onClick={togglemenu}>
                  <i className={isopen ? "bi bi-x-lg" : "bi bi-filter-right"}></i>
                </div>
                <ul className={isopen ? 'navlinks active':'navlinks'}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/explore">Explore</Link></li>
                  <li><Link to="/rooms">Rooms</Link></li>
                  <li><Link to="/booking">Booking</Link></li>
                  <li><Link to="/about">About</Link></li>
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
