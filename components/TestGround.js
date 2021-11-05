import EmblaCarousel from "./EmblaCarousel";
import { photos } from "./Photos";


const SLIDE_COUNT = photos.length;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <div>
    <EmblaCarousel slides={slides} />
  </div>
)