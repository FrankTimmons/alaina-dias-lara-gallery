import React from 'react'
import {client, urlFor} from '../lib/client'

const GalleryView = ({currentPainting, gallery, closeGalleryView, setCurrentPainting}) => {
  return (
    <div onClick={closeGalleryView} className='absolute left-0 right-0 top-0 bottom-0 w-screen h-screen bg-black/75 flex items-center justify-center'>
      <img className='w-auto h-[90%]' src={urlFor(gallery.paintings[currentPainting].image)} alt="" />
    </div>
  )
}

export default GalleryView 