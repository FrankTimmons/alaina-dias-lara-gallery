import React, {useEffect, useState} from 'react'
import { urlFor } from '../lib/client';
import parse from 'html-react-parser';
import ImageFadeIn from "react-image-fade-in";
import Logo from '../public/logo.svg'

const Banner = ({banner}) => {
  return (
    <div className='flex flex-row max-lg:flex-col'>
      <div className='max-lg:hidden flex flex-col items-center my-[60px]'>
        <div className='flex justify-center items-center xl:h-[60%] lg:h-[50%]'>
          <Logo className='2xl:h-[50%] h-[75%] w-auto'/>
        </div>
        <div className='bg-[#BC693A] w-full h-[4%]'/>
        <div className='flex flex-col justify-center items-center content-center h-[35%]'>
          <h1 className='w-[60%] font-serif xl:text-2xl lg:text-lg'>
            {parse(banner.quote)}
          </h1>
          <h1 className='w-[60%] font-serif xl:text-2xl lg:text-lg text-right mt-5'>
            - {banner.author}
          </h1>
        </div>
      </div>
      <div className='min-[1150px]:w-[150%] '>
        <img
          className='object-contain'
          src={urlFor(banner.image)}
        />
      </div>
      <div className='lg:hidden flex flex-col justify-center items-center h-[35%] my-12'>
        <h1 className='w-[60%] font-serif text-xl'>
          {parse(banner.quote)}
        </h1>
        <h1 className='w-[60%] font-serif text-xl text-right mt-6'>
          - {banner.author}
        </h1>
      </div>
    </div>
  )
}

export default Banner