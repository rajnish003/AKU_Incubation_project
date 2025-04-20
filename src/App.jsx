import React from 'react'
import HomePage from './pages/HomePage'
import HeaderNavBar from './components/HeaderNavBar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import { Route, Routes, useLocation } from "react-router-dom";
import ApplyNow from './pages/ApplyNow'
import ContactUs from './components/ContactUs'


const App = () => {
  return (
    <div> 
        <HeaderNavBar/>


        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/applynow" element={ <ApplyNow/>}/>
          <Route path="/contactUs" element={ <ContactUs/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

       
        <Footer/>
    </div>
  )
}

export default App
