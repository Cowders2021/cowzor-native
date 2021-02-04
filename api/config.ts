import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: 'our-api-base-url-endpoint'
});

apiClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return {
            ...config,
            headers: {
                // Define request heraders here!
            }
        }
    },
    (err) => Promise.reject(err)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => Promise.reject(error.response.data)
);

const { get, post, put, patch, delete: destroy } = apiClient;
export { get, post, put, patch, destroy };