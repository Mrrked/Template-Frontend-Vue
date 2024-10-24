import axios from 'axios';
import router from './router';

const instance = axios.create({
  // Local Server
  // baseURL: 'http://127.0.0.1:8000/api/v1/',
  // IBM Server
  baseURL: 'http://192.168.8.220:9000/api/v1/',       // Modify PORT
  withCredentials: true,
});


const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh');

  try {
    const response = await axios.post('http://192.168.8.220:9000/api/v1/token/refresh/', {
      refresh: refreshToken,
    });

    localStorage.setItem('access', response.data.access);

    return response.data.access;
  } catch (error) {
    // If refresh token is also invalid, clear tokens and redirect to login
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    router.push('/login');
    return null;
  }
}

instance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access');
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle access token expiration
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Log the error for debugging
    console.log('MIDDLEWARE ERROR', error);

    if (error.response?.status === 401) {
      const originalRequest = error.config;

      // Avoid infinite loop
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Try to refresh the access token
          const newAccessToken = await refreshAccessToken();

          if (newAccessToken) {
            // Update the request headers with the new token
            axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

            // Retry the original request with the new token
            return instance(originalRequest);
          }
        } catch (refreshError) {
          // Handle errors during the token refresh process
          console.log('Refresh Token Error:', refreshError);
          // Clear tokens and redirect to login page
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          router.push('/login');
        }
      } else {
        // If the refresh token request also failed, redirect to login
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        router.push('/login');
      }
    }

    return Promise.reject(error);

  }
);

export default instance;