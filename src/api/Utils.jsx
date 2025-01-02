import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const apiRequest = async (method, url, data = null, params = {}) => {

    try {

        // Assign API key from Vite env
        const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

        const requestParams = {
            ...params,
            key: apiKey,
        }

        const response = await apiClient({
            method,
            url,
            data,
            params: requestParams,
        });

        return response.data;
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }

};

export default apiClient;