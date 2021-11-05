import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import {photos, getImagesForCarouselBasedOnScreenSize} from './Photos'
import useWindowSize from './WindowDimensions'

const items = [
  {
    src: "img/kobi/FWDGUY.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "img/kobi/FD1U7367.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "img/kobi/0X9A8593.JPG",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: "img/kobi/_F0A5112.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "4",
  }
];


const Carousel = () => {
  const { height, width } = useWindowSize();

  const orientation = width < 670 ? 'portrait' : 'landscape'
  
  const testPhoto = getImagesForCarouselBasedOnScreenSize(photos, orientation);

  return (
  <div className='carousel-container'>
    width: {width} ~ height: {height};
      <div className="row">
        <div className="column">
          <UncontrolledCarousel className="protect-image" items={testPhoto} indicators={false}/>
        </div>
      </div>
  </div>
)};

export default Carousel;
