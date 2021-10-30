import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <ion-icon name='information-circle-outline'></ion-icon>
          </div>
          <h2>About us</h2>
          <p>
            Do not spend your valuable time building website from scratch.
            Instead, use this template as the framework of your next beautiful
            website.
          </p>
          <p>And do not forget to subscribe to our newsletter :</p>
          <button className='registerBtn'>Register</button>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='rightContent'>
          <h1>Business</h1>
          <h2>Everything you should know</h2>
          <p>
            Do not spend your valuable time building website from scratch.
            Instead, use this template as the framework of your next beautiful
            website.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet malesuada feugiat. Curabitur fermentum bibendum nulla, non
            dictum ipsum tincidunt non. Quisque convallis pharetra tempor. Donec
            id pretium leo. Pellentesque luctus massa non elit viverra
            pellentesque. Cras vitae neque molestie, rhoncus ipsum sit amet,
            lobortis dui. Fusce in urna sem. Vivamus vehicula dignissim augue et
            scelerisque. Etiam quam nisi, molestie ac dolor in, tincidunt
            tincidunt arcu. Praesent sed justo finibus, fringilla velit quis,
            porta erat. Donec blandit metus ut arcu iaculis iaculis. Cras nec
            dolor fringilla justo ullamcorper auctor. Aliquam eget pretium
            velit. Morbi urna justo, pulvinar id lobortis in, aliquet placerat
            orci
          </p>
          <div className='buttonContain'>
            <button className='registerBtn'>Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
