import React from "react";
import Test1 from "../Test1/";
import Home from "../Home";
import Sidebar from "../Sidebar";
import "./Wrapper.css";
import _ from "lodash";

const eventArray = [
  { href: "hihi", icon: <ion-icon name="logo-angular"></ion-icon> },
  { href: "hiha", icon: <ion-icon name="logo-css3"></ion-icon> },
  { href: "hiho", icon: <ion-icon name="logo-octocat"></ion-icon> },
  { href: "hihafaf", icon: <ion-icon name="logo-github"></ion-icon> },
  { href: "concacon", icon: <ion-icon name="logo-javascript"></ion-icon> },
];

const Wrapper = () => {
  const [position, setPosition] = React.useState(0);
  const length = 5;
  const wrapperEls = React.useRef([]);
  const updatePosition = _.debounce((val) => {
    setPosition(val);
    console.log(position);
  }, 150);
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
        <Sidebar
          position={position}
          eventArray={eventArray}
          handleClick={setPosition}
        />
        <Home
          ref={(el) => (wrapperEls.current[0] = el)}
          id={"home"}
          timeTillDate="28/10/2021 09:15:00"
          timeFormat="DD MM YYYY hh:mm:ss"
        />
        <Test1 ref={(el) => (wrapperEls.current[1] = el)} id={"hiha"} />
        <Test1 ref={(el) => (wrapperEls.current[2] = el)} id={"hiho"} />
        <Test1 ref={(el) => (wrapperEls.current[3] = el)} id={"hihafaf"} />
        <Test1 ref={(el) => (wrapperEls.current[4] = el)} id={"concacon"} />
      </div>
    </React.Fragment>
  );
};
export default Wrapper;
