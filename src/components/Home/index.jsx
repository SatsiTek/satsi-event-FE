import React from 'react';
import './style.css';
import registerApi from '../../api/registerApi';
import { useForm } from 'react-hook-form';
import logo from '../../asset/logo-satsi.png';
import qrImg from '../../asset/qr-img.jpg';

const Home = React.forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [disabledBtn, setDisableBtn] = React.useState(false);
  const [time, setTime] = React.useState({
    days: undefined,
    hours: undefined,
    mins: undefined,
    secs: undefined,
  });
  console.log(errors);
  React.useEffect(() => {
    const { timeTillDate } = props;
    const compareDate = new Date(timeTillDate);
    const a = setInterval(() => {
      const totalSeconds = (compareDate - new Date()) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const secs = Math.floor(totalSeconds) % 60;
      console.log(totalSeconds);
      if (totalSeconds < 0) {
        clearInterval(a);
        alert('Het thoi gian su kien');
      } else {
        setTime({ days, hours, mins, secs });
      }
    }, 1000);
    return () => {
      clearInterval(a);
    };
  }, [props]);
  const { id } = props;

  // const handleChangeInput = (e) => {
  //   setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  // };
  // console.log(registerInfo);
  const handleFormSubmit = async (data) => {
    try {
      const res = await registerApi.register(data);
      setSuccess(true);
      setDisableBtn(true);
      setTimeout(() => {
        setSuccess(false);
        setDisableBtn(false);
        reset();
      }, 2000);
      console.log(res);
    } catch (error) {
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
        // reset();
      }, 2000);

      console.log(error);
    }
  };
  return (
    <div className='home' ref={ref} id={id}>
      <div className='leftColumn'>
        {' '}
        <div class='clock-wrapper'>
          <div className='icon-section'>
            <ion-icon name='logo-angular'></ion-icon>
          </div>
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

          <div class='subTitle'>
            <p>Hội thảo du học Úc</p>
          </div>
        </div>
      </div>
      <div className='rightColumn'>
        {' '}
        <div className='main-content'>
          <div className='content-wrapper'>
            <div class='title-desc'>
              <div class='t-wrapper'>
                <header class='title'>
                  <img className='logo' src={logo} />
                  <span class='anim-wrapper'>
                    <h2>
                      SATSI - VIỆN ĐÀO TẠO KHỞI NGHIỆP VÀ ỨNG DỤNG KHOA HỌC CÔNG
                      NGHỆ CAO
                    </h2>
                  </span>
                  <span class='anim-wrapper'>
                    <h3>Hội thảo du học Úc</h3>
                  </span>
                </header>
                <div class='desc'>
                  <span class='anim-wrapper'>
                    <p>
                      Du học Úc là lựa chọn lý tưởng của sinh viên quốc tế bởi
                      chất lượng đào tạo xuất sắc, nguồn học bổng dồi dào cùng
                      môi trường sống an toàn thân thiện.
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className='registerForm'>
              <form className='form' onSubmit={handleSubmit(handleFormSubmit)}>
                {success && (
                  <div className='notiSuccess'> đăng ký thành công</div>
                )}
                {failure && (
                  <div className='notiFailure'> đăng ký không thành công</div>
                )}
                <input
                  {...register('name', {
                    required: 'vui lòng nhập trường này',
                  })}
                  // onChange={handleChangeInput}
                  placeholder='Họ tên'
                  name='name'
                  className={errors.name ? 'invalidFormInput' : 'formInput'}
                  type='text'
                />
                {errors.name && (
                  <span className='errorMessage'>{errors.name.message}</span>
                )}
                <input
                  {...register('phone', {
                    required: 'vui lòng nhập trường này',
                    pattern: {
                      value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                      message: 'nhập đúng số điện thoại',
                    },
                  })}
                  // onChange={handleChangeInput}
                  placeholder='Số điện thoại'
                  className={errors.phone ? 'invalidFormInput' : 'formInput'}
                  type='tel'
                />
                {errors.phone && (
                  <span className='errorMessage'>{errors.phone.message}</span>
                )}
                <input
                  {...register('email', {
                    required: 'vui lòng nhập trường này',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'nhập đúng email của bạn',
                    },
                  })}
                  // onChange={handleChangeInput}
                  placeholder='Email'
                  className={errors.email ? 'invalidFormInput' : 'formInput'}
                  type='text'
                />
                {errors.email && (
                  <span className='errorMessage'>{errors.email.message}</span>
                )}
                <input
                  {...register('birthDay', {
                    required: 'vui lòng nhập trường này',
                  })}
                  // onChange={handleChangeInput}
                  placeholder='Ngày sinh'
                  className={errors.birthDay ? 'invalidFormInput' : 'formInput'}
                  type='date'
                />
                {errors.birthDay && (
                  <span className='errorMessage'>
                    {errors.birthDay.message}
                  </span>
                )}
                <input
                  {...register('address', {
                    required: 'vui lòng nhập trường này',
                  })}
                  placeholder='Địa chỉ'
                  className={errors.address ? 'invalidFormInput' : 'formInput'}
                  type='text'
                  // onChange={handleChangeInput}
                />
                {errors.address && (
                  <span className='errorMessage'>{errors.address.message}</span>
                )}
                <div class=' buttonContain'>
                  <button
                    disabled={disabledBtn}
                    type='submit'
                    className='registerBtn'
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
              <img className='qrImg' src={qrImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
