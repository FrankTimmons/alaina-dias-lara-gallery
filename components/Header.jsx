import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Link href={'/'}>
      <div className='fixed flex z-10 justify-center items-center font-roboto h-[60px] px-4'>
        <h1 className='sm:text-4xl text-3xl justify-center font-bold'>ALAINA DIAS LARA</h1>
      </div>
    </Link>
  )
}

export default Header