import React from 'react';
import './style.css';
const Sidebar = ({ position, eventArray, handleClick }) => {
  return (
    <React.Fragment>
      <div id='fp-nav-wrapper'>
        <div id='fp-nav' class='right' style={{ marginTop: '-56px' }}>
          <div className='iconSideBar'>
            <a
              className='linkIcon'
              href='https://satsi.edu.vn/du-hoc-uc'
              target='_blank'
            >
              <ion-icon name='rocket-outline'></ion-icon>{' '}
            </a>
          </div>
          <ul>
            {eventArray.map((event, index) => {
              return (
                <li>
                  <a
                    href={`#${event.href}`}
                    onClick={() => handleClick(index)}
                    class={position === index ? 'active' : ''}
                  >
                    <span></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <nav class='main-menu'>
        <ul class='links' id='qmenu'>
          {eventArray.map((event, index) => {
            return (
              <li class={position === index ? 'active' : ''}>
                <a href={`#${event.href}`} onClick={() => handleClick(index)}>
                  {event.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
