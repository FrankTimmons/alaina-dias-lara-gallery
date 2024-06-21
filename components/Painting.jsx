import React, {useEffect, useState} from "react";
import {urlFor} from '../lib/client'
import ImageFadeIn from "react-image-fade-in";

const Painting = ({painting, onClick}) => {
  return (
    <div
      className="flex flex-col items-center content-center justify-center p-3 hover:scale-[1.02] duration-300 cursor-pointer"
      onClick={onClick}
    >
      <ImageFadeIn 
        className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain p-3'
        opacityTransition={1.5}
        src={urlFor(painting.image)}
      />
      <p className="text-xl font-bold text-center">{painting.name}</p>
      <p>{painting.dimensions}</p>
    </div>
  );
};

export default Painting;
