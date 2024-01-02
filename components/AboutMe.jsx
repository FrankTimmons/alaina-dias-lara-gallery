import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '@/lib/client'

const AboutMe = ({about}) => {
  console.log(about?.post)
  return (    
    <div>
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">ABOUT ME</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        <div className="text-xl p-6 bg-slate-100">
          <BlockContent   
            blocks={about?.post}
            serializers={serializers}
            projectId={"3a3zvinb"}
            dataset={"production"}
          />
        </div>
        
      </div>
    </div>
  )
}

export default AboutMe