import React, { useMemo, useState } from 'react'
import '../BookingPage/BookingPage.css'
import Doublebed from '../../assets/Hotelrooms/Rooms-1.jpg'
import Singlebed from '../../assets/Hotelrooms/Rooms-2.jpg'
import Doublebed2 from '../../assets/Hotelrooms/Rooms-3.jpg'
import Doublebed3 from '../../assets/Hotelrooms/Rooms-4.jpg'
import Doublebed4 from '../../assets/Hotelrooms/Rooms-9.png'
import Doublebed5 from '../../assets/Hotelrooms/Rooms-6.jpg'
import Doublebed6 from '../../assets/Hotelrooms/Rooms-7.png'
import Doublebed7 from '../../assets/Hotelrooms/Rooms-10.png'

const BookingPage = () => {

    const cardimages = [
        { id: 1, image: Doublebed, alt: "DoubleBedRoom", name: "Double Bed with OutSide view", para: "2 person and 1 child", price: 200 },
        { id: 2, image: Singlebed, alt: "TripleBedRoom", name: "Triple Bed with OutSide view", para: "3 person and 2 child", price: 300 },
        { id: 3, image: Doublebed2, alt: "DoubleBedRoom", name: "Double Bed with BathDub", para: "2 person and 1 child", price: 200 },
        { id: 4, image: Doublebed3, alt: "DoubleBedRoom", name: "Luxury rooms", para: "2 person and 1 child", price: 600 },
        { id: 5, image: Doublebed4, alt: "DoubleBedRoom", name: "Double Bed with OutSide view", para: "2 person and 1 child", price: 200 },
        { id: 6, image: Doublebed5, alt: "DoubleBedRoom", name: "Double Bed with OutSide view", para: "2 person and 1 child", price: 250 },
        { id: 7, image: Doublebed6, alt: "DoubleBedRoom", name: "Quadruple Bed with OutSide view", para: "4 person and 2 child", price: 500 },
        { id: 8, image: Doublebed7, alt: "DoubleBedRoom", name: "Quadruple Bed with OutSide view", para: "2 person and 1 child", price: 500 }
    ]

    const [search, setsearch] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [tempMin, setTempMin] = useState("");
    const [tempMax, setTempMax] = useState("");

    const applyFilter = () => {
        setMin(Number(tempMin));
        setMax(Number(tempMax));
    };

    const filteruser = useMemo(() => {
        console.log("Flitered");
        return cardimages.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.para.toLowerCase().includes(search.toLowerCase())
            const matchesPrice =
                (!min || user.price >= min) && (!max || user.price <= max);

            return matchesSearch && matchesPrice;
        })
    }, [search, min, max])


    return (
        <>
            <section className='BP-header'>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-3 leftside'>
                            <input type="search" className='Bookingpage-input'
                                value={search} onChange={(e) => setsearch(e.target.value)} placeholder=' Search...' />
                            <div className='pricefilter'>
                                <h4>Price</h4>
                                <p>Your Budget</p>
                                <div className='budget'>
                                    <ul>
                                        <li><input type="number" placeholder='min' value={tempMin} onChange={(e) => setTempMin(e.target.value)} /></li>
                                        <li><p>to</p></li>
                                        <li><input type="number" placeholder='max' value={tempMax} onChange={(e) => setTempMax(e.target.value)} /></li>
                                        <li><button type='submit' onClick={applyFilter} className='btn btn-primary'><i className='bi bi-arrow-right'></i></button></li>
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
                                {/* <div className="bp-person">
                                    <h4><i className='bi bi-person-add'></i> Guest</h4>
                                    <p className='guest-text'>Guest</p>
                                </div> */}
                            </div>
                        </div>

                        {/* Room Cards */}

                        <div className="col-sm-9  cardpage" >
                            {filteruser.length > 0 ? (
                                filteruser.map((item) => (
                                    <div className='bp-card' key={item.id} >
                                        <img src={item.image} alt={item.alt} />
                                        <h3>{item.name}</h3>
                                        <p>{item.para}</p>
                                        <p>{item.price}$</p>
                                        <button>Book Now</button>

                                    </div>
                                ))
                            ) : (
                                <p>No matching rooms found.</p>)}
                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}

export default BookingPage
