import React from 'react';
import { client, urlFor } from '../lib/client';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function Home({frontPage}) {
  return (
    <main>
      <Header/>
      <Banner image={urlFor(frontPage[0].image)}/>
      {/* <img alt='' src={urlFor(frontPage[0].image)}></img>  */}
    </main>
  )
}

export async function getStaticProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  console.log(frontPage);
  return {
    props: {
      frontPage
    }
  };
}