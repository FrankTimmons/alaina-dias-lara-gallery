import Link from 'next/link'
import React from 'react'

const Navbar = ({galleries}) => {
  return (
    <div>
      {galleries.map((gallery) => 
        <Link href={`/gallery/${gallery.slug.current}`}>
          <div>
            {gallery.gallery}
          </div>
        </Link>
      )}
    </div>
  )
}

export default Navbar