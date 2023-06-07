import Link from 'next/link'
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = ({galleries}) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return ( 
    <>
      <div className='fixed top-0 lg:bg-white/70 bg-white/90 w-full h-[60px] flex justify-between items-center px-4 z-20 font-bold'>
        <div>
          <Link href={`/`} className='text-3xl w-[280px] whitespace-nowrap cursor-pointer'>ALAINA DIAS LARA</Link>
        </div>
        <div className='hidden lg:flex px-4 font-roboto xl:text-xl lg:text-lg 2xl:gap-24 xl:gap-12 lg:gap-3'>
          <Link href={`/shop`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            ABOUT
          </Link>
          <div className='group'>
            <h1 className='group-hover:text-blue-800 duration-200 py-4 px-2 cursor-pointer'>GALLERIES</h1>
            <div className='hidden group-hover:flex absolute flex-col px-2 group-hover:bg-white/70 duration-200'>
              {galleries.map((gallery) => 
                <Link key={gallery._id} href={`/gallery/${gallery.slug.current}`} className='hover:text-blue-800 duration-200'>
                  {gallery.gallery.toUpperCase()}
                </Link>
              )}
            </div>
          </div>
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
          <Link href={`/contact`} className='border-black border-2 p-2 bg-white'>
            CONTACT
          </Link>
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "lg:hidden fixed top-0 left-0 w-full h-[calc(100vh-60px)] my-[60px] bg-white/90 flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            HOME
          </li>
          <li className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            ABOUT
          </li>
          <li className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            GALLERIES
          </li>
          <li className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            SHOP
          </li>
          <li className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            BLOG
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar