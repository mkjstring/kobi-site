import Image from "next/image";
import FadeInSection from "./FadeInSection";

const ImageComponent = ({ photo, openSliderModal }) => {

  return (
    <div className='image' key={photo.key} onClick={(e) => openSliderModal(e, photo.key)}>
      <FadeInSection className="image-fade" key={photo.key}>
        <Image
          loading="eager"
          className="load-daddy"
          key={photo.key}
          alt={photo.alt}
          height={photo.height2}
          src={photo.src} // use normal <img> attributes as props
          width={photo.width2}
        />
      </FadeInSection>
    </div>
  );
};

export default ImageComponent;
