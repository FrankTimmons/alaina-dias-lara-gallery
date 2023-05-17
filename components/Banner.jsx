import React from 'react'

const Banner = ({image}) => {
  return (
    <div className='flex flex-col items-center'>
      <img className='h-auto w-full' src={image}/>
      <h1 className='text-center mt-10'>
        “Life is a balance between transformation and resistance to transformation. Think of yourself as a dancer on the blurry edge separating order from chaos.”
      </h1>
      <h1>- Fred Alan Wolf, Ph.D.</h1>
    </div>
  )
}

export default Banner