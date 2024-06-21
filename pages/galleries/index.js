import React from 'react'
import ImageFadeIn from 'react-image-fade-in';
import { client, urlFor } from '@/lib/client';

const Galleries = ({frontPage, galleries}) => {

  return (
    <>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(frontPage[0].image)}
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-orange-100/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-4">galleries</h1> 
      </div>
      <div className="px-4 bg-orange-50 mt-[300px] min-h-screen py-6 flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {galleries.map((gallery, index) => (
            gallery.subGallery != true &&
            <div
              key={index}
              className="flex flex-col items-center content-center justify-center p-3 hover:scale-[1.02] duration-300 group"
            >
              <ImageFadeIn
                className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-cover cursor-pointer p-3'
                src={urlFor(gallery.bannerPhoto)}
                onClick={() => {window.location.href=`/galleries/${gallery.slug.current}`}} 
              />
              <p className="text-xl font-bold group-hover:underline text-center">{gallery.gallery.toUpperCase()}</p>
              { gallery.paintings &&
                <p className="text-sm font-bold text-gray-600">{gallery.paintings.length} painting(s)</p>
              }
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Galleries

export async function getServerSideProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  const galleries = await client.fetch(`*[_type == "galleries"] | order(order asc)`);
  return {
    props: {
      frontPage,
      galleries
    },
  };
}