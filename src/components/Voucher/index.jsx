import React, { useEffect, useState } from 'react';
import './Voucher.css';

import configApi from '../../api/configApi';

const Voucher = () => {
  const [configs, setConfigs] = useState([]);
  const [readMore, setReadMore] = useState([]);

  useEffect(() => {
    const mapElements = document.querySelectorAll('.image-service');
    mapElements.forEach((mapElement) => {
      mapElement.style.height = mapElement.offsetWidth / 1.33 + 'px';
    });
  });

  useEffect(() => {
    const fetchConfig = async () => {
      const res = await configApi.getConfig({
        type: 'images',
        page: 'du-hoc-uc',
        section: 'vouchers',
      });
      setConfigs(res.data[0].images);
      console.log(res);
    };
    fetchConfig();
  }, []);
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
            {configs.map((config, index) => (
              <div className='servicesContent'>
                <h2 className='test'>{config.data}</h2>
                <img
                  src={`${process.env.REACT_APP_API_URL}${config.link}`}
                  alt='Chương trình visa 426'
                  className='image-voucher'
                />
                <p>
                  {readMore.includes(index)
                    ? config.description
                    : `${config.description.slice(0, 80)}...`}
                </p>
                <div className='buttonContain'>
                  {config.description.length > 80 && (
                    <button
                      className='registerBtn'
                      onClick={() => {
                        if (!readMore.includes(index)) {
                          setReadMore([...readMore, index]);
                        } else {
                          setReadMore(
                            readMore.filter((item) => item !== index)
                          );
                        }
                      }}
                    >
                      {readMore.includes(index) ? 'Ẩn' : ' Xem thêm'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
