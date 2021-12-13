
import FadeInSection from "./FadeInSection";
import Image from 'next/image'

export const Child = (photo,openSliderModal) => {

    return(
        <FadeInSection className="gallery-item" key={photo.key}>
          <Image
            loading="eager"
            className="load-daddy"
            key={photo.key}
            alt={photo.alt}
            height={photo.height}
            src={photo.src} // use normal <img> attributes as props
            width={photo.width}
            onClick={()=>openSliderModal()}
          />
        </FadeInSection>
    )

}