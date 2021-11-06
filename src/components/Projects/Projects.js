import React, { useRef } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import img1 from '../../asset/slide1.jpg';
import img2 from '../../asset/slide2.jpg';
import img3 from '../../asset/slide3.jpg';
import img4 from '../../asset/slide4.jpg';

const SLIDES = [
  {
    img: img1,
    category: 'Category / Website',
    title: 'SATSi – Đơn vị đồng hành săn học bổng du học Úc toàn phần hàng đầu',
    content: `Viện Đào tạo khởi nghiệp và Ứng dụng KHCN cao - SATSi được cấp phép bởi Bộ Khoa học và Công nghệ. Thành lập bởi đội ngũ chuyên gia hàng đầu trong lĩnh vực hướng nghiệp - khởi nghiệp, SATSi mang tâm thế trở thành người bạn đồng hành, cùng thế hệ trẻ Việt chinh phục ước mơ du học Úc với sự chân thành và tinh thần trách nhiệm.`,
  },
  {
    img: img2,
    category: `
    Photo / Instagram`,
    title: 'Tỉ lệ đạt Visa lên tới 98%',
    content: `SATSi hỗ trợ, định hướng săn học bổng uy tín TOP đầu Việt Nam với tỉ lệ trúng visa lên tới 98%`,
  },
  {
    img: img3,
    category: `
  Arts / Painting`,
    title: 'Đồng hành sát sao các bạn du học sinh tại Việt Nam và Úc',
    content:
      'Với chi nhánh tại Úc và các văn phòng đại diện trên khắp Việt Nam sẽ giúp chúng tôi dễ dàng giữ liên lạc với sinh viên và gia đình trong suốt quá trình học tập đồng thời chia sẻ nhiều thông tin về việc làm và định cư ở nước ngoài',
  },
  {
    img: img4,
    category: `
  Photo / Instagram`,
    title: 'Đảm bảo trình độ ngoại ngữ của học viên trước khi  du học',
    content:
      'Đào tạo tiếng Anh (PTE, TOEIC, IELTS) chuyên nghiệp, đảm bảo đầu ra giúp tiết kiệm chi phí, thời gian',
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
          <ion-icon name="accessibility-outline"></ion-icon>
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
            {SLIDES.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img className='slideImage' src={slide.img} alt='' />
                  {/* <p className='slideCategory'>{slide.category}</p> */}
                  <h2 className='slideTitle'>{slide.title} </h2>
                  <p className='slideContent'>{slide.content}</p>
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
