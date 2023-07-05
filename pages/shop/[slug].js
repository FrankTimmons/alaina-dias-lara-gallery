import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "@/components/Navbar";
import ImageFadeIn from "react-image-fade-in";
import Footer from "@/components/Footer";

const ProductDetails = ({ product, products, galleries }) => {

  return (
    <>
      <Navbar galleries={galleries} />
      <ImageFadeIn
        className='fixed top-0 w-full h-[300px] object-cover -z-10'
        src={urlFor(product.images[0])}
      />
      <div className="fixed top-[125px] text-center inset-x-0 -z-10 bg-white/80 mx-auto w-fit">
        <h1 className="text-5xl font-bold text-center p-6">{product.product.toUpperCase()}</h1> 
      </div>
      <div className="px-4 bg-white mt-[300px] min-h-screen py-6">
        {/* <div>
          <h1 className="text-5xl font-bold text-center py-12">{gallery.gallery.toUpperCase()}</h1>
          <p className="text-xl p-6 bg-slate-100">{gallery.statement}</p>
        </div> */}
        <p className="text-xl p-6 bg-slate-100">{product.description}</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {product.images.map((images, index) => (
            <></>
          ))}
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
    fallback: "blocking",
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