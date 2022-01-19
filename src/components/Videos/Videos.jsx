import React, { useEffect, useState } from 'react';
import configApi from '../../api/configApi';
import './Videos.css';
const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [videoTitle, setVideoTitle] = useState();

  useEffect(() => {
    const fetchConfig = async () => {
      const res1 = await configApi.getConfig({
        type: 'text',
        page: 'du-hoc-uc',
        section: 'Videos',
      });
      setVideos(res1.data);
      const res2 = await configApi.getConfig({
        type: 'text',
        page: 'du-hoc-uc',
        section: 'videoTitle',
      });
      setVideoTitle(res2?.data[0]);
    };
    fetchConfig();
  }, []);
  return (
    <div className='contain'>
      <div className='leftColumn'>
        <div className='leftContent'>
          <div className='icon-section'>
            <a className='linkIcon' href='https://satsi.edu.vn' target='_blank'>
              <ion-icon name='videocam-outline'></ion-icon>
            </a>
          </div>
          <h2 className='lydo'>{videoTitle?.value}</h2>

          <button
            type='button'
            class='btn  registerBtnNew'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            đăng ký ngay
          </button>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='servicesRightContent'>
          <h2 className='videoRightTitle'>{videoTitle?.description}</h2>
          <div className='videos'>
            {videos?.map((video) => (
              <iframe
                className='video'
                src={video.value}
                title='YouTube video player'
                frameborder='100'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
