import React, {useEffect, useState} from 'react'
import { urlFor } from '../lib/client';
import ImageFadeIn from "react-image-fade-in";

const Banner = ({banner}) => {
  return (
    <div className='flex flex-row items-center py-4'>
      <h1 className='text-center my-10'>
        {banner.quote}
      </h1>
      <ImageFadeIn
        className='h-auto w-60%'
        src={urlFor(banner.image)}
        opacityTransition={1.5}
      />
    </div>
  )
}

export default Banner