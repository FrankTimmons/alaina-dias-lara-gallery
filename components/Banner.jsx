import React from 'react'
import { urlFor } from '../lib/client';

const Banner = ({banner}) => {
  return (
    <div className='flex flex-col items-center'>
      <img className='h-auto w-full' src={urlFor(banner.image)}/>
      <h1 className='text-center my-10'>
        {banner.quote}
      </h1>
    </div>
  )
}

export default Banner