import React, { useState } from "react";
import SliderModal, { openSliderModal } from "./SliderModal";
import ImageComponent from "./ImageComponent";

const Gallery = ({ photos }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openSliderModal = (e, key) => {
    alert(key);
    setShowModal(!showModal);
    setPhotoIndex(key);
  };

  return (
    <div className="eager-load" id="gallery" onChildClick={openSliderModal}>
      {photos.map((photo) => (
        // eslint-disable-next-line react/jsx-key
        <ImageComponent
          className="image-component"
          key={photo.key}
          photo={photo}
          openSliderModal={openSliderModal}
        />
      ))}
      <SliderModal
        photos={photos}
        index={photoIndex}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Gallery;
