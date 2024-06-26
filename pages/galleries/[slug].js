import React, {useState, useEffect} from "react";
import { client, urlFor } from "../../lib/client";
import GalleryView from "@/components/GalleryView";
import Painting from "@/components/Painting";
import ImageFadeIn from "react-image-fade-in";

const GalleryDetails = ({ gallery, galleries }) => {
  const [galleryView, setGalleryView] = useState(false);
  const [currentPainting, setCurrentPainting] = useState(0);
  const [loading, setLoading] = useState(true);

  // commit
  
  useEffect(() => {
    setLoading(false)
  }, [loading])
  
  return (
    <>
      <div className='fixed top-0 w-full h-[300px] object-cover -z-20 bg-black'/>      
      <img
        className={ loading ? 'hidden' : 'fixed top-0 w-full h-[300px] object-cover -z-10'}
        src={urlFor(gallery?.bannerPhoto)}
        onLoad={() => setLoading(false)}
      />     
      <div>
        <div className="fixed top-[125px] text-center inset-x-0 -z-10 bg-orange-100/80 mx-auto w-fit rounded-sm">
        <h1 className="text-5xl font-bold text-center p-6">{gallery.gallery.toLowerCase()}</h1> 
      </div>
      <div className="px-4 bg-orange-50 mt-[300px] min-h-screen py-6">
        {
          gallery.statement &&
          <div className='flex flex-col justify-center text-center content-center items-center'>
            <p className="text-2xl p-6 bg-orange-100 my-5 lg:w-2/3 w-auto">{gallery.statement}</p>
          </div>
        }
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {galleries?.map((subGallery, index) => (      
            subGallery.parentGallery == gallery?.slug.current &&
            <div
              key={subGallery._id}
              className="flex flex-col items-center content-center justify-center p-3 hover:scale-[1.02] duration-300 group"
            >
              <ImageFadeIn
                className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain cursor-pointer p-3'
                src={urlFor(subGallery.bannerPhoto).quality(25)}
                onClick={() => {window.location.href=`/galleries/${subGallery.slug.current}`}} 
              />
              <p className="text-xl font-bold group-hover:underline text-center">{subGallery.gallery}</p>
              <p className="text-sm font-bold text-gray-600">{subGallery.paintings?.length} painting(s)</p>
            </div>          
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2">
          { gallery.paintings &&
            gallery.paintings.map((painting, index) => (
                <Painting
                  key={painting.name}
                  painting={painting}
                  onClick={() => {
                    setCurrentPainting(index);
                    setGalleryView(true);
                  }}
                />
              ))
            }
            {galleryView && (
              <GalleryView
                galleryPaintings={gallery.paintings}
                currentPainting={currentPainting}
                nextPainting={() => setCurrentPainting(currentPainting + 1)}
                previousPainting={() => setCurrentPainting(currentPainting - 1)}
                closeGalleryView={() => setGalleryView(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};


// export const getStaticPaths = async () => {
//   const query = `*[_type == "galleries"] {
//     slug {
//       current
//     }
//   }`;

//   const galleries = await client.fetch(query);

//   const paths = galleries.map((gallery) => ({
//     params: {
//       slug: gallery.slug.current,
//     },
//   }));


//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async ({ params: { slug } }) => {
  const gallery = await client.fetch(
    `*[_type == "galleries" && slug.current == '${slug}'][0]`
  );
  const galleries = await client.fetch(`*[_type == "galleries"]`);

  return {
    props: { gallery, galleries },
  };
};

export default GalleryDetails;
