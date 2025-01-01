import { apiRequest } from "./Utils";


//fetch books by searchTerm
export const fetchBooks = async (searchTerm) => {
    const query = searchTerm ? `?q=${searchTerm}` : '?q=bestsellers';
    return await apiRequest('GET', `/volumes${query}`);
}