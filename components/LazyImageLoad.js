import React from "react";
import Image from 'next/image'
import FadeInSection from "./FadeInSection";

import { photos } from "./Photos.js";

const pics = photos;

const LazyImageLoad = (pics) => (
  <div>
    <div className="lazy-load">
      {photos.map((photo) => (
       // eslint-disable-next-line react/jsx-key
       <FadeInSection className='gallery-item' key={photo.key}>
        <Image
          className="load-daddy"
          key={photo.key}
          alt={photo.alt}
          height={photo.height2}
          src={photo.src} // use normal <img> attributes as props
          width={photo.width2}
        />
        </FadeInSection>
      ))}
    </div>
  </div>
);

export default LazyImageLoad;
