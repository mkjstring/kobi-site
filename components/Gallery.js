import React, { useState } from "react";
import SliderModal, { openSliderModal } from "./SliderModal";
import ImageComponent from "./ImageComponent";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { light } from "@material-ui/core/styles/createPalette";
import { getListOfImageSources } from "./Photos";

const Gallery = ({ photos }) => {
  const [lightboxState, setLightboxState] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const { photoIndex, isOpen } = lightboxState;

  const photoSrc = getListOfImageSources(photos);

  const openSliderModal = (key) => {
    setLightboxState({ photoIndex: key, isOpen: true });
    console.log(photos[key].src);
  };

  return (
    <div className="eager-load" id="gallery" onChildClick={openSliderModal}>
      {photos.map((photo) => (
        // eslint-disable-next-line react/jsx-key
        <ImageComponent
          className="image-component"
          key={photo.key}
          photo={photo}
          openSliderModal={() => openSliderModal(photo.key)}
        />
      ))}
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={photoSrc[photoIndex]}
            nextSrc={photoSrc[(photoIndex + 1) % photoSrc.length]}
            prevSrc={photoSrc[(photoIndex + photos.length - 1) % photos.length]}
            onCloseRequest={() => setLightboxState({ isOpen: false })}
            onMovePrevRequest={() =>
              setLightboxState({
                photoIndex: (photoIndex + photos.length - 1) % photos.length,
              })
            }
            onMoveNextRequest={() =>
              setLightboxState({
                photoIndex: (photoIndex + 1) % photos.length,
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
