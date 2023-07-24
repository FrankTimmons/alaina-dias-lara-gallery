import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Contact = ({handleContactClick}) => {
  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 w-full h-full flex items-center justify-center z-30 bg-black/90'>
      <div className='bg-white md:w-2/3 md:h-3/4 w-[80%] h-[80%] relative p-6 flex items-center justify-center'>
        <AiOutlineClose className='absolute top-2 right-2 text-black w-6 h-auto z-40 cursor-pointer' onClick={handleContactClick}/>
        <h1>Contact Form coming soon!</h1>
      </div>
    </div>
  )
}

export default Contact