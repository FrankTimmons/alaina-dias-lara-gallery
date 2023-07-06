import Link from 'next/link'
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = ({galleries}) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
          <div className='group'>
            <Link href={`/galleries`}>
              <h1 className='group-hover:text-blue-800 duration-200 py-4 px-2 cursor-pointer'>GALLERIES</h1>
            </Link>
            <div className='hidden group-hover:flex absolute flex-col px-2 group-hover:bg-white/80 duration-200'>
              {galleries.map((gallery) => 
                <Link 
                  onClick={() => {window.location.href=`/galleries/${gallery.slug.current}`}} 
                  key={gallery._id} 
                  href={`/galleries/${gallery.slug.current}`}     
                  className='hover:text-blue-800 duration-200'
                >
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
          <Link href={`/contact`} className='border-black border-2 p-2 bg-white hover:bg-black hover:text-white duration-200'>
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
          <Link href={`/`} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            HOME
          </Link>
          <Link href={`/about`} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            ABOUT
          </Link>
          <Link href={`/galleries`} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            GALLERIES
          </Link>
          <Link href={`/shop`} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            SHOP
          </Link>
          <Link href={`/blog`} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            BLOG
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar