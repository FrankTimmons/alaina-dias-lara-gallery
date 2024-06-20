import React from "react";
import { client, urlFor } from "../../lib/client";
import BlogPost from "@/components/BlogPost";
import ImageFadeIn from "react-image-fade-in";

export default function BlogPosts({ frontPage, blogPosts }) {

  return (
    <>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={
          urlFor(frontPage[0].image)
        }
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-orange-100/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">STORIES</h1> 
      </div>
      <div className="flex px-4 bg-orange-50 mt-[300px] min-h-screen py-6 flex-col items-center">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
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
