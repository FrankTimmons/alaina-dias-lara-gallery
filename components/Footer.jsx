import React, {useState} from 'react'
import Link from 'next/link'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Contact from './Contact';


const Footer = () => {
  const [contact, setContact] = useState(false);
  const handleContactClick = () => {
    setContact(!contact)
  }

  
  return (
    <>
      {contact && <Contact handleContactClick={handleContactClick}/>}
      <div className='w-full h-auto bg-zinc-900 flex-row justify-around flex py-6'>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <Link href={`/galleries`} className='hover:underline'>GALLERIES</Link>
          <Link href={`/shop`} className='hover:underline'>SHOP</Link>
        </div>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <div onClick={handleContactClick} className='hover:underline cursor-pointer'>CONTACT</div>
          {/* <Link href={`/about`} className='hover:underline'>ABOUT</Link> */}
        </div>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <Link href={`/`} className='hover:underline'>FACEBOOK</Link>
          <Link href={`/blog`} className='hover:underline'>BLOG</Link>
        </div>
      </div>
      <div className='w-full h-auto bg-zinc-800 flex p-2 justify-end'>
        <p className='text-white text-sm'>Website Created by Frank Timmons</p>
        <Link href="https://www.linkedin.com/in/frank-timmons-pdx/">
          <AiFillLinkedin className='text-white text-lg ml-2'/>
        </Link>
        <Link href="https://github.com/FrankTimmons">
          <AiFillGithub className='text-white text-lg ml-2'/>
        </Link>
      </div>
    </>
  )
}

export default Footer