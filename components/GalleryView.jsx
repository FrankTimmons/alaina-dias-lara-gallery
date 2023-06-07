import React from 'react'
import {client, urlFor} from '../lib/client'
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineClose } from "react-icons/ai";

const GalleryView = ({currentPainting, gallery, closeGalleryView, nextPainting, previousPainting}) => {
  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 w-full h-full flex items-center justify-center z-30 bg-black/90'>
      <AiOutlineClose className='fixed top-2 right-2 text-white w-12 h-auto z-40 cursor-pointer' onClick={closeGalleryView}/>
      <div className='fixed left-0 w-[50%] h-full' onClick={currentPainting == 0 ? null : previousPainting}>
        {currentPainting == 0 ? <></> :
          <AiFillCaretLeft className='fixed left-0 top-[50%] text-white w-[5%] h-auto cursor-pointer'/>
        }  
      </div>
      <div className='w-[90%] h-[90%] flex justify-center'>
        <img className='object-contain' src={urlFor(gallery.paintings[currentPainting].image).quality(10)} alt="" />
      </div>
      <div className='fixed right-0 w-[50%] h-full' onClick={currentPainting == (gallery.paintings.length - 1) ? null : nextPainting}>
        {currentPainting == (gallery.paintings.length - 1) ? <></> :
          <AiFillCaretRight className='fixed right-0 top-[50%] text-white w-[5%] h-auto cursor-pointer'/>
        }  
      </div>
    </div>
  )
}

export default GalleryView 