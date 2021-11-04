import axiosClient from './axiosClient';

const registerApi = {
  register: (data) => {
    const url = 'api/user/signIn';
    return axiosClient.post(url, data);
  },
  getAll: () => {
    const url = 'event/all';
    return axiosClient.get(url);
  },
};
export default registerApi;
