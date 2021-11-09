import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

const SliderModal = ({ photos }, index, showModal, setShowModal) => {
  return showModal ? (
    <div className="modal">
      <ImageSlider photos={photos} index={index} />
    </div>
  ) : null;
};

export default SliderModal;
