import Link from 'next/link'
import React, {useState} from 'react'

const Navbar = ({galleries}) => {
  const [galleriesDropdown, setGalleriesDropdown] = useState(false)


  return ( 
    <div className='flex justify-end border-b-2 border-black mb-10'>
      <div className='ml-5'>
        <h1 onClick={() => setGalleriesDropdown(!galleriesDropdown)} className='hover:text-red-400'>GALLERIES</h1>
        <div className={galleriesDropdown ? 'absolute flex flex-col bg-slate-300' : 'hidden'}>
          {galleries.map((gallery) => 
            <Link href={`/gallery/${gallery.slug.current}`} className='hover:text-red-400'>
              {gallery.gallery.toUpperCase()}
            </Link>
          )}
        </div>
      </div>
      <div className='ml-5 hover:text-red-400'>
        BLOG
      </div>
    </div>
  )
}

export default Navbar