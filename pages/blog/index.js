import React from "react";
import { client, urlFor } from "../../lib/client";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import BlogPost from "@/components/BlogPost";

export default function BlogPosts({ frontPage, galleries, blogPosts }) {
  console.log(blogPosts);
  return (
    <div>
      <Header />
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
  
  console.log(galleries);
  return {
    props: {
      frontPage,
      galleries,
      blogPosts,
    },
  };
}
