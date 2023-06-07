import React, {useEffect, useState} from 'react'
import { urlFor } from '../lib/client';
import parse from 'html-react-parser';
import ImageFadeIn from "react-image-fade-in";
import Logo from '../public/logo.svg'

const Banner = ({banner}) => {
  return (
    <div className='flex flex-row items-center'>
      <div className='flex flex-col justify-center items-center gap-24'>
        <Logo className='h-[90%]'/>
        <div className='bg-[#BC693A] w-full h-14'/>
        <h1 className='my-10 w-[60%] font-serif text-xl'>
          {parse(banner.quote)}
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