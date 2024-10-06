import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { client, urlFor, serializers } from "../../lib/client";
import BlogPost from "@/components/BlogPost";
import ImageFadeIn from "react-image-fade-in";
import BlockContent from '@sanity/block-content-to-react'

export default function BlogPosts({ frontPage, blogPosts }) {
  const [currentPost, setCurrentPost] = useState(0);
  const [allPosts, setAllPosts] = useState(false);
  const nextPost = () => setCurrentPost(currentPost + 1);
  const prevPost = () => setCurrentPost(currentPost - 1);

  return (
    <>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={
          urlFor(frontPage[0].image)
        }
      />
      <div className="fixed top-[125px] text-center inset-x-0 -z-10 bg-orange-100/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">perspectives</h1> 
      </div>
      <div className="flex px-4 bg-orange-50 mt-[300px] py-6 flex-col items-center overflow-hidden">        
          <div className="flex justify-between px-6 lg:w-2/3 w-[90%]">
            {allPosts == false && currentPost != 0 ? 
              <div onClick={prevPost} className="cursor-pointer hover:underline font-bold flex">
                <FaAngleLeft className="mt-1"/>
                <p>previous post</p>
              </div>
              : 
              !allPosts &&
              <div onClick={()=>setAllPosts(true)} className="cursor-pointer hover:underline font-bold flex">
                <p>all posts</p>
              </div>
            }
            {allPosts == false && currentPost != (blogPosts.length - 1) ?        
              <div onClick={nextPost} className="cursor-pointer hover:underline font-bold flex">
                <p>next post</p>
                <FaAngleRight className="mt-1"/>
              </div>
              : <div className="h-2 w-2 bg-orange-50"/>
            }
          </div>
          {!allPosts ? 
            <BlogPost key={currentPost} post={blogPosts[currentPost]} />
            : 
            <div className='flex flex-col py-4 p-6 m-6 lg:w-2/3 w-[90%]'>
            <div className='text-3xl font-bold text-black md:text-6xl mt-3 mb-10'>All Posts</div>
            <div className='sm:text-xl text-md bg-white p-8'>
              {blogPosts.map((post, index) => (                
                <li     
                  key={index}
                  className="flex flex-row items-center cursor-pointer hover:underline" 
                  onClick={()=>{
                    setCurrentPost(index); 
                    setAllPosts(false);
                  }}
                >
                  <FiExternalLink className="mr-4"/>
                  <div className="flex flex-col mb-4">
                    <div className='text-sm text-gray-400'>{post.date}</div>
                    <p className='cursor-pointer hover:underline'>{post.title}</p>                    
                  </div>                                          
                </li>                    
              ))}
              </div>
            </div>
          }
          {allPosts != true &&
            <div onClick={()=>setAllPosts(true)} className="cursor-pointer hover:underline font-bold flex justify-center">
            <p>see all posts</p>
            </div>
          }
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  const blogPosts = await client.fetch(`*[_type == "blogPost"]`);
  
  return {
    props: {
      frontPage,
      blogPosts,
    },
  };
}
