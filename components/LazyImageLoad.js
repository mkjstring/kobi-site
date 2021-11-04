import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import FadeInSection from "./FadeInSection";

import { photos } from "./Photos.js";

const pics = photos;

const LazyImageLoad = (pics) => (
  <div>
    <div className="lazy-load">
      {photos.map((photo) => (
       // eslint-disable-next-line react/jsx-key
       <FadeInSection className='gallery-item' key={photo.key}>
        <LazyLoadImage 
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
