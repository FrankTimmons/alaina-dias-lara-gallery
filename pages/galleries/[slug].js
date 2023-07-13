import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import GalleryView from "@/components/GalleryView";
import Painting from "@/components/Painting";
import ImageFadeIn from "react-image-fade-in";
import Footer from "@/components/Footer";
import Image from "next/image";

const GalleryDetails = ({ gallery, galleries }) => {
  const [galleryView, setGalleryView] = useState(false);
  const [currentPainting, setCurrentPainting] = useState(0);

  return (
    <>
      <Navbar galleries={galleries} />
      <Image
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(gallery?.bannerPhoto)}
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">{gallery?.gallery.toUpperCase()}</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        {/* <div>
          <h1 className="text-5xl font-bold text-center py-12">{gallery.gallery.toUpperCase()}</h1>
          <p className="text-xl p-6 bg-slate-100">{gallery.statement}</p>
        </div> */}
        <p className="text-xl p-6 bg-slate-100 mb-3">{gallery?.statement}</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {gallery?.paintings.map((painting, index) => (
            <Painting
              key={painting.name}
              painting={painting}
              onClick={() => {
                setCurrentPainting(index);
                setGalleryView(true);
              }}
            />
          ))}
          {galleryView ? (
            <GalleryView
              gallery={gallery}
              currentPainting={currentPainting}
              nextPainting={() => setCurrentPainting(currentPainting + 1)}
              previousPainting={() => setCurrentPainting(currentPainting - 1)}
              closeGalleryView={() => setGalleryView(false)}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
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
