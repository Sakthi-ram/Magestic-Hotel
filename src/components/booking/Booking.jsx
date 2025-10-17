import React, { useContext, useState } from 'react'
import '../booking/booking.css'
import { Link } from 'react-router-dom';
import BookingContext from './BookingContext';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Booking = () => {
  
  //useContext- Person-Count(guest), Date-Picker(startDate, endDate)
  const { startDate, endDate, guest, setStartDate, setEndDate, setGuest } =
    useContext(BookingContext); 

  let difference = 0;
  if (startDate && endDate) {
    const timer = endDate.getTime() - startDate.getTime();
    difference = Math.ceil(timer / (1000 * 60 * 60 * 24));
    if (difference <= 0) difference = 1;
    console.log("totel Days" + difference);
  }


  const [iscardopen, setiscardopen] = useState(false);

  function click() {
    setiscardopen(prev => !prev);
  }


  return (
    <div className='booking' id='booking'>
      <div className='container'>
        <div className='row'>

          {/* card */}
          <div className='card'>
            <h1 className='textOne'> RENTAL BOOKING</h1>
            <div className='book'>

              {/* Arrival  */}
              <div className='arrival'>
                <p>Arrival</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText='Start Date'
                  className='start'
                  dateFormat="dd-MM-yyyy"
                  required />
              </div>

              {/* departure  */}
              <div className='departure'>
                <p>Departure</p>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText='End Date'
                  className='end'
                   dateFormat="dd-MM-yyyy"
                  required />
              </div>

              {/* Guest  */}
              <div className='person'>
                <p className='guest'><i className='bi bi-person-add'></i> Guest</p>

                <div className='person-count' >
                  <h4 className='guest-text' onClick={click}>{guest.adult + guest.child} Guests</h4>

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
              <div className='icon'>

                <Link to="/bookingpage" ><i className="bi bi-arrow-right-circle-fill"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Booking
