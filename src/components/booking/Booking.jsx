import React, { useReducer, useState } from 'react'
import '../booking/booking.css'
import { Link } from 'react-router-dom';

const initialstate = { adult: 0, child: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incrementAdults':
      return { ...state, adult: state.adult + 1 };
    case 'decrementAdults':
      return { ...state, adult: Math.max(0, state.adult - 1) };
    case 'incrementchild':
      return { ...state, child: state.child + 1 };
    case 'decrementchild':
      return { ...state, child: Math.max(0, state.child - 1) };
    case 'reset':
      return { ...initialstate };
    default:
      return state;
  }
}



const Booking = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

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
                <input type="date" className='start' required />
              </div>
              {/* departure  */}
              <div className='departure'>
                <p>Departure</p>
                <input type="date" className='dep-d' required />
              </div>
              {/* Guest  */}
              <div className='person'>
                <p className='guest'><i className='bi bi-person-add'></i> Guest</p>

                <div className='person-count' >
                  <h4 className='guest-text' onClick={click}>{state.adult + state.child} Guests</h4>

                  {/* Guest box  */}
                  <div className={`twobox ${iscardopen ? "open" : ""}`}>
                    <div className='Adult'>
                      <p>Adults 13+ </p>
                      <button className='btn1' onClick={() => dispatch({ type: 'incrementAdults' })}>+</button>
                      <h4>{state.adult}</h4>
                      <button className='btn3' onClick={() => dispatch({ type: 'decrementAdults' })}>-</button>
                    </div>

                    <div className='child'>
                      <p> Children 13- </p>
                      <button className='btn1' onClick={() => dispatch({ type: 'incrementchild' })}>+</button>
                      <h4>{state.child}</h4>
                      <button className='btn3' onClick={() => dispatch({ type: 'decrementchild' })}>-</button>
                    </div>

                    <button className='btn2' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
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
