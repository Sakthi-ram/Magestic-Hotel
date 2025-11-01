import React from 'react'
import '../Explore/Explore.css'

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/explore img2.jpg'
import img3 from '../../assets/images/explore img3.jpg'
import img4 from '../../assets/images/explore img4.jpg'
import bgimg1 from '../../assets/images/explore img1.jpg'



const Explore = () => {
  return (
    <>
      <div className='explore' >



        <div className=' container'>
          <div className='row explore-text'>
            <div className='col-12 col-6 col-4 text-center '>
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <h1>Premium Hotel Rooms</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit saepe ab, aut pariatur ducimus excepturi delectus est cupiditate, aliquam incidunt, veniam quia nobis at quaerat laborum doloribus sit eligendi enim?</p>
            </div>
          </div>
        </div>

        <div className='bgimg'></div>
        <div className='container-fluid mx-0 px-0'>
          <div className='row gx-0  explore-img '>

            <div className='col-12 col-sm-6 col-md-3 mx-2  cardOne'>
              <img src={img1} alt="img1" className='img1' />
              <p className='text1'>PLACE TO STAY</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 mx-2 card2  ' >
              <img src={img2} alt="img2" className='img2' />
              <p className='text2'>DINNING</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 mx-2  card3'>
              <img src={img3} alt="img3" className='img3' />
              <p className='text3'>FAMILY ACTIVITIES</p>
            </div>
            <div className='col-12 col-sm-6 col-md-3 mx-2  card4 '>
              <img src={img4} alt="img4" className='img4' />
              <p className='text4'>WEDDING PLACE</p>
            </div>


          </div>
        </div>
        <div className='explore-footer'>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <a href="#explore"><button className='explore-btn btn btn-primary'>EXPLORE MORE</button></a>
        </div>
      </div>
    </>
  )
}

export default Explore
