import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "reactstrap";
import FadeInSection from "./FadeInSection";

import { photos } from "./Photos";

const pics = photos;

const LazyImageLoad = (pics) => (
  <div>
    <div className="lazy-load">
      {photos.map((photo) => (
       <FadeInSection className='gallery-item'>
        <LazyLoadImage 
          className="load-daddy"
          key={photo.id}
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
