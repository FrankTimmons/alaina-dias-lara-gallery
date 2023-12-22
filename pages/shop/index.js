import React from 'react'
import ImageFadeIn from 'react-image-fade-in';
import { client, urlFor } from '@/lib/client';
import { formatCurrencyString } from 'use-shopping-cart';

const Shop = ({frontPage, products}) => {
  return (
    <>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(frontPage[0].image)}
      />
      <div className="absolute top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">SHOP</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center content-center justify-center p-3 font-roboto hover:scale-[1.02] duration-300 group"
            >
              <ImageFadeIn
                className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain cursor-pointer p-3'
                src={urlFor(product?.images[0]).quality(10)}
                onClick={() => {window.location.href=`/shop/${product.slug.current}`}} 
              />
              <p className="text-2xl font-bold group-hover:underline">{product.product.toUpperCase()}</p>
              <p className="text-xl font-bold">{formatCurrencyString({value: product.price, currency: "USD"})}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shop;

export async function getStaticProps() {
  const frontPage = await client.fetch(`*[_type == "frontPage"]`);
  const products = await client.fetch(`*[_type == "products"]`);
  return {
    props: {
      frontPage,
      products
    },
  };
}
