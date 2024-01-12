import React from 'react'
import ImageFadeIn from 'react-image-fade-in'
import BlockContent from '@sanity/block-content-to-react'
import { urlFor, serializers } from '@/lib/client'
import Link from 'next/link'

const AboutMe = ({about}) => {
  console.log(about?.post)
  return (    
    <div>
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">ABOUT ME</h1> 
      </div>
      <div className="flex px-4 bg-white mt-[300px] min-h-screen py-6 flex-col items-center">
        <div className="flex flex-col py-4 bg-slate-100 p-6 m-6 lg:w-2/3 w-[90%]">
          <div className='sm:text-xl text-md'>
            <div className='float-right sm:ml-4 mb-2'>
              <ImageFadeIn
                className='object-contain w-[400px] lg:h-[400px] h-auto'
                opacityTransition={1.5}
                src={urlFor(about.photo).quality(50)}
              /> 
            </div>
            <BlockContent  
              className='text-2xl' 
              blocks={about?.post}
              serializers={serializers}
              projectId={"3a3zvinb"}
              dataset={"production"}
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center p-6">Shout outs</h1> 
        <div className="flex flex-col py-4 bg-slate-100 p-6 m-6 lg:w-2/3 w-[90%]">
          {about?.shoutOuts.map((shoutOut, index) =>           
            <div key={index} className='m-2'>
              <h1 className='font-bold'>{shoutOut.name}</h1>
              <BlockContent   
                blocks={shoutOut?.description}
                serializers={serializers}
                projectId={"3a3zvinb"}
                dataset={"production"}
              />
              <Link className='text-blue-700 hover:underline' href={shoutOut.link}>Website</Link>     
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default AboutMe