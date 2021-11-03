import axios from 'axios';

// create an axios object with custom config
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

// axiosClient.interceptors.request.use(async (config) => {
// 	const token = await localStorage.getItem("userToken");
// 	if (token) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}

// 	return config;
// });

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // handle error here
    throw error;
    // return error.response;
  }
);

export default axiosClient;
