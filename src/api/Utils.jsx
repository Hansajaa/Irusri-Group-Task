import axios from "axios";
import process from "process";

const apiClient = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
    timeout: 10000,
});

export const apiRequest = async (method, url, data = null) => {
    try {
        const response = await apiClient({
            method,
            url: `${url}&Key=${process.env.BOOKSTORE_GOOGLE_BOOK_API_KEY}`,
            data,
        });
        return response.data;
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }

};

export default apiClient;