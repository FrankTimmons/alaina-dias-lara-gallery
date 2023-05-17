import React from 'react';
import { client, urlFor } from '../lib/client';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';

export default function Home({frontPage, galleries}) {
  return (
    <main>
      <Header/>
      <Banner banner={frontPage[0]}/>
      <Navbar galleries={galleries}/>
    </main>
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