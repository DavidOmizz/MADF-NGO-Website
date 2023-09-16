import React from 'react'
import { FaBeer, FaFacebookF, FaTwitter, FaEnvelope, FaLinkedinIn  } from "react-icons/fa"

function Navbar() {
  return (
    <div>
        <header>
            <div className='flex justify-between px-24 bg-green-700 py-3 items-center'>
                <span className='text-white font-bold text-3xl'>MADF</span>
                {/* social  */}
                <div className='flex gap-4 align-center text-white items-center'>
                    <span><i><FaFacebookF /></i></span>
                    <span><i><FaTwitter /></i></span>
                    <span><i><FaEnvelope /></i></span>
                    <span><i><FaLinkedinIn /></i></span>
                    <span><a href="">contact@madf.com</a></span>
                    <button className='border-solid border-2 border-white py-2 px-2 text-center text-white text-xs font-medium uppercase hover:bg-white hover:text-green-700'>Become volunteer</button>
                </div>
            </div>

            <nav className='flex justify-center bg-white p-4 text-black'>
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