import axiosClient from './axiosClient';

const configApi = {
  getConfig: (data) => {
    const url = 'api/config/filter-active-config';
    return axiosClient.post(url, data, {
      baseURL: 'https://api.satsi.edu.vn/',
    });
  },
};
export default configApi;
