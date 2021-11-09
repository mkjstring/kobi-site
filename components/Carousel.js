import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import {photos, getImagesForCarouselBasedOnScreenSize} from './Photos'
import useWindowSize from './WindowDimensions'

const Carousel = () => {
  const { height, width } = useWindowSize();

  const orientation = width < 670 ? 'portrait' : 'landscape'
  
  const testPhoto = getImagesForCarouselBasedOnScreenSize(photos, orientation);

  return (
  <div className='carousel-container'>
      <div className="row">
        <div className="column">
          <UncontrolledCarousel className="protect-image" items={testPhoto} indicators={false}/>
        </div>
      </div>
  </div>
)};

export default Carousel;
