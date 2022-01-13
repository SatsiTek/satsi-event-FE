import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import satsi from '../../asset/satsi_profile.jpg';
import configApi from '../../api/configApi';

const AboutUs = () => {
  const [aboutUsLeft, setAboutUsLeft] = useState();
  const [aboutUsRight, setAboutUsRight] = useState();

  useEffect(() => {
    const fetchConfigs = async () => {
      const res = await configApi.getConfig({
        type: 'text',
        page: 'du-hoc-uc',
        section: 'introduce-left',
      });
      const res2 = await configApi.getConfig({
        type: 'text',
        page: 'du-hoc-uc',
        section: 'introduce-right',
      });

      setAboutUsLeft(res.data[0]);
      setAboutUsRight(res2.data[0]);
    };
    fetchConfigs();
  }, []);
  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <a className='linkIcon' href='https://satsi.edu.vn' target='_blank'>
              <ion-icon name='information-circle-outline'></ion-icon>
            </a>
          </div>
          <h2>THÔNG TIN VỀ SATSI</h2>
          <p className='text-justify'>{aboutUsLeft?.value}</p>
          <div className='aboutimg'>
            <img src={satsi} className='' />
          </div>

          <button
            type='button'
            class='btn  registerBtnNew'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='rightContent'>
          <h1>GIỚI THIỆU CHUNG</h1>
          <h2>Thông tin về chúng tôi</h2>
          {/* <div className='aboutimg1'>
            <img src={satsia} className='' />
          </div> */}
          {/* <p className='text-justify'>A</p>
          <p className='text-justify'>B</p> */}
          <p className='text-justify'>{aboutUsRight?.value}</p>
          <div className='buttonContain'>
            {/* <button className='registerBtn'>Services</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
