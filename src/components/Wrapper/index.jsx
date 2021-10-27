import React from "react";
import "./Wrapper.css";
import Test1 from "../Test1/";
const Wrapper = () => {
  const [position, setPosition] = React.useState(0);
  const length = 4;
  const wrapperEls = React.useRef([]);
  let lastScrollTop = 0;
  React.useEffect(() => {
    const handleScroll = (event) => {
      let newPosition;
      if (event.deltaY < 0) {
        if (position > 0) {
          newPosition = position - 1;
        } else {
          newPosition = 0;
        }
        setPosition(newPosition);
      } else if (event.deltaY > 0) {
        if (position < length - 1) {
          newPosition = position + 1;
        } else {
          newPosition = position;
        }
        setPosition(newPosition);
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [position]);
  React.useEffect(() => {
    wrapperEls.current[position].scrollIntoView({
      behavior: "smooth",
    });
  }, [position]);
  console.log(position);
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
