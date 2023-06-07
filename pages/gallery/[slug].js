import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import GalleryView from "@/components/GalleryView";
import Painting from "@/components/Painting";

const GalleryDetails = ({ gallery, galleries }) => {
  const [galleryView, setGalleryView] = useState(false);
  const [currentPainting, setCurrentPainting] = useState(0);

  return (
    <div className='block lg:m-auto lg:w-[900px] mx-[5%]'>
      <Navbar galleries={galleries} />
      <div className="py-4">
        <h1 className="text-3xl font-bold">{gallery.gallery.toUpperCase()}</h1>
        <p className="text-xl">{gallery.statement}</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center bg-stone-200">
        {gallery.paintings.map((painting, index) => (
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
