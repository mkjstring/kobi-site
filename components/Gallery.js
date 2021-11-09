import React, {useState} from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import SliderModal, { openSliderModal } from "./SliderModal";
import {photos} from './Photos'


const Gallery = ({photos}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState (false);

  openSliderModal = (key) => {
    alert("test")
    console.log(e,key) 
    setShowModal(!showModal);
    setPhotoIndex(key);
  }
  


  return (
  <div className='eager-load' id='gallery'>
      <SliderModal photos = {photos} index = {photoIndex} showModal = {showModal} setShowModal = {setShowModal}/>
      {photos.map((photo) => (
        // eslint-disable-next-line react/jsx-key
        <FadeInSection className="gallery-item" key={photo.key}>
          <Image
            loading="eager"
            className="load-daddy"
            key={photo.key}
            alt={photo.alt}
            height={photo.height2}
            src={photo.src} // use normal <img> attributes as props
            width={photo.width2}
            onClick={()=>{openSliderModal(photo.key)}}
          />
        </FadeInSection>
      ))}
    </div>
  )
};

export default Gallery;
