import React, {useState, useEffect} from 'react'
import {client, urlFor} from '../../lib/client'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import GalleryView from '@/components/GalleryView'
import Painting from '@/components/Painting'

const GalleryDetails = ({gallery, galleries}) => {
  const [galleryView, setGalleryView] = useState(false);
  const [currentPainting, setCurrentPainting] = useState(0);
  const [rerender, setRerender] = useState(false);

  return (
    <>
      <Header/>
      <Navbar galleries={galleries}/>
      <div className='text-2xl text-center'>{gallery.gallery.toUpperCase()}</div>
      <div className='grid grid-cols-3 gap-4 justify-center'>
        {gallery.paintings.map((painting, index) =>
          <Painting 
            painting={painting} 
            onClick={() => {
              setCurrentPainting(index);
              setGalleryView(true);
            }}
          />
        )}
        {galleryView ? 
          <GalleryView 
            gallery={gallery} 
            currentPainting={currentPainting} 
            nextPainting={() => setCurrentPainting(currentPainting+1)} 
            previousPainting={()=>setCurrentPainting(currentPainting-1)} 
            closeGalleryView={()=>setGalleryView(false)}/> 
          : 
          <></>
        }
      </div>
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