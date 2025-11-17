import React, { useState } from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const scrollWithOffset = (offset) => (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = offset; // 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const togglemenu = () => {
    setIsopen(!isopen);
  }


  return (
    <>
      <section className='header'>
        <div className='container mx-0 px-0'>
          <div className='row'>
            <div className=' col-md-4 logo'>
              <HashLink smooth to="/#"><h3>MAGESTIC HOTEL</h3></HashLink>
            </div>
            <div className=' col-md-4'>
              <div className='menuicon' onClick={togglemenu}>
                <i className={isopen ? "bi bi-x-lg" : "bi bi-filter-right"}></i>
              </div>
              <nav className='navbar'>

                <ul className={`navlinks ${isopen ? 'active' : ''}`}>
                  <li><HashLink smooth to="/#explore" scroll={scrollWithOffset(200)}>Explore</HashLink></li>
                  <li><HashLink smooth to="/#booking" scroll={scrollWithOffset(-350)}>Booking</HashLink></li>
                  <li><HashLink smooth to="/#services" scroll={scrollWithOffset(-100)}>Service</HashLink></li>
                  <li><HashLink smooth to="/#about" scroll={scrollWithOffset(10)}>About</HashLink></li>
                </ul>
              </nav>
            </div>
            <div className=" col-md-4 contact-nav">
              <a href="mailto:sakthiramb975@gmail.com" title='sakthiramb975@gmail.com' className={isopen ? 'mail active' : 'mail'}><i className="bi bi-envelope-at-fill"></i></a>
              <a href="tel:6380728206" title='6380728206' className={isopen ? 'moblie active' : 'mobile'}><i className="bi bi-telephone-plus-fill"></i></a>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Navbar
