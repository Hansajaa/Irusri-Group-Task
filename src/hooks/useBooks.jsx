import { useEffect, useState } from 'react'
import { fetchBooks } from '../api/BookApi';

export const useBooks = ({ searchTerm }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getBooks = async () => {
            try {
                setError(null);
                setLoading(true);
                const data = await fetchBooks(searchTerm);
                if (data.items == [] || data.items == null || data.items == undefined) {
                    setError("Books Not Found");
                }
                setItems(data.items || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getBooks();
    }, [searchTerm]);

    return { items, loading, error };
}