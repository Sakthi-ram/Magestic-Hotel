import React, { useContext, useEffect, useMemo, useState } from 'react'
import '../BookingPage/BookingPage.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import Doublebed from '../../assets/Hotelrooms/Rooms-1.jpg'
import Singlebed from '../../assets/Hotelrooms/Rooms-2.jpg'
import Doublebed2 from '../../assets/Hotelrooms/Rooms-3.jpg'
import Doublebed3 from '../../assets/Hotelrooms/Rooms-4.jpg'
import Doublebed4 from '../../assets/Hotelrooms/Rooms-9.png'
import Doublebed5 from '../../assets/Hotelrooms/Rooms-6.jpg'
import Doublebed6 from '../../assets/Hotelrooms/Rooms-7.png'
import Doublebed7 from '../../assets/Hotelrooms/Rooms-10.png'
import BookingContext from '../booking/BookingContext'

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
        return cardimages.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.para.toLowerCase().includes(search.toLowerCase())
            const matchesPrice =
                (!min || user.price >= min) && (!max || user.price <= max);

            return matchesSearch && matchesPrice;
        })
    }, [search, min, max])

    //useContext- Person-Count(guest), Date-Picker(startDate, endDate)
    const { startDate, endDate, guest, setStartDate, setEndDate, setGuest } =
        useContext(BookingContext);
    const [iscardopen, setiscardopen] = useState(false);

    function click() {
        setiscardopen(prev => !prev);
    }

    const [isOpen, setIsOpen] = useState('');

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsOpen(''), 3000)
            return () => clearTimeout(timer);
        }
    })




    return (
        <>
            <section className='BP-header'>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-3 leftside'>

                            {/* Price Filter  */}
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
                                        <li><button type='submit' onClick={applyFilter} className='btn btn-primary color'><i className='bi bi-arrow-right'></i></button></li>
                                    </ul>
                                </div>
                            </div>

                            {/*Date Booking */}

                            <div className='bookingdate'>
                                <div className="bp-arrival">
                                    <h3>Arrival</h3>
                                    <DatePicker className='startdate'
                                        selected={startDate} onChange={setStartDate}  dateFormat="dd-MM-yyyy"/>
                                </div>
                                <div className="bp-departure">
                                    <h3>Departure</h3>
                                    <DatePicker className='enddate'
                                        selected={endDate} onChange={setEndDate}  dateFormat="dd-MM-yyyy"
                                    />
                                </div>

                                {/* Person Count*/}
                                <div className="bp-person">
                                    <h3 className='guestname'><i className='bi bi-person-add'></i> Guest</h3>
                                    <div className='guest-btn'>
                                        <div className='person-counts' >
                                            <h4 className='guests' onClick={click}>{guest.adult + guest.child} Guests</h4>

                                            {/* Guest box  */}
                                            <div className={`twobox ${iscardopen ? "open" : ""}`}>
                                                <div className='Adult'>
                                                    <p>Adults 13+ </p>

                                                    <button className='btn1' onClick={() => setGuest({
                                                        ...guest,
                                                        adult: guest.adult + 1
                                                    })}>+</button>

                                                    <h4>{guest.adult}</h4>

                                                    <button className='btn3' onClick={() => setGuest({
                                                        ...guest,
                                                        adult: Math.max(0, guest.adult - 1)
                                                    })}>-</button>

                                                </div>

                                                <div className='child'>
                                                    <p> Children 13- </p>
                                                    <button className='btn1' onClick={() => setGuest({
                                                        ...guest,
                                                        child: guest.child + 1
                                                    })}>+</button>
                                                    <h4>{guest.child}</h4>
                                                    <button className='btn3' onClick={() => setGuest({
                                                        ...guest,
                                                        child: Math.max(0, guest.child - 1)
                                                    })}>-</button>
                                                </div>

                                                <button className='btn2' onClick={() => setGuest({ adult: 0, child: 0 })}>Reset</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cards */}

                        <div className="col-sm-9  cardpage" >
                            {filteruser.length > 0 ? (
                                filteruser.map((item) => (
                                    <div className='bp-card' key={item.id} >
                                        <img src={item.image} alt={item.alt} />
                                        <h3>{item.name}</h3>
                                        <p>{item.para}</p>
                                        <p>{item.price}$</p>
                                        <button onClick={() => setIsOpen(() => `${item.name} Booked. The Amount is ${item.price}`)}>Book Now</button>
                                        <p className='totelAmt'></p>
                                    </div>
                                ))
                            ) : (
                                <p>No matching rooms found.</p>)}
                        </div>
                        {isOpen &&(
                        <div className='message'>
                            <p className='M-text'>{isOpen}</p>
                        </div>
                        )}





                    </div>
                </div>
            </section >

        </>
    )
}

export default BookingPage
