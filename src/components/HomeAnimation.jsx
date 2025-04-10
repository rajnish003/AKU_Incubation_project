import React from 'react'
import ParticlesBackground from './ParticlesBackground'
import HomeText from './HomeText'
import FluidCursor from './FluidCursor'
const HomeAnimation = () => {
  return (
    <div>
        <div className='shadow-lg'>
        {/* <HeaderNavBar/> */}
        <ParticlesBackground/>
        <HomeText/>
        <FluidCursor/>
    </div>
    </div>
  )
}

export default HomeAnimation
