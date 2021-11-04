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
          <h2>Lý do nên chọn du học Úc</h2>
          <p>Có cơ hội xin học bổng 10-100% tại các trường TOP đầu</p>
          <p>
            Nhiều chương trình học đa dạng, phù hợp với nhiều mục đích (đầu tư,
            định cư, tham quan du lịch, lao động, học tập) và trình độ khác nhau
          </p>
          <p>
            Chất lượng giáo dục hàng đầu thế giới, văn bằng và chứng chỉ được
            công nhận trên toàn cầu
          </p>
          <p>Chi phí sinh hoạt phù hợp (từ 17.000 - 35.000 AUD/năm)</p>
          <p>
            Mức lương trung bình cao hơn so với nhiều quốc gia khác (1.6 tỷ/năm)
          </p>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='servicesRightContent'>
          <h1>Chương trình học</h1>
          <div className='services'>
            <div className='servicesContent'>
              <h2 className='test'>CHƯƠNG TRÌNH VISA 462</h2>
              <p>
                Hàng năm có tới 1500 suất Visa 462 ((Work and Holiday) của chính
                phủ Úc dành cho Việt Nam. Trong thời gian cư trú 12 tháng, bạn
                có thể vừa tham gia các khóa học ngắn hạn, lao động hưởng lương,
                du lịch khám phá trong và ngoài lãnh thổ nước Úc. Thời hạn cư
                trú có thể được gia hạn lên tới 3 năm.
              </p>
            </div>
            <div className='servicesContent'>
              <h2>CHƯƠNG TRÌNH DU HỌC BẬC TRUNG HỌC</h2>
              <p>
                Chỉ cần đáp ứng điều kiện sức khỏe và khả năng học tập, bạn có
                thể dễ dàng nộp hồ sơ và bắt đầu hành trình du học tại các
                trường Trung học công lập, tư thục tại Úc với học phí từ 13.000
                - 20.000 AUD/năm.
              </p>
            </div>
            <div className='servicesContent'>
              <h2>CHƯƠNG TRÌNH DU HỌC BẬC ĐẠI HỌC</h2>
              <p>
                Với hệ thống giáo dục hàng đầu, các trường Đại học Úc đón rất
                nhiều du học sinh Việt Nam mỗi năm. Có rất nhiều ngành học đa
                dạng phù hợp với nhu cầu học tập của bạn với học phí từ 17.000 -
                30.000 AUD/năm.
              </p>
            </div>
            <div className='servicesContent'>
              <h2>CHƯƠNG TRÌNH DU HỌC CAO HỌC</h2>
              <p>
                Nâng cao trình độ học vấn với chương trình du học ngành Thạc sĩ
                Quản trị kinh doanh (MBA), chương trình du học bậc Tiến sĩ.
                Nhiều học bổng từ 20 - 100% tại các trường Đại học danh tiếng
                dành cho sinh viên Việt Nam.
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
