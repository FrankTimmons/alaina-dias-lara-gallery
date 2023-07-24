import React, {useState} from 'react'
import {client, urlFor} from '../lib/client'
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineClose } from "react-icons/ai";
import ImageFadeIn from 'react-image-fade-in';

const GalleryView = ({currentPainting, galleryPaintings, closeGalleryView, nextPainting, previousPainting}) => {
  const [loading, setLoading] = useState(true);

  const goNextPainting = () => {
    nextPainting();
    setLoading(true);
  }

  const goPreviousPainting = () => {
    previousPainting();
    setLoading(true);
  }

  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 w-full h-full flex items-center justify-center z-30 bg-black/90'>
      <AiOutlineClose className='fixed top-2 right-2 text-white w-12 h-auto z-40 cursor-pointer' onClick={closeGalleryView}/>
      <div className='fixed left-0 w-[50%] h-full' onClick={currentPainting == 0 ? null : () => goPreviousPainting()}>
        {currentPainting == 0 ? <></> :
          <AiFillCaretLeft className='fixed left-0 top-[50%] text-white w-[5%] h-auto cursor-pointer'/>
        }  
      </div>
      <div className='w-[90%] h-[90%] flex justify-center items-center'>
        {loading &&
          <div className="text-white h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"/>
        }
        <ImageFadeIn className={loading ? "hidden" : "object-contain h-full"} src={urlFor(galleryPaintings[currentPainting].image)} onLoad={()=> setLoading(false)}/>
      </div>
      <div className='fixed right-0 w-[50%] h-full' onClick={currentPainting == (galleryPaintings.length - 1) ? null : () => goNextPainting()}>
        {currentPainting == (galleryPaintings.length - 1) ? <></> :
          <AiFillCaretRight className='fixed right-0 top-[50%] text-white w-[5%] h-auto cursor-pointer'/>
        }  
      </div>
    </div>
  )
}

export default GalleryView 