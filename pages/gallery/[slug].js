import React from 'react'
import {client, urlFor} from '../../lib/client'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

const GalleryDetails = ({gallery, galleries}) => {
  return (
    <>
      <Header/>
      <div className='text-2xl'>{gallery.gallery}</div>
      <div className='grid grid-cols-3 gap-4 justify-center'>
        {gallery.paintings.map((painting) =>
          <div key={painting._id}className='mt-10 flex flex-col items-center content-center justify-center'>
            <img className='h-[300px] w-[300px] object-contain' src={urlFor(painting.image)}/>
            <p className='text-xl'>{painting.name}</p>
            <p>{painting.dimensions}</p>
          </div>
        )}
      </div>
      <Navbar galleries={galleries}/>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "galleries"] {
    slug {
      current
    }
  }`;

  const galleries = await client.fetch(query);

  const paths = galleries.map((gallery) => ({
    params: {
      slug: gallery.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const gallery = await client.fetch(`*[_type == "galleries" && slug.current == '${slug}'][0]`);
  const galleries = await client.fetch(`*[_type == "galleries"]`);

  return {
    props: {gallery, galleries}
  }
}

export default GalleryDetails