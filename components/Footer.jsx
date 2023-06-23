import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='w-full h-auto bg-zinc-900 flex-row justify-around flex py-6'>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <Link href={`/galleries`}>GALLERIES</Link>
          <Link href={`/shop`}>SHOP</Link>
        </div>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <Link href={`/contact`}>CONTACT</Link>
          <Link href={`/about`}>ABOUT</Link>
        </div>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <Link href={`/`}>FACEBOOK</Link>
          <Link href={`/blog`}>BLOG</Link>
        </div>
      </div>
      <div className='w-full h-auto bg-zinc-800 flex p-2 justify-end'>
        <p className='text-white text-sm'>Website Developed by Frank Timmons</p>
      </div>
    </>
  )
}

export default Footer