import React from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import BlogPost from "@/components/BlogPost";

export default function BlogPosts({ frontPage, galleries, blogPosts }) {

  return (
    <div className='block lg:m-auto lg:w-[900px] mx-[5%]'>
      <Navbar galleries={galleries} />
      {blogPosts.map((post) => (
        <BlogPost post={post} />
      ))}
    </div>
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
