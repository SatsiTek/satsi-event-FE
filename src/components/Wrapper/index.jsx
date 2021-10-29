import React from 'react';
import './Wrapper.css';
import Test1 from '../Test1/';
import AboutUs from '../AboutUs/';
import _ from 'lodash';
import Services from '../Services';
import Projects from '../Projects/Projects';
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
  // const updateHello = _.debounce((val) => {
  //   console.log(val);
  // }, 200);
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
    window.addEventListener('wheel', handleNavigation);
    return () => {
      window.removeEventListener('wheel', handleNavigation);
    };
  }, [handleNavigation]);
  React.useEffect(() => {
    wrapperEls.current[position].scrollIntoView({
      behavior: 'smooth',
    });
  }, [position]);
  return (
    <React.Fragment>
      <div className='wrapper'>
        <Test1 ref={(el) => (wrapperEls.current[0] = el)} id={'hihi'} />
        <div
          className={position === 1 ? 'aboutUs active' : 'aboutUs'}
          ref={(el) => (wrapperEls.current[1] = el)}
        >
          <AboutUs />
        </div>

        <div
          className={position === 2 ? 'services active' : 'services'}
          ref={(el) => (wrapperEls.current[2] = el)}
        >
          <Services />
        </div>
        <div
          className={position === 3 ? 'projects active' : 'projects'}
          ref={(el) => (wrapperEls.current[3] = el)}
        >
          <Projects />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Wrapper;
