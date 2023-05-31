import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Link href={'/'}>
      <div className='flex flex-col h-100 pt-10 pb-10 font-lobster'>
        <h1 className='sm:text-6xl text-5xl'>Alaina Dias Lara</h1>
        <h1 className='sm:text-3xl sm:ml-24 text-2xl ml-12'>Interdisciplinary Artist</h1>
      </div>
    </Link>
  )
}

export default Header