import React, {useState} from 'react'
import ImageFadeIn from 'react-image-fade-in'
import { urlFor, serializers } from '@/lib/client'
import BlockContent from '@sanity/block-content-to-react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const BlogPost = ({post}) => {
  const [pictureIndex, setPictureIndex] = useState(0)

  return (
    <div className='flex flex-col py-4 bg-slate-100 p-6 m-6 lg:w-2/3 w-[90%]'>
      <div className='text-3xl font-bold text-black'>{post.title}</div>
      <div className='text-xl text-gray-400 mb-3'>{post.date}</div>
      <div className='sm:text-xl text-md'>
        {post.pictures &&
          <div className='float-right sm:ml-4 mb-2'>
            <ImageFadeIn
              className='object-contain w-[400px] lg:h-[400px] h-auto'
              opacityTransition={1.5}
              src={urlFor(post.pictures[pictureIndex]).quality(10)}
            /> 
            <div className='flex flex-row justify-center items-center gap-3'>
            {post?.pictures.map((image, index) => 
                <div key={index} className='w-[75px] h-[75px] m-2 cursor-pointer '>
                  <ImageFadeIn
                    className='object-cover w-[75px] h-[75px] hover:border-blue-800 border-2 duration-200'
                    onClick={() => setPictureIndex(index)}
                    opacityTransition={1.5}
                    src={urlFor(image).quality(5)}
                  /> 
                </div>
              )}
            </div>
          </div>
        }
          <BlockContent
            className='text-2xl'
            blocks={post.post}
            serializers={serializers}
            projectId={"3a3zvinb"}
            dataset={"production"}
          />
      </div>
    </div>
  )
}

export default BlogPost