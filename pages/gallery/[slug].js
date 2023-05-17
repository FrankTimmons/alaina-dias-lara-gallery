import React from 'react'
import {client, urlFor} from '../../lib/client'

const GalleryDetails = ({galleryProp: {gallery, slug, statement, paintings}}) => {
  return (
    <div>{gallery}</div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "gallery"] {
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
  const query = `*[_type == "gallery" && slug.current == '${slug}'][0]`;  

  const galleryProp = await client.fetch(query);

  return {
    props: {galleryProp}
  }
}

export default GalleryDetails