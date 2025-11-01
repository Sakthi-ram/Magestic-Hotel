import React from 'react'
import 'react-bootstrap'
import '../Services/Services.css'
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap'
import act1 from '../../assets/Hotelactivites/act-1.jpg'
import act2 from '../../assets/Hotelactivites/act-2.jpg'
import act3 from '../../assets/Hotelactivites/act-3.jpg'
import act4 from '../../assets/Hotelactivites/act-4.jpg'
import act5 from '../../assets/Hotelactivites/act-5.jpg'
import act6 from '../../assets/Hotelfood/food-1.jpg'
import act7 from '../../assets/Hotelfood/food-2.jpg'
import act8 from '../../assets/Hotelfood/food-3.jpg'
import act9 from '../../assets/Hotelfood/food-4.jpg'
import act10 from '../../assets/Hotelfood/food-5.jpg'
import act11 from '../../assets/Hotelfood/food-6.jpg'

const Rooms = () => {
  const carouselimagesOthers = [
    { id: 1, image: act1, alt: "act-1", caption: "Family Activities" },
    { id: 2, image: act2, alt: "act-2", caption: "Work-Outs" },
    { id: 3, image: act3, alt: "act-3", caption: "Pool Games" },
    { id: 4, image: act4, alt: "act-4", caption: "Children Games" },
    { id: 5, image: act5, alt: "act-5", caption: "Children Games" },

  ]
  const carouselDinning = [

    { id: 1, image: act6, alt: "act-6", caption: "Dinning" },
    { id: 2, image: act7, alt: "act-7", caption: "Dosa" },
    { id: 3, image: act8, alt: "act-8", caption: "Paniyaram" },
    { id: 4, image: act9, alt: "act-9", caption: "Spiecy Foods" },
    { id: 5, image: act10, alt: "act-10", caption: "Sweet paniyaram" },
    { id: 6, image: act11, alt: "act-11", caption: "Rise Meals" },


  ]

  return (
    <>
      <div className='service'>

        <div className='service-header'>
          <h1>Premium Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, molestiae!</p>
        </div>

        {/* 1st carousel with text */}
        <div className=' games container '>
          <div className='row gx-0'>

            <div className='service-text  col-12 col-lg-5 mx-3'>
              <h4>AMENITIES</h4>
              <h2>Family-Friendly Fun</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aperiam quaerat facere eaque consectetur nostrum. Reprehenderit ea placeat facere unde aut eos dolore. Cupiditate cum enim officiis eligendi molestiae! Accusamus, quos quia? Voluptate eaque nostrum iusto? Magnam velit fugiat in asperiores iure repellat nemo facere sapiente eos a, commodi laboriosam inventore rem cupiditate suscipit ipsum quibusdam sequi possimus delectus temporibus est. Architecto voluptatibus veniam quo officia perspiciatis eum, praesentium iure dicta ut! A modi, ipsam iste dolor nobis illum, beatae nulla nesciunt dolorem, culpa voluptatum vitae labore dignissimos. Architecto nostrum accusantium maiores incidunt aperiam blanditiis, recusandae sint eum ab dolorem!</p>
            </div>

            <div className='service-Others col-12 col-lg-6 mx-4'>
              <Carousel>
                {carouselimagesOthers.map((item) => (
                  <CarouselItem  >
                    <div key={item.id} >
                      <img src={item.image} alt={item.alt} className='slider-img' />
                      <CarouselCaption><h2 className='slider-caption'>{item.caption}</h2></CarouselCaption>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>

          </div>

        </div>

        {/* 2nd carousel with text */}
        <div className='dinning container '>
          <div className='row gx-0'>
            <div className='service-text1 col-12 col-lg-5 mx-3'>
              <h4>DINNING</h4>
              <h2>Dishes</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aperiam quaerat facere eaque consectetur nostrum. Reprehenderit ea placeat facere unde aut eos dolore. Cupiditate cum enim officiis eligendi molestiae! Accusamus, quos quia? Voluptate eaque nostrum iusto? Magnam velit fugiat in asperiores iure repellat nemo facere sapiente eos a, commodi laboriosam inventore rem cupiditate suscipit ipsum quibusdam sequi possimus delectus temporibus est. Architecto voluptatibus veniam quo officia perspiciatis eum, praesentium iure dicta ut! A modi, ipsam iste dolor nobis illum, beatae nulla nesciunt dolorem, culpa voluptatum vitae labore dignissimos. Architecto nostrum accusantium maiores incidunt aperiam blanditiis, recusandae sint eum ab dolorem!</p>
            </div>
            <div className=' col-12 col-lg-6 mx-4'>
              <Carousel>
                {carouselDinning.map((item) => (
                  <CarouselItem  >
                    <div className='slider ' key={item.id} >
                      <img src={item.image} alt={item.alt} className='slider-img' />
                      <CarouselCaption><h2 className='slider-caption'>{item.caption}</h2></CarouselCaption>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Rooms
