import { Outlet } from 'react-router-dom'
import './Customer.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// In index.js or App.js


function Customer() {

  return (
    <>
  <Navbar/>
  <Outlet/>
  <Footer/>

      
    </>
  )
}

export default Customer
