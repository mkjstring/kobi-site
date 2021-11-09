import React, { useState } from "react";
import Image from "next/image";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ photos }, index) => {
  const [current, setCurrent] = useState(index ? index : 1);
  const length = photos.length;

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {photos.map((photo, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
              { index === current && (
                    <Image
                    loading="eager"
                    key={photo.key}
                    alt={photo.alt}
                    height={photo.orientation === 'landscape' ?  photo.height : photo.height2}
                    width={photo.orientation === 'landscape' ? photo.width : photo.width2}
                    src={photo.src}
                  />
              )}
    
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
