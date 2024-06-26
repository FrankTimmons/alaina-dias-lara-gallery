import Link from 'next/link'
import React, {useState} from 'react'
import {FaBars, FaTimes, FaShoppingCart} from 'react-icons/fa'
import Contact from './Contact';
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [contact, setContact] = useState(false);
  const handleContactClick = () => {
    setContact(!contact)
    setNav(false);
  }
  const { handleCartClick } = useShoppingCart();

  return ( 
    <>
      <div className='fixed top-0 lg:bg-orange-50/80 bg-orange-50/90 w-full h-[60px] flex justify-between items-center px-4 z-20 font-bold'>
        <div>
          <Link href={`/`} className='text-2xl w-[280px] whitespace-nowrap cursor-pointer'>ALAINA DIAS LARA</Link>
        </div>
        <div className='hidden lg:flex px-4 xl:text-xl lg:text-lg 2xl:gap-24 xl:gap-12 lg:gap-3'>
          {/* <Link href={`/about`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            ABOUT
          </Link> */}
          <Link href={`/galleries`} className='hover:text-blue-800 duration-200 py-4 px-2'>
            GALLERIES
          </Link>
          <Link href={`/shop`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            SHOP
          </Link>
          <Link href={`/blog`} className='hover:text-blue-800 duration-200 px-2 py-4'>
            PERSPECTIVES
          </Link>
        </div>

        <ShoppingCart/>
        
        <button className="lg:hidden z-10 cursor-pointer flex justify-end items-center px-4 w-full h-[60px]" onClick={handleCartClick}>
          <FaShoppingCart
            className='text-2xl'        
            />
        </button>

        <div onClick={handleClick} className="lg:hidden z-10 cursor-pointer flex justify-end items-center px-4 h-[60px]">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className='justify-end lg:flex hidden'>
          <button className="z-10 cursor-pointer flex justify-end items-center px-4 w-full h-[60px]" onClick={handleCartClick}>
            <FaShoppingCart
              className='text-2xl'        
              />
          </button>
          <div className='flex items-center'>
            <div onClick={handleContactClick} className='w-auto cursor-pointer border-black border-2 p-2 bg-orange-100 hover:bg-black hover:text-orange-100 duration-200'>
              CONTACT
            </div>
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
          {/* <Link href={`/about`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            ABOUT
          </Link> */}
          <Link href={`/galleries`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            GALLERIES
          </Link>
          <Link href={`/shop`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            SHOP
          </Link>
          <Link href={`/blog`} onClick={handleClick} className="py-6 text-4xl font-bold hover:text-blue-800 duration-200">
            PERSPECTIVES
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