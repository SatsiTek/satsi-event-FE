import React from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import registerApi from '../../api/registerApi';
import qrImg from '../../asset/qr-img2.jpg';
import './RegisterModal.css';
const RegisterModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [disabledBtn, setDisableBtn] = React.useState(false);

  const handleFormSubmit = async (data) => {
    try {
      console.log(data);
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
      setDisableBtn(true);
      setTimeout(() => {
        setFailure(false);
        setDisableBtn(false);
        reset();
      }, 2000);

      console.log(error);
    }
  };
  return (
    <div className='modal fade' id='exampleModal'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header justify-content-center'>
            <h4 className=' text-center' id='exampleModalLabel'>
              Đăng ký tham gia chương trình
            </h4>
          </div>
          <div className='modal-body'>
            {' '}
            <form className='form' onSubmit={handleSubmit(handleFormSubmit)}>
              <div className='input-group mb-3 '>
                {/* <label htmlFor='name' class='form-label'>
                  Tên
                </label> */}
                <input
                  id='name'
                  placeholder='Tên'
                  {...register('name', {
                    required: 'ban phai nhap truong nay',
                  })}
                  type='text'
                  className={
                    errors.name ? 'form-control is-invalid' : 'form-control '
                  }
                />
                {errors.name && (
                  <div class='invalid-feedback'>{errors.name?.message}</div>
                )}
              </div>
              <div className='input-group mb-3 '>
                {/* <label htmlFor='phone' class='form-label'>
                  Số điện thoại
                </label> */}
                <input
                  id='phone'
                  placeholder='Số điện thoại'
                  {...register('phone', {
                    required: 'ban phai nhap truong nay',
                    pattern: {
                      value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                      message: 'nhập đúng số điện thoại',
                    },
                  })}
                  type='text'
                  className={
                    errors.phone ? 'form-control is-invalid' : 'form-control '
                  }
                />
                {errors.phone && (
                  <div class='invalid-feedback'>{errors.phone?.message}</div>
                )}
              </div>
              <div className='input-group mb-3 '>
                {/* <label htmlFor='email' class='form-label'>
                  Email
                </label> */}
                <input
                  id='email'
                  placeholder='Email'
                  {...register('email', {
                    required: 'ban phai nhap truong nay',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'nhập đúng email của bạn',
                    },
                  })}
                  type='text'
                  className={
                    errors.email ? 'form-control is-invalid' : 'form-control '
                  }
                />
                {errors.email && (
                  <div class='invalid-feedback'>{errors.email?.message}</div>
                )}
              </div>
              <div className='input-group mb-3 '>
                {/* <label htmlFor='birth' class='form-label'>
                  Ngày sinh
                </label> */}
                <input
                  id='birth'
                  placeholder='Ngày sinh'
                  {...register('birth', {
                    required: 'ban phai nhap truong nay',
                  })}
                  type='date'
                  className={
                    errors.birth ? 'form-control is-invalid' : 'form-control '
                  }
                />
                {errors.birth && (
                  <div class='invalid-feedback'>{errors.birth?.message}</div>
                )}
              </div>
              <div className='mb-3 '>
                {/* <label htmlFor='code' className='form-label'>
                  Người giới thiệu
                </label> */}
                <input
                  id='code'
                  placeholder='Mã người giới thiệu'
                  {...register('code')}
                  type='text'
                  value='TDHN'
                  className='form-control '
                  // disabled
                />
              </div>
              {success && (
                <div className='notiSuccess mb-2'> đăng ký thành công</div>
              )}
              {failure && (
                <div className='notiFailure mb-2'>
                  {' '}
                  đăng ký không thành công
                </div>
              )}
              <button
                disabled={disabledBtn}
                type='submit'
                className='btn btn-primary'
              >
                Đăng ký ngay
              </button>
            </form>
          </div>
          <div class='modal-footer justify-content-center'>
            <button
              type='button'
              class='btn btn-secondary '
              data-bs-dismiss='modal'
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
