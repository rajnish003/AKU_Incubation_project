import React from 'react'
import HomeAnimation from '../components/HomeAnimation'
import HomeAbout from '../components/HomeAbout'
import Footer from '../components/Footer'
import HeaderNavBar from '../components/HeaderNavBar'
import Latest_post from '../components/Latest_post'
import ImageScroller from '../components/ImageScroller'
import Partnerships from '../components/Partnerships'
const HomePage = () => {
  return (
   <div>
    
    <HomeAnimation/>
    <Latest_post/>
    <HomeAbout/>
    <ImageScroller/>
    <Partnerships/>
   </div>
  )
}

export default HomePage
