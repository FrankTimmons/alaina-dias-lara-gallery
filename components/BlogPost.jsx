import React from 'react'

const BlogPost = ({post}) => {
  return (
    <div className='flex flex-col border-b-2 border-black py-4'>
      <div className='text-3xl'>{post.title}</div>
      <div className='text-xl'>{post.date}</div>
      <div className='text-xl'>{post.post}</div>
    </div>
  )
}

export default BlogPost