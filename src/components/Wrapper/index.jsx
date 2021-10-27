import React from "react";
import "./Wrapper.css";
import Test1 from "../Test1/";
import _ from "lodash";
const Wrapper = () => {
  const [position, setPosition] = React.useState(0);
  // const [y, setY] = React.useState(window.scrollY);

  const length = 4;
  const wrapperEls = React.useRef([]);
  const updatePosition = _.debounce((val) => {
    setPosition(val);
    console.log(position);
  }, 300);
  // const updateY = _.debounce((val) => {
  //   setY(val);
  // }, 200);
  const updateHello = _.debounce((val) => {
    console.log(val);
  }, 200);
  const handleNavigation = React.useCallback(
    (e) => {
      let newPosition;
      if (e.deltaY < 0) {
        if (position > 0) {
          newPosition = position - 1;
        } else {
          newPosition = 0;
        }
      } else if (e.deltaY > 0) {
        if (position < length - 1) {
          newPosition = position + 1;
        } else {
          newPosition = position;
        }
      }
      updatePosition(newPosition);
    },
    [updatePosition, position]
  );
  React.useEffect(() => {
    window.addEventListener("wheel", handleNavigation);
    return () => {
      window.removeEventListener("wheel", handleNavigation);
    };
  }, [handleNavigation]);
  React.useEffect(() => {
    wrapperEls.current[position].scrollIntoView({
      behavior: "smooth",
    });
  }, [position]);
  return (
    <React.Fragment>
      <div className="wrapper">
        <Test1 ref={(el) => (wrapperEls.current[0] = el)} id={"hihi"} />
        <Test1 ref={(el) => (wrapperEls.current[1] = el)} id={"hiha"} />
        <Test1 ref={(el) => (wrapperEls.current[2] = el)} id={"hiho"} />
        <Test1 ref={(el) => (wrapperEls.current[3] = el)} id={"hihafaf"} />
      </div>
    </React.Fragment>
  );
};
export default Wrapper;
