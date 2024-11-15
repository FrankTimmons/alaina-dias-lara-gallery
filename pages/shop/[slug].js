import React, { useState } from "react";
import { client, urlFor, serializers } from "../../lib/client";
import ImageFadeIn from "react-image-fade-in";
import BlockContent from '@sanity/block-content-to-react'
import Link from "next/link";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import OrderForm from "@/components/OrderForm";

const ProductDetails = ({ product, products}) => {
  const [pictureIndex, setPictureIndex] = useState(0)
  const [ordering, setOrdering] = useState(false)
  const handleFormClick = () => {
    setOrdering(!ordering)
  }
  
  return (
    <>
      <img
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(product?.images[0])}
      />
      <div className="fixed top-[125px] text-center inset-x-0 -z-10 bg-orange-100/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">{product?.product.toLowerCase()}</h1> 
      </div>
      <div className="px-4 bg-orange-50 mt-[300px] min-h-screen py-6">
        <div className='flex sm:flex-row flex-col sm:items-center sm:gap-6 gap-3 bg-orange-100 p-6 mx-auto mt-6 lg:w-2/3'>
          <div className='flex items-center flex-col sm:w-[600px] sm:h-[700px] w-auto h-auto'>
            <ImageFadeIn
              className='object-contain sm:w-[600px] sm:h-[600px] w-[auto] h-[400px]'
              opacityTransition={1.5}
              src={urlFor(product?.images[pictureIndex]).quality(10)}
            />
            <div className='flex flex-row justify-center gap-3'>
              {product?.images.map((image, index) => 
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
              <p className='text-3xl font-bold text-black'>{product?.product}</p>
              <p className='text-xl text-blue-800'>{formatCurrencyString({value: product?.price, currency: "USD"})}</p>
            </div>
            <BlockContent
              blocks={product?.description}
              serializers={serializers}
              projectId={"3a3zvinb"}
              dataset={"production"}
            />
            <div className="flex flex-row gap-2">
              <button 
                onClick={handleFormClick}
                className="cursor-pointer border-black border-2 p-2 bg-orange-100 hover:bg-black hover:text-orange-100 duration-200 font-bold w-fit"                
              >
                place order
              </button>
            </div>
            {ordering && <OrderForm handleFormClick={handleFormClick} product={product}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params: { slug } }) => {
  const product = await client.fetch(
    `*[_type == "products" && slug.current == '${slug}'][0]`
  );
  const products = await client.fetch(`*[_type == "products"]`);

  return {
    props: { product, products },
  };
};

export default ProductDetails;