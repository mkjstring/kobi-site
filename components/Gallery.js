import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

/* popout the browser and maximize to see more columns! -> */
const NewGallery = () => {
  return (
    <Gallery className="gallery" photos={photos} direction={"column"} />
  )
}
export default NewGallery;