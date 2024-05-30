import React from 'react'
import { FaBeer, FaFacebookF, FaTwitter, FaEnvelope, FaLinkedinIn  } from "react-icons/fa"

function Navbar() {
  return (
    <div>
        <header>
            <div className='flex max-[768px]:block justify-between px-24 max-[600px]:px-0 bg-green-700 py-3 items-center max-[800px]:block max-[800px]:px-0'>
                <p className='text-white max-[800px]:text-white max-[800px]:text-center font-bold text-3xl'>MADF</p>
                {/* social  */}
                <div className='flex gap-4 align-center text-white items-center max-[800px]:py-4 justify-center'>
                    <p><i><FaFacebookF /></i></p>
                    <p><i><FaTwitter /></i></p>
                    <p><i><FaEnvelope /></i></p>
                    <p><i><FaLinkedinIn /></i></p>
                    <p><a href="">contact@madf.com</a></p>
                    <button className='border-solid border-2 border-white py-2 px-2 text-center text-white text-xs font-medium uppercase hover:bg-white hover:text-green-700 max-[800px]:hidden'>Become volunteer</button>
                </div>
                <p className='text-center hidden max-[800px]:block'>
                    <button className='border-solid border-2 border-white py-2 px-2 m-3 text-center text-white text-xs font-medium uppercase hover:bg-white hover:text-green-700'>Become volunteer</button>
                </p>
            </div>

            <nav className='flex justify-center bg-white p-4 text-black max-[600px]:hidden'>
                <ul className='flex gap-6 text-lg'>
                    <li><a href="" className='text-green-700'>Home</a></li>
                    <li><a href="" className='hover:text-green-700'>Features</a></li>
                    <li><a href="" className='hover:text-green-700'>Causes</a></li>
                    <li><a href="" className='hover:text-green-700'>Shop</a></li>
                    <li><a href="" className='hover:text-green-700'>Gallery</a></li>
                    <li><a href="" className='hover:text-green-700'>blog</a></li>
                    <li><a href="" className='hover:text-green-700'>contact us</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
    

export default Navbar