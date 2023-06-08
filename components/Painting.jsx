import React, {useEffect, useState} from "react";
import {urlFor} from '../lib/client'
import ImageFadeIn from "react-image-fade-in";

const Painting = ({painting, onClick}) => {
  return (
    <div
      className="flex flex-col items-center content-center justify-center p-3 font-roboto"
      onClick={onClick}
    >
      <ImageFadeIn 
        className='h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain cursor-pointer p-3'
        opacityTransition={1.5}
        src={urlFor(painting.image).quality(10)}
      />
      <p className="text-xl font-bold">{painting.name.toUpperCase()}</p>
      <p>{painting.dimensions}</p>
    </div>
  );
};

export default Painting;
