import React, { useEffect, useState } from 'react';
import './Services.css';
import configApi from '../../api/configApi';

const Services = () => {
  const [configs, setConfigs] = useState([]);
  const [readMore, setReadMore] = useState([]);
  const [whyChooseUs, setWhyChooseUs] = useState([]);

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
        section: 'programs',
      });
      const res2 = await configApi.getConfig({
        type: 'text',
        page: 'du-hoc-uc',
        section: 'why-choose-us',
      });
      setConfigs(res.data[0].images);
      setWhyChooseUs(res2.data);
    };
    fetchConfig();
  }, []);

  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <a className='linkIcon' href='https://satsi.edu.vn' target='_blank'>
              <ion-icon name='list-outline'></ion-icon>
            </a>
          </div>
          <h2 className='lydo'>Lý do nên chọn du học Úc</h2>
          {whyChooseUs.map((item) => (
            <p>
              <i className='icon-check'>
                <ion-icon name='checkmark-outline'></ion-icon>
              </i>
              <span>{item.value}</span>
            </p>
          ))}
        </div>
      </div>
      <div className='rightColumn'>
        <div className='servicesRightContent'>
          <h1>Chương trình học</h1>
          <div className='services'>
            {configs.length > 0 &&
              configs.map((config, index) => (
                <div className='servicesContent'>
                  <h2 className='test'>{config.data}</h2>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${config.link}`}
                    alt='Chương trình visa 426'
                    className='image-service'
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

export default Services;
