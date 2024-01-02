import AboutMe from '@/components/AboutMe'
import React from 'react'
import { client, urlFor } from '../../lib/client';
import ImageFadeIn from "react-image-fade-in";

const About = ({frontPage}) => {
  return (
    <div>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={
          urlFor(frontPage[0].image)
        }
      />
      <AboutMe />
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

export default About