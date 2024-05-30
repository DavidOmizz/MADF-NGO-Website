import React from 'react'

import bgImage from '../assests/images/close-up-smiley-african-kid-outdoors.jpg'

function Hero() {
  return (
    <div className='bg-white'>
        <div className="px-24 h-fit bg-cover bg-no-repeat max-[800px]:px-5" style={{backgroundImage: `url(${bgImage})`}}>
            <div className='py-32 max-[800px]:py-16'>
                <button className='bg-green-500 text-white text-sm uppercase py-1 px-2 mt-5'>Featured Cause</button>
                <h2 className='font-bold text-6xl text-white max-[600px]:text-2xl max-[700px]:text-4xl'>Donate & Help</h2>
                <p className='text-4xl mt-2 text-white max-[700px]:text-2xl'>MAKING A DIFFERENCE FOUNDATION</p>
                <button className='border-solid border-2 border-green-500 hover:bg-transparent text-white bg-green-500 py-2 mt-5 px-2 text-center font-medium uppercasebg-green-700 hover:text-white max-[800px]:py-1'>Become volunteer</button>
            </div>
        </div>
    </div>
  )
}

export default Hero