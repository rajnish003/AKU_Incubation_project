import React from 'react'
import HomePage from './pages/HomePage'
import HeaderNavBar from './components/HeaderNavBar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import { Route, Routes, useLocation } from "react-router-dom";


const App = () => {
  return (
    <div> 
        <HeaderNavBar/>


        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

       
        <Footer/>
    </div>
  )
}

export default App
