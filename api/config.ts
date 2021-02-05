import axios, { AxiosRequestConfig } from 'axios';

export const httpClient = (url: string, headers?: any) => {
    const apiClient = axios.create({
        baseURL: url
    });

    apiClient.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            return {
                ...config,
                headers
            }
        },
        (err) => Promise.reject(err)
    );

    apiClient.interceptors.response.use(
        (response) => response,
        async (error) => Promise.reject(error.response.data)
    );

    const { get, post, put, patch, delete: destroy } = apiClient;

    return {
        get,
        post,
        put,
        patch,
        destroy
    }
}


