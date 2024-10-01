import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import BlogPost from "@/components/BlogPost";
import ImageFadeIn from "react-image-fade-in";

export default function BlogPosts({ frontPage, blogPosts }) {
  const [currentPost, setCurrentPost] = useState(0);
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
      <div className="flex px-4 bg-orange-50 mt-[300px] min-h-screen py-6 flex-col items-center overflow-hidden">        
          <div className="flex justify-between px-6 lg:w-2/3 w-[90%]">
            {currentPost != 0 ? 
              <div onClick={prevPost} className="cursor-pointer hover:underline">Previous Post</div>
              : <div className="h-2 w-2 bg-orange-50"/>
            }
            {currentPost != (blogPosts.length - 1) ?        
              <div onClick={nextPost} className="cursor-pointer hover:underline">Next Post</div>
              : <div className="h-2 w-2 bg-orange-50"/>
            }
          </div>
          <BlogPost key={currentPost} post={blogPosts[currentPost]} />
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
