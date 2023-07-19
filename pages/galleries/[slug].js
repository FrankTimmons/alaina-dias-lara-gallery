import React from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ImageFadeIn from "react-image-fade-in";

const GalleryDetails = ({ gallery, galleries }) => {
  
  return (
    <>
      <Navbar galleries={galleries} />      
      <Gallery gallery={gallery} galleries={galleries}/>
      <Footer/>
    </>
  );
};


export const getStaticPaths = async () => {
  const query = `*[_type == "galleries"] {
    slug {
      current
    }
  }`;

  const galleries = await client.fetch(query);

  const paths = galleries.map((gallery) => ({
    params: {
      slug: gallery.slug.current,
    },
  }));


  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const gallery = await client.fetch(
    `*[_type == "galleries" && slug.current == '${slug}'][0]`
  );
  const galleries = await client.fetch(`*[_type == "galleries"]`);

  return {
    props: { gallery, galleries },
  };
};

export default GalleryDetails;
