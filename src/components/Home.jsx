import React from 'react'
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap'
import img1 from '../assets/images/main_slider1.png'


const Home = () => {

  return (
    <>
      <div className='home'>
        <div className='home-img'>
          <img src={img1} alt='Home-img' />
        </div>
      </div>

    </>
  )
}

export default Home
