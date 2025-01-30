import axios from 'axios';
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access_token');
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };

            if (!config.headers['Content-Type']) {
                config.headers['Content-Type'] = 'application/json';
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (originalRequest.url.includes('/refresh')) {
                // If refresh token request itself fails, clear all tokens and redirect to login
                console.error('Refresh token expired or invalid. Logging out...');
                logout();
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers['Authorization'] = `Bearer ${token}`;
                        return axiosInstance(originalRequest);
                    })
                    .catch(err => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const newToken = await refreshToken();
                processQueue(null, newToken);

                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                processQueue(err, null);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

const refreshToken = async () => {
    console.log('refreshToken is calling');
    try {
        const refreshToken = Cookies.get('refresh_token');
        if (!refreshToken) throw new Error("No refresh token available");

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh`, {
            refresh_token: refreshToken,
        });

        const data = response.data;
        return login(data);
    } catch (error) {
        console.error('Failed to refresh token:', error);
        logout(); // Logout user if refresh fails
        return Promise.reject(error);
    }
};

const login = (userData) => {
    const expirationTime = Date.now() + userData.expires_in * 1000;

    Cookies.set('access_token', userData.accessToken);
    Cookies.set('refresh_token', userData.refreshToken);
    Cookies.set('expires_in', expirationTime.toString());

    return userData.accessToken;
};

const logout = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    Cookies.remove('token_type');
    Cookies.remove('expires_in');

    // window.location.href = '/login';
};

export default axiosInstance;