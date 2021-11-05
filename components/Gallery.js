import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";

/* popout the browser and maximize to see more columns! -> */

const NewGallery = () => {
  return (
    <section id="gallery">
      <Gallery
        className="gallery"
        photos={photos}
        direction={"column"}
        margin={"5"}
      />
    </section>
  );
  /*checkout*/
};
export default NewGallery;
