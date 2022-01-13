import React from 'react';
import './style.css';
import moment from 'moment';
import 'moment/locale/vi';
import logo from '../../asset/logo-satsi.png';
import qrImg from '../../asset/satsi-qr.jpg';
import girlImg from '../../asset/girl.png';
import cohoi from '../../asset/cohoi.png';
import configApi from '../../api/configApi';

const ICONS_ARRAY = [
  <ion-icon name='location-outline'></ion-icon>,
  <ion-icon name='call-outline'></ion-icon>,
  <ion-icon name='call-outline'></ion-icon>,
  <ion-icon name='mail-outline'></ion-icon>,
  <ion-icon name='logo-facebook'></ion-icon>,
  <ion-icon name='globe-outline'></ion-icon>,
];

const Home = React.forwardRef((props, ref) => {
  const [time, setTime] = React.useState({
    days: undefined,
    hours: undefined,
    mins: undefined,
    secs: undefined,
  });
  const [configs, setConfigs] = React.useState([]);
  const [hours, setHours] = React.useState();
  const [day, setDay] = React.useState();
  React.useEffect(() => {
    const { timeTillDate } = props;
    const compareDate = new Date(timeTillDate);
    const a = setInterval(() => {
      const totalSeconds = (compareDate - new Date()) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const secs = Math.floor(totalSeconds) % 60;
      // console.log(totalSeconds);
      if (totalSeconds < 0) {
        clearInterval(a);
      } else {
        setTime({ days, hours, mins, secs });
      }
    }, 1000);
    return () => {
      clearInterval(a);
    };
  }, [props]);

  const { id } = props;
  React.useEffect(() => {
    const clockTime = setInterval(() => {
      setHours(moment(new Date()).format('LTS'));
      setDay(moment(new Date()).format('LL'));
    }, 1000);
    return () => {
      clearInterval(clockTime);
    };
  });
  React.useEffect(() => {
    const fetchConfigs = async () => {
      const res = await configApi.getConfig({
        type: 'text',
        page: 'footer',
        section: 'footer',
      });
      console.log(res);
      const newArray = res.data.map((item, index) => {
        return { ...item, icon: ICONS_ARRAY[index] };
      });
      setConfigs(newArray);
    };
    fetchConfigs();
  }, []);
  return (
    <div className='home' ref={ref} id={id}>
      <div className='leftColumn'>
        <div class='clock-wrapper'>
          <div className='icon-section'>
            <a className='linkIcon' href='https://satsi.edu.vn' target='_blank'>
              <ion-icon name='time-outline'></ion-icon>
            </a>
          </div>
          <h2 className='title-dangky'>TƯ VẤN DU HỌC ÚC</h2>
          {time.secs ? (
            <div class='clock-hms clearfix'>
              <div class='tile tile-days'>
                <span class='days digit'>{time.days}</span>
                <span class='txt'>days</span>
              </div>

              <div class='secondary'>
                <div class='tile tile-hours'>
                  <span class='hours digit'>{`0${time.hours}`.slice(-2)}</span>
                  <span class='txt'>hours</span>
                </div>
                <div class='tile tile-minutes'>
                  <span class='minutes digit'>{`0${time.mins}`.slice(-2)}</span>
                  <span class='txt'>mins</span>
                </div>
                <div class='tile tile-seconds'>
                  <span class='seconds digit'>{`0${time.secs}`.slice(-2)}</span>
                  <span class='txt'>secs</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className='day'>{day}</h3>
              <h1 className='hours'>{hours}</h1>
            </div>
          )}
          <div className='homeLeftContent'>
            <h3>ĐĂNG KÝ THAM GIA</h3>
            <img className='qrImg' src={qrImg} />
            <div>
              <button
                type='button'
                class='btn  registerBtnNew'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='rightColumn'>
        <div className='main-content'>
          <div className='content-wrapper'>
            <div class='title-desc'>
              <div class='t-wrapper'>
                <header class='title'>
                  <img className='logo' src={logo} />
                  {/* <img className='tdhnImg' src={tdhnImg} /> */}
                  <h3 className='compName'>
                    VIỆN ĐÀO TẠO KHỞI NGHIỆP VÀ ỨNG DỤNG KHOA HỌC CÔNG NGHỆ CAO
                  </h3>
                  <ul className='contactList'>
                    {configs.map((config) => (
                      <li>
                        {config.icon}
                        <span> {config.value}</span>
                      </li>
                    ))}
                  </ul>
                </header>

                <div className='banner  '>
                  <div>
                    <h1 className='duhoc'>DU HỌC</h1>
                    <h1 className='uc'>ÚC</h1>
                    <img src={cohoi} className='cohoi' />
                    <h1 className='hocbong'>nhận học bổng 100%</h1>
                  </div>
                  <div className='girl-wrapper'>
                    <img src={girlImg} className='girlImg' />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='registerForm'>
              <form className='form' onSubmit={handleSubmit(handleFormSubmit)}>
                <input
                  autoComplete='off'
                  {...register('name', {
                    required: 'vui lòng nhập trường này',
                  })}
                  placeholder='Họ tên'
                  name='name'
                  className={errors.name ? 'invalidFormInput' : 'formInput'}
                  type='text'
                />
                {errors.name && (
                  <span className='errorMessage'>{errors.name.message}</span>
                )}
                <input
                  autoComplete='off'
                  {...register('phone', {
                    required: 'vui lòng nhập trường này',
                    pattern: {
                      value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                      message: 'nhập đúng số điện thoại',
                    },
                  })}
                  placeholder='Số điện thoại'
                  className={errors.phone ? 'invalidFormInput' : 'formInput'}
                  type='tel'
                />
                {errors.phone && (
                  <span className='errorMessage'>{errors.phone.message}</span>
                )}
                <input
                  autoCompleted='off'
                  {...register('email', {
                    required: 'vui lòng nhập trường này',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'nhập đúng email của bạn',
                    },
                  })}
                  placeholder='Email'
                  className={errors.email ? 'invalidFormInput' : 'formInput'}
                  type='text'
                />
                {errors.email && (
                  <span className='errorMessage'>{errors.email.message}</span>
                )}
                <input
                  autoComplete='off'
                  {...register('birth', {
                    required: 'vui lòng nhập trường này',
                  })}
                  placeholder='Ngày sinh'
                  className={errors.birth ? 'invalidFormInput' : 'formInput'}
                  type='date'
                />
                {errors.birth && (
                  <span className='errorMessage'>{errors.birth.message}</span>
                )}

                <input
                  autoComplete='off'
                  {...register('code')}
                  placeholder='Mã người giới thiệu'
                  className='formInput'
                  type='text'
                  // onChange={handleChangeInput}
                />
                {success && (
                  <div className='notiSuccess'> đăng ký thành công</div>
                )}
                {failure && (
                  <div className='notiFailure'> đăng ký không thành công</div>
                )}
                <div class='buttonContain'>
                  <button
                    disabled={disabledBtn}
                    type='submit'
                    className='registerBtn'
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
