import { apiRequest } from "./Utils";


//fetch books by searchTerm
export const fetchBooks = async (searchTerm) => {
    const query = searchTerm ? `?q=${searchTerm}` : '?q=datastructure';
    return await apiRequest('GET', `/volumes${query}`);
}