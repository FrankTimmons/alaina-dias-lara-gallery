import Link from 'next/link'
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Contact from './Contact';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [contact, setContact] = useState(false);
  const handleContactClick = () => {
    setContact(!contact)
    setNav(false);
  }

  return ( 
    <>
      <div className='fixed top-0 lg:bg-white/80 bg-white/90 w-full h-[60px] flex justify-between items-center px-4 z-20 font-bold'>
        <div>
          <Link href={`/`} className='text-2xl w-[280px] whitespace-nowrap cursor-pointer'>ALAINA DIAS LARA</Link>
        </div>
        <div className='hidden lg:flex px-4 font-roboto xl:text-xl lg:text-lg 2xl:gap-24 xl:gap-12 lg:gap-3'>
          <Link href={`/about`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            ABOUT
          </Link>
          <Link href={`/galleries`} className='hover:text-blue-800 duration-200 py-4 px-2'>
            GALLERIES
          </Link>
          <Link href={`/shop`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            SHOP
          </Link>
          <Link href={`/blog`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            BLOG
          </Link>
        </div>

        <div onClick={handleClick} className="lg:hidden z-10 cursor-pointer flex justify-end items-center px-4 w-full h-[60px]">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className='w-[280px] lg:flex hidden justify-end'>
          <div onClick={handleContactClick} className='cursor-pointer border-black border-2 p-2 bg-white hover:bg-black hover:text-white duration-200'>
            CONTACT
          </div>
        </div>

        {contact && <Contact handleContactClick={handleContactClick}/>}

        <ul
          className={
            !nav
              ? "hidden"
              : "lg:hidden fixed top-0 left-0 w-full h-[calc(100vh-60px)] my-[60px] bg-white/90 flex flex-col justify-center items-center"
          }
        >
          <Link href={`/`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            HOME
          </Link>
          <Link href={`/about`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            ABOUT
          </Link>
          <Link href={`/galleries`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            GALLERIES
          </Link>
          <Link href={`/shop`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            SHOP
          </Link>
          <Link href={`/blog`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            BLOG
          </Link>
          <div onClick={handleContactClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            CONTACT
          </div>
        </ul>
      </div>
    </>
  )
}

export default Navbar