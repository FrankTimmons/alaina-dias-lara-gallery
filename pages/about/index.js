import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { client, urlFor } from '../../lib/client';
import ImageFadeIn from "react-image-fade-in";

const About = ({frontPage, galleries}) => {
  return (
    <div>
      <Navbar galleries={galleries}/>
      <ImageFadeIn
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={
          urlFor(frontPage[0].image)
        }
      />
      <AboutMe />
      <Footer />
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

export default About