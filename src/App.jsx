import React from 'react'
import HomePage from './pages/HomePage'
import HeaderNavBar from './components/HeaderNavBar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import { Route, Routes, useLocation } from "react-router-dom";
import ApplyNow from './pages/ApplyNow'
import ContactUs from './components/ContactUs'
import About_BiharStartup from './pages/About_BiharStartup'
import MouWithTie from './pages/MouWithTie'
import UniversityOutreach from './pages/UniversityOutreach'
import IncubationApplyForm from './pages/IncubationApplyForm'


const App = () => {
  return (
    <div> 
        <HeaderNavBar/>


        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/applynow" element={ <ApplyNow/>}/>
          <Route path="/contactUs" element={ <ContactUs/>}/>
          <Route path="/startup-bsft" element={ <About_BiharStartup/>}/>
          <Route path="/mou-with-tie" element={ <MouWithTie/>}/>
          <Route path="/university-outreach" element={ <UniversityOutreach/>}/>
          <Route path="/incubation-apply-form" element={ <IncubationApplyForm/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

       
        <Footer/>
    </div>
  )
}

export default App
