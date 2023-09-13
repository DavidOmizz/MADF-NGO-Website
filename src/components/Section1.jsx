import React from 'react'
import bgImage from '../assests/images/close-up-smiley-african-kid-outdoors.jpg'
import { FaBullhorn, FaHeart, FaPersonBooth } from "react-icons/fa"
import Image2 from '../assests/images/male-volunteer-holding-blank-paper-with-request.jpg'
import Image3 from '../assests/images/volunteers-work-preparing-donations.jpg'

function Section1() {
  return (
    <div className=''>
        <div className='Section-One px-24'>
            <p className='text-center py-7 pb-5 text-2xl my-4 font-light text-neutral-800'>You can help lots of people by donating little. <strong className='text-3xl border-b-4 border-green-700 font-semibold'>See our causes</strong></p>
            <div className='flex gap-5'>
                <div className='text-center'>
                    <p className='text-center font-medium text-base mb-3'>Help nigerian children to have homes</p>
                    <div>
                        <img src={bgImage} alt="" />
                    </div>
                    <p className='text-center my-4 text-sm'> <span className='font-bold'>Donation:$78,354</span>/$1,26,500</p>
                    <p className='text-center text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs border-black py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 hover:border-green-700'>Become volunteer</button>
                </div>
                <div className='text-center'>
                    <p className='text-center font-medium text-base mb-3'>Help girls to get Education</p>
                    <div>
                        <img src={bgImage} alt="" />
                    </div>
                    <p className='text-center my-4 text-sm'> <span className='font-bold'>Donation:$78,354</span>/$1,26,500</p>
                    <p className='text-center text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs border-black py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 hover:border-green-700'>Become volunteer</button>
                </div>
                <div className='text-center'>
                    <p className='text-center font-medium text-base mb-3'>Help us to send Nutritions to Nigeria</p>
                    <div>
                        <img src={bgImage} alt="" />
                    </div>
                    <p className='text-center my-4 text-sm'> <span className='font-bold'>Donation:$78,354</span>/$1,26,500</p>
                    <p className='text-center text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs border-black py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 hover:border-green-700'>Become volunteer</button>
                </div>
            </div>
        </div>

        <div className='bg-green-100 px-24 pb-20'>
            <p className='text-center py-16 pb-10 text-2xl font-light mt-16'>How you can help? <strong className='font-semibold'>See below</strong></p>
            <div className='flex gap-6 items-center py-5 justify-center'>
                <div>
                    <div className='flex gap-4 items-center mb-6'>
                        <div className='bg-green-500 p-3'>
                            <p className='text-white text-2xl font-bold'><FaBullhorn/></p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Media</p>
                            <p className='w-96 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?Reiciendis, dolore?</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mb-6'>
                        <div className='bg-green-500 p-3'>
                            <p className='text-white text-2xl font-bold'><FaHeart/></p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Media</p>
                            <p className='w-96 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?Reiciendis, dolore?</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mb-6'>
                        <div className='bg-green-500 p-3'>
                            <p className='text-white text-2xl font-bold'><FaPersonBooth/></p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Media</p>
                            <p className='w-96 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?Reiciendis, dolore?</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={bgImage} alt="" className='' />
                </div>
            </div>
        </div>

        {/* Be a volunteer  */}
        <div className='flex px-24'>
            <div>
                <p>Become <strong>Volunteer</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod eum natus cupiditate eveniet recusandae doloribus esse velit, quidem quibusdam.</p>
                <button className='border-solid border-2 text-xs border-black py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 hover:border-green-700'>Become volunteer</button>
            </div>
            <div className='bg-cover h-full px-24 py-36 bg-center' style={{backgroundImage: `url(${Image2})`}}>
                <img src={Image2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section1