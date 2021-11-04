import React, { useRef } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import img1 from '../../asset/img-sample1.jpg';
import img2 from '../../asset/img-sample2.jpg';
import img3 from '../../asset/img-sample3.jpg';
import img4 from '../../asset/img-sample4.jpg';

const SLIDES = [
  {
    img: img1,
    category: 'Category / Website',
    title: 'Entertainment',
    content: ` SATSi hỗ trợ, định hướng săn học bổng uy tín TOP đầu Việt Nam với tỉ lệ trúng visa lên tới 98%`,
  },
  {
    img: img2,
    category: `
    Photo / Instagram`,
    title: 'Last Exploration',
    content: ` Đồng hành sát sao các bạn du học sinh tại Việt Nam và Úc`,
  },
  {
    img: img3,
    category: `
  Arts / Painting`,
    title: 'Painting',
    content:
      'Đào tạo tiếng Anh (PTE, TOEIC, IELTS) chuyên nghiệp, đảm bảo đầu ra giúp tiết kiệm chi phí, thời gian',
  },
  {
    img: img4,
    category: `
  Photo / Instagram`,
    title: 'Macro Lens',
    content:
      'Cam kết cung cấp dịch vụ chất lượng, tư vấn trách nhiệm và nhân văn. SATSi đặt lợi ích và quyền lợi của khách hàng lên hàng đầu',
  },
];
SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const prevRef = useRef();
  const nextRef = useRef();
  const swiperRef = useRef(null);
  console.log(prevRef.current, nextRef.current);
  return (
    <div className='projectsContain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <ion-icon name='images-outline'></ion-icon>
          </div>
          <h2>Hoạt động</h2>
          <p>Just a few sample among our huge amount of projects.</p>
          <button className='registerBtn'>Register</button>
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
            {SLIDES.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img className='slideImage' src={slide.img} alt='' />
                  <p className='slideCategory'>{slide.category}</p>
                  <h2 className='slideTitle'>{slide.title} </h2>
                  <p>{slide.content}</p>
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
