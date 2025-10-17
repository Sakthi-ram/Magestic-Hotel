import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './components/style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BookingPage from './components/BookingPage/BookingPage'
import {BookingProvider} from './components/booking/BookingContext'


function App() {

  return (
    <>
      <BookingProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Bookingpage' element={<BookingPage />} />
          </Routes>

        </Router>
      </BookingProvider>
    </>
  )
}

export default App
