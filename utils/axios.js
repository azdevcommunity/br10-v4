import axios from 'axios';
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access_token');
        if (token) {
            // Only add Content-Type if it's not explicitly set (e.g., for multipart/form-data)
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };

            if (!config.headers['Content-Type']) {
                config.headers['Content-Type'] = 'application/json';
            }
        }
        console.log('Final headers:', config.headers); // Verify the headers
        return config;
    },
    (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(((response) => response),
    async (error) => {
        if (error.response && error.response.status === 401) {
            try {
                const newToken = await refreshToken()

                axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                const originalRequest = error.config;
                originalRequest.headers ['Authorization'] = `Bearer ${newToken}`;
                return axios(originalRequest);
            } catch (e) {
                return Promise.reject(e);
            }
        }
        return Promise.reject(error);
    });

const refreshToken = async () => {
    console.log('refreshToken is calling');
    try {
        const refreshToken = Cookies.get('refresh_token');
        const response = await axiosInstance.post('/refresh', {
            refresh_token: refreshToken,
        });

        const data = response.data;
        console.log(data);
        return login(data);
    } catch (error) {
        console.error('Failed to refresh token:', error);
        return null;
    }
};


const login = (userData) => {
    const expirationTime = Date.now() + userData.expires_in * 1000;

    Cookies.set('access_token', userData.access_token);
    Cookies.set('refresh_token', userData.refresh_token);
    Cookies.set('token_type', userData.token_type);
    Cookies.set('expires_in', expirationTime.toString());

    return userData.access_token;
};

export default axiosInstance;