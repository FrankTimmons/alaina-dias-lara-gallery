import React, {useEffect, useState} from 'react'
import { urlFor } from '../lib/client';
import ImageFadeIn from "react-image-fade-in";
import Logo from '../public/logo.svg'

const Banner = ({banner}) => {
  return (
    <div className='flex flex-row items-center'>
      <div className='flex flex-col justify-center items-center'>
        <Logo/>
        <h1 className='text-center my-10 w-[60%]'>
          {banner.quote}
        </h1>
      </div>
      <img
        className='h-auto w-[60%]'
        src={urlFor(banner.image)}
      />
    </div>
  )
}

export default Banner