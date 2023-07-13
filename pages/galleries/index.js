import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'
import ImageFadeIn from 'react-image-fade-in';
import { client, urlFor } from '@/lib/client';

const Galleries = ({frontPage, galleries}) => {
  console.log(frontPage)
  return (
    <>
      <Navbar galleries={galleries} />
      <ImageFadeIn
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(frontPage[0].image)}
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">GALLERIES</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="flex flex-col items-center content-center justify-center p-3 font-roboto hover:scale-[1.02] duration-300 group"
            >
              <ImageFadeIn
                className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain cursor-pointer p-3'
                src={urlFor(gallery.bannerPhoto).quality(10)}
                onClick={() => {window.location.href=`/galleries/${gallery.slug.current}`}} 
              />
              <p className="text-xl font-bold group-hover:underline">{gallery.gallery.toUpperCase()}</p>
              <p className="text-sm font-bold text-gray-600">{gallery.paintings.length} PAINTING(S)</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Galleries

export async function getStaticProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  const galleries = await client.fetch(`*[_type == "galleries"]`);
  return {
    props: {
      frontPage,
      galleries
    }
  };
}