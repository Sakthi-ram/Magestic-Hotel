import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './components/style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </Router>
   
    </>
  )
}

export default App
