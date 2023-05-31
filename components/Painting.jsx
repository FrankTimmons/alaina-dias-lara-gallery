import React, {useEffect, useState} from "react";
import {urlFor} from '../lib/client'

const Painting = ({painting, onClick}) => {
  const [style, setStyle] = useState("h-[300px] w-[300px] animate-[imgFadeIn_ease_10s] fill-mode-forwards");
  
  useEffect(() => {
    setStyle("h-[300px] w-[300px] object-contain opacity-0")
  }, [painting]);

  return (
    <div
      key={painting.name}
      className="mt-10 flex flex-col items-center content-center justify-center"
      onClick={onClick}
    >
      <img
        onLoad={() => setStyle('h-[300px] w-[300px] object-contain animate-imgFadeIn fill-mode-forwards')}
        className={style}
        src={urlFor(painting.image)}
      />
      <p className="text-xl">{painting.name}</p>
      <p>{painting.dimensions}</p>
    </div>
  );
};

export default Painting;
