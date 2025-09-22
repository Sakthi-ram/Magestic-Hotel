import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './components/style.css'
import Navbar from './components/Navbar'
import Explore from './components/Explore'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Booking from './components/booking/Booking'
import About from './components/About'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Home />
    <Booking />
    <Explore />
    <Rooms />
    <About/>
    </BrowserRouter>
   
    </>
  )
}

export default App
