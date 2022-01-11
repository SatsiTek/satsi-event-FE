import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import configApi from '../../api/configApi';

SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const [configs, setConfigs] = useState([]);
  const prevRef = useRef();
  const nextRef = useRef();
  const swiperRef = useRef(null);
  console.log(prevRef.current, nextRef.current);
  useEffect(() => {
    const fetchConfig = async () => {
      const res = await configApi.getConfig({
        type: 'images',
        page: 'du-hoc-uc',
        section: 'activities',
      });
      console.log(res);
      setConfigs(res.data[0].images);
    };
    fetchConfig();
  }, []);
  return (
    <div className='projectsContain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <ion-icon name='accessibility-outline'></ion-icon>
          </div>
          <h2>Hoạt động</h2>
          <p>SĂN HỌC BỔNG TOÀN PHẦN Ở ÚC</p>
          <button
            type='button'
            class='btn  registerBtn'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            đăng ký ngay
          </button>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='slideRightContent'>
          <div className='navigationBtn'>
            <div
              className='prevBtn'
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              prev
            </div>
            <div
              className='nextBtn'
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              next
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
          >
            {configs.map((config, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img
                    className='slideImage'
                    src={`${process.env.REACT_APP_API_URL_TEST}${config.link}`}
                    alt=''
                  />
                  {/* <p className='slideCategory'>{slide.category}</p> */}
                  <h2 className='slideTitle'>{config.data} </h2>
                  <p className='slideContent'>{config.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
