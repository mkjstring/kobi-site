import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const items = [
  {
    src: "/img/4-59.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "/img/4-60.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "/img/4-61.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Carousel = () => (
  <motion.div className='carousel'
  animate={{z:-100}}
  transition={{ ease: "easeOut", duration: 2 }}
  >
    <Row>
      <Col md="8" className="mx-auto">
        <UncontrolledCarousel className="protect-image" items={items} />
      </Col>
    </Row>
  </motion.div>
);

export default Carousel;
