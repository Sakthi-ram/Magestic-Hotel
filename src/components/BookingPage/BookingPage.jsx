import React, { use, useContext, useEffect, useMemo, useState } from 'react'
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
import { get } from 'react-scroll/modules/mixins/scroller'

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

    // search box 
    const [search, setsearch] = useState("");
    const [isSearch, setIsSearch] = useState('');
    // Price Filter 
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [tempMin, setTempMin] = useState("");
    const [tempMax, setTempMax] = useState("");

    const applyFilter = () => {
        setMin(Number(tempMin));
        setMax(Number(tempMax));
        setsearch(isSearch);
    };

    // Card search & price filter min to max
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

    // person count card     
    const [iscardopen, setiscardopen] = useState(false);

    function click() {
        setiscardopen(prev => !prev);
    }

    // Days Calculate and price Calculate 
    const getDays = () => {
        if (!startDate && !endDate) return 1;

        const diffTime = Math.abs(endDate - startDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    }


    // book now message & Details box 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState({ name: '', price: '' });

    const book = (room) => {

        if (!startDate || !endDate || guest.adult === 0) {
            alert("Please select arrival and departure dates before booking.");
            return;
        }

        setSelectedRoom(room);
        setIsOpen(true);
    }
    const closeCard = () => {
        setIsOpen(false);
    }

    // useEffect(() => {
    //     if (isOpen) {
    //         const timer = setTimeout(() => setIsOpen(''), 3000)
    //         return () => clearTimeout(timer);
    //     }
    // })

    // filter toggle resposive

    const [filterOpen, setFilterOpen] = useState(false);

    const togglemenufilter = () => {
        setFilterOpen(!filterOpen);

    }

    // message for payment 
    const [message, setMessage] = useState('');

    const messagealert = () => {

        setMessage("payment Successfull")

        setTimeout(() => {
            setMessage("")
        }, 3000);
    }




    return (
        <>
            <section className='BP-header'>
                <div className="container">
                    <div className="row gx-0">

                        <div className='filter-menuicon' onClick={togglemenufilter}>
                            <i className={filterOpen ? "bi bi-x-lg" : "bi bi-filter-right"}>Filter</i>
                        </div>
                        <div className={`col-lg-6  leftside ${filterOpen ? 'filterOpen' : ''}`} >

                            {/* 1.Search box */}
                            <div className='search-card'>
                                <input type="search" className='Bookingpage-input'
                                    value={isSearch} onChange={(e) => setIsSearch(e.target.value)} placeholder=' Search...' />
                            </div>
                            {/* 2.price filter */}
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

                            {/*Date Booking 3*/}

                            <div className='bookingdate'>
                                <div className="bp-arrival">
                                    <h3>Arrival</h3>
                                    <DatePicker className='startdate'
                                        selected={startDate} onChange={setStartDate} dateFormat="dd-MM-yyyy" placeholderText='StartDate ' />
                                </div>
                                <div className="bp-departure">
                                    <h3>Departure</h3>
                                    <DatePicker className='enddate'
                                        selected={endDate} onChange={setEndDate} dateFormat="dd-MM-yyyy" placeholderText='EndDate '
                                    />
                                </div>

                                {/* Person Count 4 */}
                                <div className="bp-person">
                                    <h3 className='guestname'><i className='bi bi-person-add'></i> Guest</h3>
                                    <div className='guest-btn'>
                                        <div className='person-counts' >
                                            <h4 className='guests' onClick={click}>{guest.adult + guest.child} Guests</h4>

                                            {/* Guest box  */}
                                            <div className={`twobox ${iscardopen ? "opened" : ""}`}>
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

                        <div className=" col-12 col-lg-9 cardpage" >
                            {filteruser.length > 0 ? (
                                filteruser.map((item) => (
                                    <div className='bp-card' key={item.id} >
                                        <img src={item.image} alt={item.alt} />
                                        <h3>{item.name}</h3>
                                        <p>{item.para}</p>
                                        <p>{item.price}$</p>
                                        <button onClick={() => book(item)}>Book Now</button>
                                    </div>
                                ))
                            ) : (
                                <p> No matching rooms found. </p>)}
                        </div>

                        {/* <div className='message'>
                                <p className='M-text'>{isOpen}</p>
                            </div> */}


                    </div>
                </div>

                {/* Form for Details and Payment */}

                <div className={`Details ${isOpen ? "openDetails" : ''}`}>
                    <form>
                        <fieldset>
                            <legend>Details</legend>
                            <i className='bi bi-x-lg' onClick={closeCard}> </i>
                            <label htmlFor="fname" aria-autocomplete='on'>First name : </label>
                            <input type="text" id='fname' placeholder='Type Your First Name' required /><br />

                            <label htmlFor="lname" aria-autocomplete='on'> Last name : </label>
                            <input type="text" id='lname' placeholder='Type Your Last Name' required /><br />

                            <label htmlFor="phno" aria-autocomplete='on'> Phone Number : </label>
                            <input type="text" id='phno' placeholder='Type Your Phone No.' required /><br />

                            <label htmlFor="nameofroom" >Room : </label>
                            <input type="text" disabled id='nameofroom' value={selectedRoom.name} /><br />

                            <label htmlFor="price">Price : </label>
                            <input type="text" disabled id='price' value={selectedRoom.price} /><br />

                            <label>Total Days:</label>
                            <input type="text" disabled value={getDays()} />

                            <label>Total Amount:</label>
                            <input type="text" disabled value={selectedRoom.price * getDays()} />

                            <label htmlFor="upi-id" aria-autocomplete='on'> UPI ID : </label>
                            <input type="text" id='upi-id' placeholder='Type Your UPI ID' required /><br />
                            <button type='submit' onClick={messagealert} >Payment</button>
                        </fieldset>
                    </form>
                </div>
                <div className='msg'>
                    <p>{message}</p>
                </div>

            </section >

        </>
    )
}

export default BookingPage
