import React, { useState, useEffect } from "react";
import { client, urlFor, serializers } from "../../lib/client";
import Navbar from "@/components/Navbar";
import ImageFadeIn from "react-image-fade-in";
import Footer from "@/components/Footer";
import BlockContent from '@sanity/block-content-to-react'
import Link from "next/link";

const ProductDetails = ({ product, products, galleries }) => {
  const [pictureIndex, setPictureIndex] = useState(0)

  return (
    <>
      <Navbar galleries={galleries} />
      <ImageFadeIn
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(product.images[0])}
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">{product.product.toUpperCase()}</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        <div className='flex sm:flex-row flex-col sm:items-center sm:gap-6 gap-3 bg-slate-100 p-6 mx-auto mt-6 w-2/3'>
          <div className='flex items-center flex-col sm:w-[600px] sm:h-[700px] w-auto h-auto'>
            <ImageFadeIn
              className='object-contain sm:w-[600px] sm:h-[600px] w-[auto] h-[400px]'
              opacityTransition={1.5}
              src={urlFor(product.images[pictureIndex]).quality(10)}
            />
            <div className='flex flex-row justify-center gap-3'>
              {product.images.map((image, index) => 
                <div key={index} className='w-[75px] h-[75px] m-2 cursor-pointer '>
                  <ImageFadeIn
                    className='object-cover w-[75px] h-[75px] hover:border-blue-800 border-2 duration-200'
                    onClick={() => setPictureIndex(index)}
                    opacityTransition={1.5}
                    src={urlFor(image).quality(5)}
                  /> 
                </div>
              )}
            </div>
          </div>
          <div className="h-auto flex flex-col gap-6 justify-between text-xl">
            <div>
              <p className='text-3xl font-bold text-black'>{product.product}</p>
              <p className='text-xl text-blue-800'>${product.price}</p>
            </div>
            <BlockContent
              blocks={product.description}
              serializers={serializers}
              projectId={"3a3zvinb"}
              dataset={"production"}
            />
            <Link 
              type="button" 
              className="text-xl rounded-md bg-blue-800 text-white p-4 font-bold w-fit hover:bg-white hover:text-blue-800 border-blue-800 border-2 duration-200 mb-[100px]" 
              href={product.paymentLink}
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "products"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const product = await client.fetch(
    `*[_type == "products" && slug.current == '${slug}'][0]`
  );
  const products = await client.fetch(`*[_type == "products"]`);
  const galleries = await client.fetch(`*[_type == "galleries"]`);

  return {
    props: { product, products, galleries },
  };
};

export default ProductDetails;