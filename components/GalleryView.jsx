import React from 'react'
import {client, urlFor} from '../lib/client'

const GalleryView = ({currentPainting, gallery, closeGalleryView, nextPainting, previousPainting}) => {
  return (
    <div onClick={closeGalleryView} className='fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-black/90 flex items-center justify-center'>
      <img className='w-auto h-[90%]' src={urlFor(gallery.paintings[currentPainting].image)} alt="" />
    </div>
  )
}

export default GalleryView 