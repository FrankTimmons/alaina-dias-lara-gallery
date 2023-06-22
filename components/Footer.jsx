import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full h-auto bg-zinc-900 flex-row justify-around flex py-6'>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <p>BLOG</p>
          <p>GALLERIES</p>
          <p>SHOP</p>
        </div>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <p>CONTACT</p>
          <p>ABOUT</p>
          <p>SHOP</p>
        </div>
        <div className='flex flex-col text-white font-serif text-center gap-6'>
          <p>__</p>
          <p>FACEBOOK</p>
          <p>GALLERIES</p>
          <p>SHOP</p>
        </div>
      </div>
      <div className='w-full h-auto bg-zinc-800 flex p-2 justify-end'>
        <p className='text-white text-sm'>Website Developed by Frank Timmons</p>
      </div>
    </>
  )
}

export default Footer