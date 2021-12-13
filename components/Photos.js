const LANDSCAPE = 'landscape';
const PORTRAIT = 'portrait'

const PATH = '/img/optimized/'

export const photos = [
    {
      src: `${PATH}FD1U7915.jpg`,
      width:  929.9,
      height: 620,
      key: 0,
      width2: 466,
      height2: 310.7,
      alt: "Warmly colored photo of <BAND NAME HERE> performing live",
      useInHeroCarousel: false,
      orientation: LANDSCAPE,
      homepage: true
    },
    {
      src: `${PATH}0X9A9184.jpg`,
      width: 3,
      height: 4,
      key: 1,
      width2: 466,
      height2: 621.3,
      alt: "Birds eye view, violet-hued photograph of brightly colored buildings by a forested river",
      useInHeroCarousel: true,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}7H2A8660 2.JPG`,
      width:  929.9,
      height: 620,
      key: 2,
      width2: 466,
      height2: 310.7,
      alt: "Live band performance. Performer laying on the ground and causing sparks with a saw",
      useInHeroCarousel: false,
      orientation: LANDSCAPE,
      homepage: true
    },
    {
      src: `${PATH}_F0A5112.jpg`,
      width: 3,
      height: 4,
      key: 3,
      width2: 466,
      height2: 621.3,
      alt: "Black and white photograph of snowcapped woods surrounding a waterfall and river",
      useInHeroCarousel: true,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}7H2A1896.JPG`,
      width: 3,
      height: 4,
      key: 4,
      width2: 466,
      height2: 621.3,
      alt: "Black and white photograph of a lone, winter dormant tree against an overcast sky ",
      useInHeroCarousel: false,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}0X9A9188.jpg`,
      width: 3,
      height: 4,
      key: 5,
      width2: 466,
      height2: 621.3,
      alt: "Birds eye view photograph of a beach with a small, lone figure walking along the coast. ",
      useInHeroCarousel: "",
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}1S6A3166.jpg`,
      width: 3,
      height: 4,
      key: 6,
      width2: 466,
      height2: 621.3,
      alt: "Black and white portrait",
      useInHeroCarousel: false,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}FD1U8022.jpg`,//source.unsplash.com/I1ASdgphUH4/800x599,
      width: 3,
      height: 4,
      key: 7,
      width2: 466,
      height2: 621.3,
      alt:  "Live performance of <BAND NAME HERE> with smoke and purple hue",
      useInHeroCarousel: true,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}FD1U6972-3.jpg`,
      width: 3,
      height: 4,
      key: 8,
      width2: 466,
      height2: 621.3,
      alt: "Color photo of man walking in downtown Huntsville, AL across wet pavement crosswalk",
      useInHeroCarousel: true,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}0X9A8563.jpg`,
      width: 3,
      height: 4,
      key: 9,
      width2: 466,
      height2: 621.3,
      alt: "Black and white portrait",
      useInHeroCarousel: false,
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}0X9A0027.JPG`,
      width: 3,
      height: 4,
      key: 10,
      width2: 466,
      height2: 621.3,
      alt: "Black and white portrait",
      useInHeroCarousel: "",
      orientation: PORTRAIT,
      homepage: true
    },
    {
      src: `${PATH}FD1U7367.jpg`,
      width:  929.9,
      height: 620,
      key: 11,
      width2: 466,
      height2: 310.7,
      alt: "Live performance of Comeback Kid from FurnaceFest 2021 in Birmingham, AL",
      useInHeroCarousel: true,
      orientation: LANDSCAPE,
      homepage: true
    },
    {
      src: `${PATH}FWDGUY.jpg`,
      width:  929.9,
      height: 620,
      key: 12,
      width2: 466,
      height2: 310.7,
      alt: "Photograph of a sharply dressed man with cheap sunglasses doing a stoppie (front wheelie) on a bicycle in front of a shop in downtown Huntsville, AL ",
      useInHeroCarousel: true,
      orientation: LANDSCAPE,
      homepage: false
    },
    {
      src: `${PATH}FD1U7554.jpg`,
      width:  929.9,
      height: 620,
      key: 13,
      width2: 466,
      height2: 310.7,
      alt: "Live performance of <BAND NAME HERE> from FurnaceFest 2021 in Birmingham, AL",
      useInHeroCarousel: false,
      orientation: LANDSCAPE,
      homepage: true
    },
    {
      src: `${PATH}0X9A8593.jpg`,
      width:  929.9,
      height: 620,
      key: 14,
      width2: 466,
      height2: 310.7,
      alt: "Black and white photo of public demonstration in downtown Huntsville, AL",
      useInHeroCarousel: true,
      orientation: LANDSCAPE,
      homepage: false
    }
  ];
  

export const getImagesForCarouselBasedOnScreenSize = (photos, screenOrientation) => {
  return photos.filter(photo => photo.orientation == screenOrientation && photo.useInHeroCarousel == true)
}

export const getListOfImageSources = (photos) => {
  
  return photos.map(photo => photo.src)
}