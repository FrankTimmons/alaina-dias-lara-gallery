import Link from 'next/link'
import React, {useState} from 'react'

const Navbar = ({galleries}) => {

  return ( 
    <div className='fixed bg-white/70 w-full h-[60px] flex justify-center items-center px-4 font-roboto gap-24 font-bold'>
        <div className='group'>
          <h1 className='hover:text-red-400 text-xl'>GALLERIES</h1>
          <div className='hidden group-hover:flex absolute flex-col bg-slate-300 px-2 z-10'>
            {galleries.map((gallery) => 
              <Link key={gallery._id} href={`/gallery/${gallery.slug.current}`} className='hover:text-red-400'>
                {gallery.gallery.toUpperCase()}
              </Link>
            )}
          </div>
        </div>
        <Link href={`/blog`} className='hover:text-red-400 px-2 text-xl'>
          BLOG
        </Link>
    </div>
  )
}

export default Navbar