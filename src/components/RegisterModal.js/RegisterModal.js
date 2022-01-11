import React from "react";
import { appendErrors, useForm } from "react-hook-form";
import registerApi from "../../api/registerApi";
import qrImg from "../../asset/qr-img2.jpg";
import "./RegisterModal.css";
const RegisterModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      representer: " ",
    },
  });
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [disabledBtn, setDisableBtn] = React.useState(false);

  const handleFormSubmit = async (data) => {
    try {
      await registerApi.register({ ...data, type: "du hoc uc" });
      setSuccess(true);
      setDisableBtn(true);
      setTimeout(() => {
        setSuccess(false);
        setDisableBtn(false);
        reset();
      }, 2000);
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
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h4 className=" text-center" id="exampleModalLabel">
              Đăng ký tham gia chương trình
            </h4>
          </div>
          <div className="modal-body">
            <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="input-group mb-3 ">
                {/* <label htmlFor='name' class='form-label'>
                  Tên
                </label> */}
                <input
                  id="name"
                  placeholder="Tên"
                  {...register("name", {
                    required: "ban phai nhap truong nay",
                  })}
                  type="text"
                  className={
                    errors.name ? "form-control is-invalid" : "form-control "
                  }
                />
                {errors.name && (
                  <div class="invalid-feedback">{errors.name?.message}</div>
                )}
              </div>
              <div className="input-group mb-3 ">
                {/* <label htmlFor='name' class='form-label'>
                  Tên
                </label> */}
                <input
                  id="address"
                  placeholder="Địa chỉ"
                  {...register("address", {
                    required: "ban phai nhap truong nay",
                  })}
                  type="text"
                  className={
                    errors.address ? "form-control is-invalid" : "form-control "
                  }
                />
                {errors.address && (
                  <div class="invalid-feedback">{errors.address?.message}</div>
                )}
              </div>
              <div className="input-group mb-3 ">
                {/* <label htmlFor='phoneNumber' class='form-label'>
                  Số điện thoại
                </label> */}
                <input
                  id="phoneNumber"
                  placeholder="Số điện thoại"
                  {...register("phoneNumber", {
                    required: "ban phai nhap truong nay",
                    pattern: {
                      value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                      message: "nhập đúng số điện thoại",
                    },
                  })}
                  type="text"
                  className={
                    errors.phoneNumber
                      ? "form-control is-invalid"
                      : "form-control "
                  }
                />
                {errors.phoneNumber && (
                  <div class="invalid-feedback">
                    {errors.phoneNumber?.message}
                  </div>
                )}
              </div>
              <div className="input-group mb-3 ">
                {/* <label htmlFor='email' class='form-label'>
                  Email
                </label> */}
                <input
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "nhập đúng email của bạn",
                    },
                  })}
                  type="text"
                  className={
                    errors.email ? "form-control is-invalid" : "form-control "
                  }
                />
                {errors.email && (
                  <div class="invalid-feedback">{errors.email?.message}</div>
                )}
              </div>
              <div className="input-group mb-3 ">
                {/* <label htmlFor='dateOfBirth' class='form-label'>
                  Ngày sinh
                </label> */}
                <input
                  id="dateOfBirth"
                  placeholder="Ngày sinh"
                  {...register("dateOfBirth", {
                    required: "ban phai nhap truong nay",
                  })}
                  type="date"
                  className={
                    errors.dateOfBirth
                      ? "form-control is-invalid"
                      : "form-control "
                  }
                />
                {errors.dateOfBirth && (
                  <div class="invalid-feedback">
                    {errors.dateOfBirth?.message}
                  </div>
                )}
              </div>
              <div className="mb-3 ">
                {/* <label htmlFor='representer' className='form-label'>
                  Người giới thiệu
                </label> */}
                <input
                  id='code'
                  placeholder='Mã người giới thiệu'
                  {...register('representer')}
                  type='text'
                  className='form-control '
                  // disabled
                />
              </div>
              {success && (
                <div className="notiSuccess mb-2"> đăng ký thành công</div>
              )}
              {failure && (
                <div className="notiFailure mb-2">đăng ký không thành công</div>
              )}
              <button
                disabled={disabledBtn}
                type="submit"
                className="btn btn-primary"
              >
                Đăng ký ngay
              </button>
            </form>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary "
              data-bs-dismiss="modal"
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
