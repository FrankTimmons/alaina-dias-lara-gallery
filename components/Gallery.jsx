import React, {useState} from 'react'
import GalleryView from "@/components/GalleryView";
import Painting from "@/components/Painting";
import ImageFadeIn from "react-image-fade-in";
import { client, urlFor } from "../lib/client";

const Gallery = ({gallery, galleries}) => {
  const [galleryView, setGalleryView] = useState(false);
  const [currentPainting, setCurrentPainting] = useState(0);

  return (
    <>
      <ImageFadeIn
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(gallery?.bannerPhoto)}
      />
      <div>
        <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">{gallery?.gallery.toUpperCase()}</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        {
          gallery.statement &&
          <div className='flex justify-center text-center'>
            <p className="text-2xl p-6 bg-slate-100 mb-3">{gallery?.statement}</p>
          </div>
        }
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {galleries?.map((subGallery, index) => (      
            subGallery.parentGallery == gallery?.slug.current &&
            <div
              key={subGallery._id}
              className="flex flex-col items-center content-center justify-center p-3 font-roboto hover:scale-[1.02] duration-300 group"
            >
              <ImageFadeIn
                className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain cursor-pointer p-3'
                src={urlFor(subGallery.bannerPhoto).quality(10)}
                onClick={() => {window.location.href=`/galleries/${subGallery.slug.current}`}} 
              />
              <p className="text-xl font-bold group-hover:underline">{subGallery.gallery.toUpperCase()}</p>
              <p className="text-sm font-bold text-gray-600">{subGallery.paintings?.length} PAINTING(S)</p>
            </div>          
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          { gallery?.paintings &&
            gallery?.paintings.map((painting, index) => (
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
      </div>
    </>
  )
}

export default Gallery