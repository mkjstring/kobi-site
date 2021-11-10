import { useSwipeable } from "react-swipeable";

export const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: "drag",
        offset: -e.deltaX
      });
    },
    onSwipedLeft(e) {
      const t = threshold(e.event.target);
  
      if (e.deltaX >= t) {
        dispatch({
          type: "next",
          length
        });
      } else {
        dispatch({
          type: "drag",
          offset: 0
        });
      }
    },
    onSwipedRight(e) {
      const t = threshold(e.event.target);
  
      if (-e.deltaX >= t) {
        dispatch({
          type: "prev",
          length
        });
      } else {
        dispatch({
          type: "drag",
          offset: 0
        });
      }
    },
    trackMouse: true,
    trackTouch: true
  });