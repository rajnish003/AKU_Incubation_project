import React from 'react'
import ParticlesBackground from './ParticlesBackground'
import HomeText from './HomeText'
import FluidCursor from './FluidCursor'
const HomeAnimation = () => {
  return (
    <div>
        <div className='shadow-lg flex items-center justify-center rounded-md bg-gradient-to-t from-neutral-500 to-amber-300'>

          <div className='bg-[#fff] w-[70vw] items-center mt-40'>
                <HomeText/>
          </div>
        {/*   <HeaderNavBar/> */}
        {/* <ParticlesBackground/> */}
        
        {/* <FluidCursor/> */}
    </div>
    </div>
  )
}

export default HomeAnimation
