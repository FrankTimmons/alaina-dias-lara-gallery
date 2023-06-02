import Link from 'next/link'
import React, {useState} from 'react'

const Navbar = ({galleries}) => {

  return ( 
    <div className='flex justify-end border-b-2 border-black'>
      <div className='ml-5'>
        <div className='group'>
          <h1 className='hover:text-red-400 px-2'>GALLERIES</h1>
          <div className='hidden group-hover:flex absolute flex-col bg-slate-300 px-2 z-10'>
            {galleries.map((gallery) => 
              <Link key={gallery._id} href={`/gallery/${gallery.slug.current}`} className='hover:text-red-400'>
                {gallery.gallery.toUpperCase()}
              </Link>
            )}
          </div>
        </div>
      </div>
      <Link href={`/blog`} className='ml-5 hover:text-red-400 px-2'>
        BLOG
      </Link>
    </div>
  )
}

export default Navbar