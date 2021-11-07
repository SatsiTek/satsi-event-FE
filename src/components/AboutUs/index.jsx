import React from 'react';
import './AboutUs.css';
import satsi from '../../asset/satsi_profile.jpg';

const AboutUs = () => {
  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <ion-icon name='information-circle-outline'></ion-icon>
          </div>
          <h2>THÔNG TIN VỀ SATSI</h2>
          <p className='text-justify'>
            Viện đào tạo khởi nghiệp và ứng dụng khoa học công nghệ (gọi tắt là
            SATSi) hoạt động theo mô hình tổ chức doanh nghiệp, thành lập bởi
            các giáo sư, tiến sĩ giàu kinh nghiệm, tâm huyết trong lĩnh vực giáo
            dục, khoa học, kinh tế xã hội… là một trong những tổ chức hàng đầu
            ứng dụng khoa học công nghệ, kỹ thuật tiên tiến trong giáo dục, đào
            tạo, khởi nghiệp.
          </p>
          <div className='aboutimg'>
            <img src={satsi} className='' />
          </div>

          <button
            type='button'
            class='btn  registerBtn'
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
          <p className='text-justify'>
            SATSi là đối tác của rất nhiều trung tâm giáo dục và đào tạo, đại
            học, cao đẳng uy tín trong và ngoài nước. Với sứ mệnh không ngừng
            đổi mới sáng tạo, ứng dụng khoa học công nghệ bắt kịp xu thế thời
            đại, SATSi tham gia xây dựng, phát triển và lan tỏa tri thức, đào
            tạo ra nguồn nhân lực chất lượng cao đáp ứng nhu cầu phát triển của
            đất nước. SATSi định hướng phát triển mô hình hệ sinh thái với đa
            ngành nghề đa lĩnh vực với mục tiêu “kiến thức hôm nay, thành công
            ngày mai” hướng phát triển trở thành doanh nghiệp hàng đầu trong
            lĩnh vực giáo dục và đào tạo tại Việt Nam. Với tôn chỉ “ Vững tin
            cùng bước đi” SATSi lấy con người là trung tâm, lấy sáng tạo, tâm
            huyết, hiệu quả, trách nhiệm làm giá trị cốt lõi để xây dựng một tập
            thể NĂNG ĐỘNG, TRẺ TRUNG, TỐC ĐỘ, CHUYÊN NGHIỆP, HIỆN ĐẠI
          </p>
          <div className='buttonContain'>
            {/* <button className='registerBtn'>Services</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
