import React from 'react';
import { client, urlFor } from '../lib/client';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home({frontPage, galleries}) {
  return (
    <div className='block m-auto'>
      <Banner banner={frontPage[0]}/>
    </div>
  )
}

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