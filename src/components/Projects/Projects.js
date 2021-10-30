import React, { useRef } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import img1 from "../../asset/img-sample1.jpg";
import img2 from "../../asset/img-sample2.jpg";
import img3 from "../../asset/img-sample3.jpg";
import img4 from "../../asset/img-sample4.jpg";

const SLIDES = [
  {
    img: img1,
    category: "Category / Website",
    title: "Entertainment",
    content: ` Lorem ipsum magicum dolor sit amet, consectetur adipiscing
  elit. Maecenas a sem ultrices neque vehicula fermentum a sit
  amet nulla.`,
  },
  {
    img: img2,
    category: `
    Photo / Instagram`,
    title: "Last Exploration",
    content: ` Lorem ipsum magicum dolor sit amet, consectetur adipiscing
  elit. Maecenas a sem ultrices neque vehicula fermentum a sit
  amet nulla.`,
  },
  {
    img: img3,
    category: `
  Arts / Painting`,
    title: "Painting",
    content:
      "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit. Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla.",
  },
  {
    img: img4,
    category: `
  Photo / Instagram`,
    title: "Macro Lens",
    content:
      "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit. Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla.",
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
          <h2>Projects</h2>
          <p>Just a few sample among our huge amount of projects.</p>
          <button className='registerBtn'>Register</button>
        </div>
      </div>
      <div className="rightColumn">
        <div className="slideRightContent">
          <div className="navigationBtn">
            <div
              className="prevBtn"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              prev
            </div>
            <div
              className="nextBtn"
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
                  <img className="slideImage" src={slide.img} alt="" />
                  <p className="slideCategory">{slide.category}</p>
                  <h2 className="slideTitle">{slide.title} </h2>
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
