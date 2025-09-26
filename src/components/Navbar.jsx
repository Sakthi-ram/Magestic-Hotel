import React, {  useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'


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
               <HashLink smooth to="/#"><h3>MAGESTIC HOTEL</h3></HashLink>
            </div>
            <div className='col-md-4'>
              <nav className='navbar'>
                <div className='menuicon' onClick={togglemenu}>
                  <i className={isopen ? "bi bi-x-lg" : "bi bi-filter-right"}></i>
                </div>
                <ul className={isopen ? 'navlinks active':'navlinks'}>
                  <li><HashLink smooth to="/#explore">Explore</HashLink></li>
                  <li><HashLink smooth to="/#booking">Booking</HashLink></li>
                  <li><HashLink smooth to="/#rooms">Rooms</HashLink></li>
                  <li><HashLink smooth to="/#about">About</HashLink></li>
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
