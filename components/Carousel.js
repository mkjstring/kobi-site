import React from "react";
import { UncontrolledCarousel } from "reactstrap";

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
];

const Carousel = () => (
  <div className='carousel-container'>
      <div className="row">
        <div className="column">
          <UncontrolledCarousel className="protect-image" items={items} indicators={false}/>
        </div>
      </div>
  </div>
);

export default Carousel;
