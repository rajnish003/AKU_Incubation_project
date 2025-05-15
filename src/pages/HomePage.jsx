import React from 'react'
import HomeAnimation from '../components/HomeAnimation'
import HomeAbout from '../components/HomeAbout'
import Footer from '../components/Footer'
import HeaderNavBar from '../components/HeaderNavBar'
import Latest_post from '../components/Latest_post'
import ImageScroller from '../components/ImageScroller'
import Partnerships from '../components/Partnerships'
import HomeCard from '../components/HomeCard'
import {contentData} from '../Data/Card_data'
const HomePage = () => {
  return (
   <div>
    
    <HomeAnimation/>
    <Latest_post/>
    {/* <div className='mt-7'>
          <HomeCard content={contentData}/>
    </div>
     */}
    <HomeAbout/>
    <ImageScroller/>
    <Partnerships/>
    
   </div>
  )
}

export default HomePage
