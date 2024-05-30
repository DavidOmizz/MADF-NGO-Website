import React from 'react'
import bgImage from '../assests/images/close-up-smiley-african-kid-outdoors.jpg'
import sec2Image from '../assests/images/pexels-emmanuel-ikwuegbu-9628111.jpg'
import sec3Image from '../assests/images/pexels-rdne-stock-project-6646852.jpg'
import sec3BgImage from '../assests/images/pexels-mikhail-nilov-7475041.jpg'
import { FaRegHeart, FaRegUser, FaPhoneSquareAlt, FaEnvelope} from 'react-icons/fa'
import { GoMegaphone, GoHomeFill } from 'react-icons/go'
import Image2 from '../assests/images/male-volunteer-holding-blank-paper-with-request.jpg'
import Image3 from '../assests/images/volunteers-work-preparing-donations.jpg'

// Later New Images
import LNImage3 from '../assests/images/pexels-dialo-photography-10385918.jpg'
import LNImage2 from '../assests/images/pexels-safari-consoler-11834966.jpg'
import LNImage from '../assests/images/pexels-michele-ferrari-4587189.jpg'

// Donators BgImage 
import DImages from '../assests/images/pexels-emmanuel-ikwuegbu-8948347.jpg'

function Section1() {
    const myDate = new Date().getFullYear()
  return (
    <div className='bg-white'>
        <div className='Section-One bg-white px-24 max-[800px]:px-5'>
            <p className='text-center py-10 pb-5 text-2xl my-4 font-light text-neutral-800'>You can help lots of people by donating little. <strong className='text-3xl border-b-4 border-green-700 font-semibold max-[800px]:text-2xl'>See our causes</strong></p>
            <div className='flex gap-5 pt-5 max-[800px]:block'>
                <div className='text-center max-[800px]:'>
                    <p className='text-center font-medium text-base mb-3'>Help nigerian children to have homes</p>
                    <div>
                        <img src={bgImage} alt="" />
                    </div>
                    <p className='text-center my-4 text-sm'> <span className='font-bold'>Donation:$78,354</span>/$1,26,500</p>
                    <p className='text-center text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 border-green-700'>Become volunteer</button>
                </div>
                <div className='text-center max-[800px]:py-10'>
                    <p className='text-center font-medium text-base mb-3'>Help girls to get Education</p>
                    <div>
                        <img src={bgImage} alt="" />
                    </div>
                    <p className='text-center my-4 text-sm'> <span className='font-bold'>Donation:$78,354</span>/$1,26,500</p>
                    <p className='text-center text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 border-green-700'>Become volunteer</button>
                </div>
                <div className='text-center'>
                    <p className='text-center font-medium text-base mb-3'>Help us to send Nutritions to Nigeria</p>
                    <div>
                        <img src={bgImage} alt="" />
                    </div>
                    <p className='text-center my-4 text-sm'> <span className='font-bold'>Donation:$78,354</span>/$1,26,500</p>
                    <p className='text-center text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs py-2 mt-5 px-2 text-black font-medium uppercase hover:bg-white hover:text-green-700 border-green-700'>Become volunteer</button>
                </div>
            </div>
        </div>

        <div className='bg-green-50 px-24 mt-28 pb-20 max-[800px]:mt-0 px-4'>
            <p className='text-center py-16 pb-10 text-2xl font-light mt-16 max-[380px]:text-xl max-[800px]:text-2xl'>How you can help? <strong className='font-semibold border-b-4 border-green-700'>See below</strong></p>
            <div className='flex gap-6 items-center py-5 justify-center max-[800px]:block'>
                <div>
                    <div className='flex gap-4 items-center mb-6'>
                        <div className='bg-green-500 p-4'>
                            <p className='text-white text-4xl font-bold max-[800px]:text-xl'><GoMegaphone/></p>
                        </div>
                        <div className='text-'>
                            <p className='font-semibold text-xl mb-2 max-[800px]:mb-0'>Media</p>
                            <p className='w-96 text-base max-[380px]:w-52 max-[800px]:w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?Reiciendis, dolore?</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mb-6'>
                        <div className='bg-green-500 p-4'>
                            <p className='text-white text-4xl font-bold max-[800px]:text-xl'><FaRegUser/></p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl mb-2 max-[800px]:mb-0'>Media</p>
                            <p className='w-96 text-base max-[380px]:w-52 max-[800px]:w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?Reiciendis, dolore?</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mb-6'>
                        <div className='bg-green-500 p-4'>
                            <p className='text-white text-4xl font-bold max-[800px]:text-xl'><FaRegHeart/></p>
                        </div>
                        <div>
                            <p className='font-semibold text-xl mb-2 max-[800px]:mb-0'>Media</p>
                            <p className='w-96 text-base max-[380px]:w-52 max-[800px]:w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?Reiciendis, dolore?</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={sec2Image} alt="" className='rounded' />
                </div>
            </div>
        </div>

        {/* Be a volunteer  */}
        <div className='flex px-24 items-center bg-center bg-cover max-[800px]:px-4' style={{backgroundImage: `url(${sec3BgImage})`}}>
            <div className='py-24'>
                <p className='text-4xl font-thin mb-8 max-[800px]:text-2xl mb-4 max-[380px]:text-lg'>Become a <strong className='font-semibold border-b-2 border-green-700'>Volunteer</strong></p>
                <p className='w-96 max-[380px]:w-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod eum natus cupiditate eveniet recusandae doloribus esse velit, quidem quibusdam.</p>
                <button className='border-solid border-2 text-xs border-green-700 py-2 mt-5 px-6 text-black font-semibold uppercase hover:text-green-700'>Join Now</button>
            </div>
        </div>

        {/* Checkout whats's going on */}
        <div className='px-24 py-16 bg-white max-[800px]:px-4'>
            <p className='text-center mb-12 text-2xl font-light'>Checkout what's going on. <strong className='font-semibold border-b-2 border-green-700'>Latest News</strong></p>
            <div className='flex gap-5 max-[800px]:block'>
                <div className='max-[800px]:mb-5'>
                    <div>
                        <img src={LNImage} alt="" />
                    </div>
                    <p className='mt-4 mg-2 text-lg font-semibold'>News Heading title</p>
                    <p className='my-3 text-sm text-neutral-500'>03 DEC2023 POSTED IN:CATEGORY </p>
                    <p className='text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs py-2 mt-5 px-4 text-black font-medium uppercase hover:bg-white hover:text-green-700 border-green-700'>Read more</button>
                </div>
                <div className='max-[800px]:mb-5'>
                    <div>
                        <img src={LNImage2} alt="" />
                    </div>
                    <p className='mt-4 mg-2 text-lg font-semibold'>News Heading title</p>
                    <p className='my-3 text-sm text-neutral-500'>03 DEC2023 POSTED IN:CATEGORY </p>
                    <p className='text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs py-2 mt-5 px-4 text-black font-medium uppercase hover:bg-white hover:text-green-700 border-green-700'>Read more</button>
                </div>
                <div className='max-[800px]:mb-5'>
                    <div>
                        <img src={LNImage3} alt="" />
                    </div>
                    <p className='mt-4 mg-2 text-lg font-semibold'>News Heading title</p>
                    <p className='my-3 text-sm text-neutral-500'>03 DEC2023 POSTED IN:CATEGORY </p>
                    <p className='text-sm text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iure doloribus eaque, explicabo sed libero?</p>
                    <button className='border-solid border-2 text-xs py-2 mt-5 px-4 text-black font-medium uppercase hover:bg-white hover:text-green-700 border-green-700'>Read more</button>
                </div>
            </div>
        </div>

        {/* Doneators will bw a slider just like testimonials  */}
        <div className='bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${DImages})`}} >
            <div className='py-20 backdrop-brightness-50 bg-neutral-800/60 h-full text-center text-white'>
                <p className='text-4xl font-thin mb-8'>Donation Holders says <strong className='font-semibold border-b-2 border-green-500'>Read more</strong></p>
                <p className='mx-auto text-xl italic max-[800px]:bg-sky-300'>"Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Dolor nostrum cupiditate at dolorum? Assumenda, saepe!"</p>
                <h3 className='mt-5 text-2xl font-medium'>John Doe</h3>
                <small className='text-sm font-thin'>(New media of markering firm)</small>
            </div>
        </div>

        {/* footer  */}
        <footer>
            <div className='bg-neutral-900 px-24 flex gap-4 py-6 max-[800px]:px-4'>
                <div className='text-neutral-400 py-10'>
                    <p className='text-white font-bold text-xl mb-5'>MADF</p>
                    <p className='mb-5 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae magnam rerum libero dignissimos ullam.</p>
                    <div className='flex gap-2 hover:text-green-700 pointer-events-auto'>
                        <GoHomeFill className='text-sm'/>
                        <div className='text-sm'>
                            <p>UI Ring Rd.</p>
                            <p>Ibadan Nigeria.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-sm hover:text-green-700'>
                        <span className='py-3'><FaPhoneSquareAlt/></span>
                        <span>80 324 820 69</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm hover:text-green-700'>
                        <span className=''><FaEnvelope/></span>
                        <span>contact@madf.com</span>
                    </div>
                </div>
                <div className='text-neutral-400 py-10'>
                    <span className='text-white text-xl'>Twitter Feed</span>
                    <p className='pt-5 text-sm'>@charity Various versions have evolved over the years.sometimes by accident. sometimes on purpose.</p>
                    <span>2 hours ago</span>
                    <p className='pt-5 text-sm'>@charity Various versions have evolved over the years.sometimes by accident. sometimes on purpose.</p>
                    <span>2 hours ago</span>
                </div>
                <div className='text-neutral-400 py-10 text-sm max-[800px]:hidden'>
                    <span className='text-white text-xl'>Newsletter Signup</span>
                    <p className='py-5'>Variations of passages of lorem ipsum available, but the majority</p>
                    <div className='flex'>
                        <input type="email" placeholder='Email' className='border-2 bg-transparent p-2 border-neutral-700 outline-none'/>
                        <button className='border-2 border-green-700 py-2 px-3 text-green-700 hover:bg-green-700 hover:text-white'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='hidden px-4 bg-neutral-900 text-neutral-400 p-5 text-sm max-[800px]:block'>
                <span className='text-white text-xl'>Newsletter Signup</span>
                <p className='py-5'>Variations of passages of lorem ipsum available, but the majority</p>
                <div className='flex'>
                    <input type="email" placeholder='Email' className='border-2 bg-transparent p-2 border-neutral-700 outline-none'/>
                    <button className='border-2 border-green-700 py-2 px-3 text-green-700 hover:bg-green-700 hover:text-white'>Submit</button>
                </div>
            </div>
            <div className='bg-neutral-800 text-neutral-400 py-3 text-center text-sm max-[800px]:text-xs'>
                <p>Copyright {myDate}. All Rights Reserved by MADF.</p>
            </div>
        </footer>
    </div>
  )
}

export default Section1