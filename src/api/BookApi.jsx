import { apiRequest } from "./Utils";


//fetch books by searchTerm
export const fetchBooks = async (searchTerm) => {
    if(searchTerm == null || searchTerm == "" || searchTerm == "bestsellers"){ //check search term is equal to bestssellers or null
        const data = localStorage.getItem("bestsellers"); //get value from localstorage for bestsellers keyword
        if(data){ //check if data is exists in localstorage

            //if it is exists convert data into the JSON format and return
            const initialData = JSON.parse(data); 
            return initialData;
        }else{
            const query = '?q=bestsellers'; 
            const bookData = await apiRequest('GET', `/volumes${query}`); //if bestseller data is not exists call the API and get data
            localStorage.setItem("bestsellers", JSON.stringify(bookData)); // And set it into the localstorage
            return bookData;
        }
    }else{
        const data = localStorage.getItem(searchTerm);  //if search term is not a bestsellers or null try to get data from localstorage by search term
        if(data){ //check data if exits

            //if data is exists, convert data into the JSON format and return
            const apiData = JSON.parse(data); 
            return apiData;
        }else{
            const query = `?q=${searchTerm}`; 
            const bookData = await apiRequest('GET', `/volumes${query}`); //if localstorage haven't data by that search term call the API and get data
            
            //set that data into the localstorage and return data
            localStorage.setItem(searchTerm,JSON.stringify(bookData)); 
            return bookData;
        }
    }
}