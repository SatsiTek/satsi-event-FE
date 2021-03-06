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
          <h2 className='title-dangky'>T?? V???N DU H???C ??C</h2>
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
            <h3>????NG K?? THAM GIA</h3>
            <img className='qrImg' src={qrImg} />
            <div>
              <button
                type='button'
                class='btn  registerBtnNew'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                ????ng k?? ngay
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
                    VI???N ????O T???O KH???I NGHI???P V?? ???NG D???NG KHOA H???C C??NG NGH??? CAO
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
                    <h1 className='duhoc'>DU H???C</h1>
                    <h1 className='uc'>??C</h1>
                    <img src={cohoi} className='cohoi' />
                    <h1 className='hocbong'>nh???n h???c b???ng 100%</h1>
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
                    required: 'vui l??ng nh???p tr?????ng n??y',
                  })}
                  placeholder='H??? t??n'
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
                    required: 'vui l??ng nh???p tr?????ng n??y',
                    pattern: {
                      value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                      message: 'nh???p ????ng s??? ??i???n tho???i',
                    },
                  })}
                  placeholder='S??? ??i???n tho???i'
                  className={errors.phone ? 'invalidFormInput' : 'formInput'}
                  type='tel'
                />
                {errors.phone && (
                  <span className='errorMessage'>{errors.phone.message}</span>
                )}
                <input
                  autoCompleted='off'
                  {...register('email', {
                    required: 'vui l??ng nh???p tr?????ng n??y',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'nh???p ????ng email c???a b???n',
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
                    required: 'vui l??ng nh???p tr?????ng n??y',
                  })}
                  placeholder='Ng??y sinh'
                  className={errors.birth ? 'invalidFormInput' : 'formInput'}
                  type='date'
                />
                {errors.birth && (
                  <span className='errorMessage'>{errors.birth.message}</span>
                )}

                <input
                  autoComplete='off'
                  {...register('code')}
                  placeholder='M?? ng?????i gi???i thi???u'
                  className='formInput'
                  type='text'
                  // onChange={handleChangeInput}
                />
                {success && (
                  <div className='notiSuccess'> ????ng k?? th??nh c??ng</div>
                )}
                {failure && (
                  <div className='notiFailure'> ????ng k?? kh??ng th??nh c??ng</div>
                )}
                <div class='buttonContain'>
                  <button
                    disabled={disabledBtn}
                    type='submit'
                    className='registerBtn'
                  >
                    ????ng k??
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
