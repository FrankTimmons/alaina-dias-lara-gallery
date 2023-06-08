import React from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import BlogPost from "@/components/BlogPost";
import ImageFadeIn from "react-image-fade-in";

export default function BlogPosts({ frontPage, galleries, blogPosts }) {

  return (
    <>
      <Navbar galleries={galleries} />
      <ImageFadeIn
        className='w-full h-[300px] object-cover -z-10 border-b-2 border-black'
        src={
          urlFor(frontPage[0].image).quality(10)
        }
      />
      <div className="p-6">
        <h1 className="text-5xl font-bold text-center py-12">BLOG</h1>
        {blogPosts.map((post) => (
          <BlogPost post={post} />
        ))}
      </div>
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
