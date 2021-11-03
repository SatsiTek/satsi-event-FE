import axiosClient from './axiosClient';

const registerApi = {
  register: (data) => {
    const url = 'register';
    return axiosClient.post(url, data);
  },
};
export default registerApi;
