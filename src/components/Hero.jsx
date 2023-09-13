import React from 'react'

import bgImage from '../assests/images/close-up-smiley-african-kid-outdoors.jpg'

function Hero() {
  return (
    <div>
        <div className="px-24 bg-cover h-full" style={{backgroundImage: `url(${bgImage})`}}>
            <div className='py-32'>
                <button className='bg-green-500 text-white text-sm uppercase py-1 px-2 mt-5'>Featured Cause</button>
                <h2 className='font-bold text-6xl text-white'>Donate & Help</h2>
                <p className='text-4xl w-96 mt-2 text-white'>MAKING A DIFFERENCE FOUNDATION</p>
                <button className='border-solid border-2 border-black py-2 mt-5 px-2 text-center text-black font-medium uppercase hover:bg-green-700 hover:text-white hover:border-0'>Become volunteer</button>
            </div>
        </div>
    </div>
  )
}

export default Hero