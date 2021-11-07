import React, { useEffect } from 'react';
import './Voucher.css';
import image1 from '../../asset/mtns.jpg'
import image2 from '../../asset/25m.jpg'
import image3 from '../../asset/ticket.jpg'

const Voucher = () => {

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
            <ion-icon name='gift-outline'></ion-icon>
          </div>
          <h2 className='lydo'>DU HỌC ÚC</h2>
          <p>CHƯƠNG TRÌNH HỌC ĐA DẠNG</p>
          <p>CHI PHÍ SINH HOẠT PHÙ HỢP</p>
          <p>CAM KẾT VIỆC LÀM</p>
          <p>QUÀ TẶNG HẤP DẪN</p>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='servicesRightContent'>
          <h1>ĐĂNG KÍ ĐỂ NHẬN QUÀ HẤP DẪN</h1>
          <div className='services'>
            <div className='servicesContent'>
              <h2 className='test'>GÓI MINH TRIẾT NHÂN SINH</h2>
              <img src={image1} alt="Chương trình visa 426" className="image-voucher" />
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
              <h2 className='test'>VOUCHER 25 TRIỆU</h2>
              <img src={image2} alt="CHƯƠNG TRÌNH DU HỌC BẬC TRUNG HỌC" className='image-voucher' />
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
              <h2 className='test'>TẶNG VÉ MÁY BAY</h2>
              <img src={image3} alt="CHƯƠNG TRÌNH DU HỌC BẬC ĐẠI HỌC" className="image-voucher" />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
