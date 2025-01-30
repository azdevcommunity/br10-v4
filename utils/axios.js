import axios from 'axios';
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access_token');
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
                'Content-Type': config.headers['Content-Type'] || 'application/json',
            };
        }
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
    const refreshToken = Cookies.get('refresh_token');
    if (!refreshToken) {
        console.error("No refresh token available. Logging out...");
        logout();
        return Promise.reject("No refresh token available");
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`, {
            refreshToken,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            return handleAuthTokens(response.data);
        } else {
            throw new Error(`Failed to refresh token. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Failed to refresh token:', error);
        logout();
        return Promise.reject(error);
    }
};

const handleAuthTokens = (data) => {
    if (data.data.accessToken && data.data.refreshToken) {
        Cookies.set('access_token', data.data.accessToken);
        Cookies.set('refresh_token', data.data.refreshToken);
    }
    return data.data.accessToken;
};

const logout = () => {
    ['access_token', 'refresh_token'].forEach(Cookies.remove);
    window.location.href = '/login';
};

export default axiosInstance;