import React, { createContext, useState } from 'react'

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [guest, setGuest] = useState({ adult: 0, child: 0 }); 

    return (

        <BookingContext.Provider
            value={{
                startDate,
                endDate,
                guest,

                setStartDate,
                setEndDate,
                setGuest,

            }}>
            {children}
        </BookingContext.Provider>

    )
}

export default BookingContext;
