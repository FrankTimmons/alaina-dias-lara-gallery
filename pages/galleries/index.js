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
      <div className="px-4 bg-white mt-[300px] min-h-screen pb-6">
        <div>
          <h1 className="text-5xl font-bold text-center py-12">GALLERIES</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {galleries.map((gallery, index) => (
            <div
              className="flex flex-col items-center content-center justify-center p-3 font-roboto"
            >
              <ImageFadeIn
                className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain cursor-pointer p-3'
                src={urlFor(gallery.bannerPhoto)}
                onClick={() => {window.location.href=`/galleries/${gallery.slug.current}`}} 
              />
              <p className="text-xl font-bold">{gallery.gallery.toUpperCase()}</p>
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