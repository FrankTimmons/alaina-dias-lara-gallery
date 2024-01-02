import AboutMe from '@/components/AboutMe'
import React from 'react'
import { client, urlFor } from '../../lib/client';
import ImageFadeIn from "react-image-fade-in";

const About = ({frontPage, about}) => {
  console.log(about[0])
  return (
    <div>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={
          urlFor(frontPage[0].image)
        }
      />
      <AboutMe about={about[0]}/>
    </div>
  )
}

export async function getServerSideProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  const about = await client.fetch(`*[_type == "about"]`);
  return {
    props: {
      frontPage,
      about
    },
  };
}

export default About