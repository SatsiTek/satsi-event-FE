import React, { useEffect } from 'react';
import './Services.css';
import image1 from '../../asset/visa.jpg'
import image2 from '../../asset/trung-hoc.jpg'
import image3 from '../../asset/dai-hoc.jpg'
import image4 from '../../asset/cao-hoc.jpg'

const Services = () => {

  useEffect(() => {
    const mapElements = document.querySelectorAll(".image-service");
    mapElements.forEach(mapElement => {
      mapElement.style.height = (mapElement.offsetWidth / 1.33) + "px";
    })
  })


  const handleClickReadmore = (e) => {
    const id = e.target.id
    const dots = document.getElementById(`dots${id}`);
    const moreText = document.getElementById(`more${id}`);
    const btnText = document.getElementById(id);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem thêm";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ẩn";
      moreText.style.display = "inline";
    }
  }

  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            {' '}
            <ion-icon name='list-outline'></ion-icon>
          </div>
          <h2 className='lydo'>Lý do nên chọn du học Úc</h2>
          <p><i className='icon-check'><ion-icon name="checkmark-outline"></ion-icon></i><span>Có cơ hội xin học bổng 10-100% tại các trường TOP đầu</span></p>
          <p>
            <i className='icon-check'><ion-icon name="checkmark-outline"></ion-icon></i>
            <span>Nhiều chương trình học đa dạng, phù hợp với nhiều mục đích (đầu tư,
              định cư, tham quan du lịch, lao động, học tập) và trình độ khác nhau</span>
          </p>
          <p>
            <i className='icon-check'><ion-icon name="checkmark-outline"></ion-icon></i>
            <span>Chất lượng giáo dục hàng đầu thế giới, văn bằng và chứng chỉ được
              công nhận trên toàn cầu</span>
          </p>
          <p><i className='icon-check'><ion-icon name="checkmark-outline"></ion-icon></i><span>Chi phí sinh hoạt phù hợp (từ 17.000 - 35.000 AUD/năm)</span></p>
          <p>
            <i className='icon-check'><ion-icon name="checkmark-outline"></ion-icon></i>
            <span>Mức lương trung bình cao hơn so với nhiều quốc gia khác (1.6 tỷ/năm)</span>
          </p>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='servicesRightContent'>
          <h1>Chương trình học</h1>
          <div className='services'>
            <div className='servicesContent'>
              <h2 className='test'>CHƯƠNG TRÌNH VISA 462</h2>
              <img src={image1} alt="Chương trình visa 426" className="image-service" />
              <p>
                Hàng năm có tới 1500 suất Visa 462 (Work and Holiday) của chính
                phủ Úc<span id="dotsbtn1">...</span><span id="morebtn1"> dành cho Việt Nam. Trong thời gian cư trú 12 tháng, bạn
                  có thể vừa tham gia các khóa học ngắn hạn, lao động hưởng lương,
                  du lịch khám phá trong và ngoài lãnh thổ nước Úc. Thời hạn cư
                  trú có thể được gia hạn lên tới 3 năm.</span>
              </p>
              <div className='buttonContain'>
                <button className='registerBtn' onClick={handleClickReadmore} id="btn1">Xem thêm</button>
              </div>
            </div>
            <div className='servicesContent'>
              <h2 className='test'>CHƯƠNG TRÌNH DU HỌC BẬC TRUNG HỌC</h2>
              <img src={image2} alt="CHƯƠNG TRÌNH DU HỌC BẬC TRUNG HỌC" className='image-service' />
              <p>
                Chỉ cần đáp ứng điều kiện sức khỏe và khả năng học tập, bạn có
                thể dễ dàng nộp hồ sơ<span id="dotsbtn2">...</span><span id="morebtn2"> và bắt đầu hành trình du học tại các
                  trường Trung học công lập, tư thục tại Úc với học phí từ 13.000
                  - 20.000 AUD/năm.</span>
              </p>
              <div className='buttonContain'>
                <button className='registerBtn' onClick={handleClickReadmore} id="btn2">Xem thêm</button>
              </div>
            </div>
            <div className='servicesContent'>
              <h2 className='test'>CHƯƠNG TRÌNH DU HỌC BẬC ĐẠI HỌC</h2>
              <img src={image3} alt="CHƯƠNG TRÌNH DU HỌC BẬC ĐẠI HỌC" className="image-service" />

              <p>
                Với hệ thống giáo dục hàng đầu, các trường Đại học Úc đón rất
                nhiều du học sinh Việt Nam<span id="dotsbtn3">...</span><span id="morebtn3"> mỗi năm. Có rất nhiều ngành học đa
                  dạng phù hợp với nhu cầu học tập của bạn với học phí từ 17.000 -
                  30.000 AUD/năm.</span>
              </p>
              <div className='buttonContain'>
                <button className='registerBtn' onClick={handleClickReadmore} id="btn3">Xem thêm</button>
              </div>
            </div>
            <div className='servicesContent'>
              <h2 className='test'>CHƯƠNG TRÌNH DU HỌC CAO HỌC</h2>
              <img src={image4} alt="CHƯƠNG TRÌNH DU HỌC BẬC CAO HỌC" className="image-service" />

              <p>
                Nâng cao trình độ học vấn với chương trình du học ngành Thạc sĩ
                Quản trị kinh doanh<span id="dotsbtn4">...</span><span id="morebtn4"> (MBA), chương trình du học bậc Tiến sĩ.
                  Nhiều học bổng từ 20 - 100% tại các trường Đại học danh tiếng
                  dành cho sinh viên Việt Nam.</span>
              </p>
              <div className='buttonContain'>
                <button className='registerBtn' onClick={handleClickReadmore} id="btn4">Xem thêm</button>
              </div>
            </div>
          </div>
          {/* <div className='buttonContain'>
            <button className='registerBtn'>Projects</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
