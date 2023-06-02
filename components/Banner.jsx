import React, {useEffect, useState} from 'react'
import { urlFor } from '../lib/client';

const Banner = ({banner}) => {
  const [style, setStyle] = useState("h-auto w-full opacity-0 animate-[imgFadeIn_ease_10s]");
  
  useEffect(()=>{
    setStyle('h-auto w-full animate-imgFadeIn fill-mode-forwards')
  }, [banner.image])

  return (
    <div className='flex flex-col items-center py-4'>
      <img onLoad={() => setStyle('h-auto w-full animate-imgFadeIn fill-mode-forwards')} className={style} src={urlFor(banner.image)}/>
      <h1 className='text-center my-10'>
        {banner.quote}
      </h1>
    </div>
  )
}

export default Banner