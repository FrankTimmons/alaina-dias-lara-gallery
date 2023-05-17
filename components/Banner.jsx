import React from 'react'

const Banner = ({image}) => {
  return (
    <div className='flex flex-col items-center'>
      <img className='h-auto w-[50%]' src={image}/>
    </div>
  )
}

export default Banner