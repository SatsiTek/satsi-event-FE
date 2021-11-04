import React from 'react';
import Home from '../Home';
import Sidebar from '../Sidebar';
import './Wrapper.css';
import _ from 'lodash';
import AboutUs from '../AboutUs';
import Services from '../Services';
import Projects from '../Projects/Projects';
const eventArray = [
  { href: 'Home', icon: <ion-icon name='logo-angular'></ion-icon> },
  {
    href: 'AboutUs',
    icon: <ion-icon name='information-circle-outline'></ion-icon>,
  },
  { href: 'Services', icon: <ion-icon name='list-outline'></ion-icon> },
  { href: 'Projects', icon: <ion-icon name='images-outline'></ion-icon> },
  // { href: 'concacon', icon: <ion-icon name='logo-javascript'></ion-icon> },
];

const Wrapper = () => {
  const [position, setPosition] = React.useState(0);
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
      } else if (e.deltaY >= 0) {
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
        <div className={position === 0 ? 'homeContain active' : 'homeContain'}>
          <Home
            ref={(el) => (wrapperEls.current[0] = el)}
            id={'home'}
            timeTillDate='2021/11/11 00:00:00'
          />
        </div>

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
        <Sidebar
          position={position}
          eventArray={eventArray}
          handleClick={setPosition}
        />
      </div>
    </React.Fragment>
  );
};
export default Wrapper;
