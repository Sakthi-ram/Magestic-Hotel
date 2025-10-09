import React from 'react'
import '../BookingPage/BookingPage.css'
import Doublebed from '../../assets/Hotelrooms/Rooms-1.jpg'
import Singlebed from '../../assets/Hotelrooms/Rooms-2.jpg'
import Doublebed2 from '../../assets/Hotelrooms/Rooms-3.jpg'
import Doublebed3 from '../../assets/Hotelrooms/Rooms-4.jpg'
import Doublebed4 from '../../assets/Hotelrooms/Rooms-9.png'
import Doublebed5 from '../../assets/Hotelrooms/Rooms-6.jpg'
import Doublebed6 from '../../assets/Hotelrooms/Rooms-7.png'
import Doublebed7 from '../../assets/Hotelrooms/Rooms-10.png'
import About from '../About/About'

const BookingPage = () => {

    const cardimages=[
        {id:1,image:Doublebed,alt:"DoubleBedRoom", name:"Double Bed with OutSide view",para:"2 person and 1 child",},
        {id:2,image:Singlebed,alt:"TripleBedRoom", name:"Triple Bed with OutSide view",para:"3 person and 2 child",},
        {id:3,image:Doublebed2,alt:"DoubleBedRoom", name:"Double Bed with BathDub",para:"2 person and 1 child",},
        {id:4,image:Doublebed3,alt:"DoubleBedRoom", name:"Luxury rooms",para:"2 person and 1 child",},
        {id:5,image:Doublebed4,alt:"DoubleBedRoom", name:"Double Bed with OutSide view",para:"2 person and 1 child",},
        {id:6,image:Doublebed5,alt:"DoubleBedRoom", name:"Double Bed with OutSide view",para:"2 person and 1 child",},
        {id:7,image:Doublebed6,alt:"DoubleBedRoom", name:"Quadruple Bed with OutSide view",para:"4 person and 2 child",},
        {id:8,image:Doublebed7,alt:"DoubleBedRoom", name:"Quadruple Bed with OutSide view",para:"2 person and 1 child",}
    ]

    
    return (
        <>
            <section className='BP-header'>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-3 leftside'>
                            <input type="text" className='Bookingpage-input ' placeholder=' Search...' />
                            <div className='pricefilter'>
                                <h4>Price</h4>
                                <p>Your Budget</p>
                                <div className='budget'>
                                    <ul>
                                        <li><input type="number"  placeholder='min' /></li>
                                        <li><p>to</p></li>
                                        <li><input type="number" placeholder='max' /></li>
                                        <li><button type='submit' className='btn btn-primary'><i className='bi bi-arrow-right'></i></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='bedsize'>
                                <h2>Bed Size</h2>
                                <div className='diff'>
                                    <li> <input type="checkbox" /></li>
                                    <li><p>Double</p></li>
                                    <li><input type="checkbox" /></li>
                                    <li><p>Single</p></li>
                                </div>
                            </div>
                            <div className='bookingdate'>
                                <div className="bp-arrival">
                                    <h3>Arrival</h3>
                                    <input type="date" />
                                </div>
                                <div className="bp-departure">
                                    <h3>Departure</h3>
                                    <input type="date" />
                                </div>
                                <div className="bp-person">
                                    <h4><i className='bi bi-person-add'></i> Guest</h4>
                                    <p className='guest-text'>Guest</p>
                                </div>
                            </div>
                        </div>

                        {/* Room Cards */}
                        <div className="col-sm-9     cardpage">
                            {cardimages.map((item)=>(
                            <div className='bp-card' key={item.id}>
                                <img src={item.image} alt={item.alt} />
                                <h3>{item.name}</h3>
                                <p>{item.para}</p>
                                <button>Book Now</button>
                                
                            </div>
                        ))}
                        </div>

                    </div>
                </div>
            </section>
           
        </>
    )
}

export default BookingPage
