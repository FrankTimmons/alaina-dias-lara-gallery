import React from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import BlogPost from "@/components/BlogPost";
import ImageFadeIn from "react-image-fade-in";
import Footer from "@/components/Footer";

export default function BlogPosts({ frontPage, galleries, blogPosts }) {

  return (
    <>
      <Navbar galleries={galleries} />
      <ImageFadeIn
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={
          urlFor(frontPage[0].image)
        }
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">BLOG</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        {blogPosts.map((post) => (
          <BlogPost post={post} />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  const galleries = await client.fetch(`*[_type == "galleries"]`);
  const blogPosts = await client.fetch(`*[_type == "blogPost"]`);
  
  return {
    props: {
      frontPage,
      galleries,
      blogPosts,
    },
  };
}
