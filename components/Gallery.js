import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { getHomePageImages, getListOfImageSources } from "./Photos";

const Gallery = ({ photos }, onHomepage) => {
  const [lightboxState, setLightboxState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  
  const { photoIndex, isOpen } = lightboxState;

  const selectedPhotos = getHomePageImages(photos, onHomepage);
  const photoSrc = getListOfImageSources(selectedPhotos);

  const openSliderModal = (key) => {
    setLightboxState({ photoIndex: key, isOpen: true });
  };

  return (
    <div className="eager-load" id="gallery" onChildClick={openSliderModal}>
      {selectedPhotos.map((photo, index) => (
        // eslint-disable-next-line react/jsx-key
        <ImageComponent
          className="image-component"
          key={photo.key}
          photo={photo}
          openSliderModal={() => openSliderModal(index)}
        />
      ))}
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={photoSrc[photoIndex]}
            nextSrc={photoSrc[(photoIndex + 1) % photoSrc.length]}
            prevSrc={photoSrc[(photoIndex + photoSrc.length - 1) % photoSrc.length]}
            onCloseRequest={() => setLightboxState({ isOpen: false })}
            onMovePrevRequest={() =>
              setLightboxState({
                photoIndex: (photoIndex + photoSrc.length - 1) % photoSrc.length,
                isOpen: true
              })
            }
            onMoveNextRequest={() =>
              setLightboxState({
                photoIndex: (photoIndex + 1) % photoSrc.length,
                isOpen: true
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
