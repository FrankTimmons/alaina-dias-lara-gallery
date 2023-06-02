import React, {useEffect, useState} from "react";
import {urlFor} from '../lib/client'

const Painting = ({painting, onClick}) => {
  const [style, setStyle] = useState("h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] animate-[imgFadeIn_ease_10s] fill-mode-forwards cursor-pointer p-3");
  
  useEffect(() => {
    setStyle("h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain opacity-0 p-3")
  }, [painting]);

  return (
    <div
      key={painting.name}
      className="flex flex-col items-center content-center justify-center p-3"
      onClick={onClick}
    >
      <img
        onLoad={() => setStyle('h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] object-contain animate-imgFadeIn fill-mode-forwards cursor-pointer p-3')}
        className={style}
        src={urlFor(painting.image)}
      />
      <p className="text-xl">{painting.name}</p>
      <p>{painting.dimensions}</p>
    </div>
  );
};

export default Painting;
