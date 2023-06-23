import React, {useState} from 'react'
import ImageFadeIn from 'react-image-fade-in'
import { urlFor, serializers } from '@/lib/client'
import BlockContent from '@sanity/block-content-to-react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const BlogPost = ({post}) => {
  const [pictureIndex, setPictureIndex] = useState(0)

  return (
    <div className='flex flex-col py-4 bg-slate-100 p-6 m-6'>
      <div className='text-3xl font-bold text-black'>{post.title}</div>
      <div className='text-xl text-gray-400 mb-3'>{post.date}</div>
      <div>
        {post.pictures ?
          <div className='w-[400px] h-[400px] float-right ml-4 mb-4'>
            <ImageFadeIn
              className='object-contain w-[400px] h-[400px]'
              opacityTransition={1.5}
              src={urlFor(post.pictures[pictureIndex]).quality(10)}
            /> 
            <div className='flex flex-row justify-center items-center gap-3'>
              <AiFillCaretLeft
                className={ pictureIndex == 0 ? 'text-slate-100 cursor-default' : 'text-black cursor-pointer'}
                onClick={ pictureIndex != 0 ? ()=> setPictureIndex(pictureIndex - 1) : null}
              />
              {pictureIndex + 1} / {post.pictures.length}
              <AiFillCaretRight
                className={ pictureIndex == post.pictures.length - 1 ? 'text-slate-100 cursor-default' : 'text-black cursor-pointer'}
                onClick={ pictureIndex != post.pictures.length - 1 ? () => setPictureIndex(pictureIndex + 1) : null}
              />
            </div>
          </div>
          : 
          <></>
        }
          <BlockContent
            className='text-xl'
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