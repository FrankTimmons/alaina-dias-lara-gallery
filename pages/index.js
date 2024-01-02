import React from 'react';
import { client, urlFor } from '../lib/client';
import Banner from '@/components/Banner';

export default function Home({frontPage}) {
  return (
    <div className='block m-auto'>
      <Banner banner={frontPage[0]}/>
    </div>
  )
}

export async function getServerSideProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  return {
    props: {
      frontPage,
    },
  };
}