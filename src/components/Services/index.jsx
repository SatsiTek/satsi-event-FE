import React from 'react';
import './Services.css';
const Services = () => {
  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            {' '}
            <ion-icon name='list-outline'></ion-icon>
          </div>
          <h2>Services</h2>
          <p>
            Do not spend your valuable time building website from scratch.
            Instead, use this template as the framework of your next beautiful
            website.
          </p>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='servicesRightContent'>
          <h1>We do</h1>
          <div className='services'>
            <div className='servicesContent'>
              <h2 className='test'>Painting</h2>
              <p>
                Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.
                Maecenas a sem ultrices neque vehicula fermentum a sit amet
                nulla.
              </p>
            </div>
            <div className='servicesContent'>
              <h2>Design</h2>
              <p>
                Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.
                Maecenas a sem ultrices neque vehicula fermentum a sit amet
                nulla.
              </p>
            </div>
            <div className='servicesContent'>
              <h2>Attorney</h2>
              <p>
                Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.
                Maecenas a sem ultrices neque vehicula fermentum a sit amet
                nulla.
              </p>
            </div>
            <div className='servicesContent'>
              <h2>Restaurant</h2>
              <p>
                Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.
                Maecenas a sem ultrices neque vehicula fermentum a sit amet
                nulla
              </p>
            </div>
          </div>
          <div className='buttonContain'>
            <button className='registerBtn'>Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
