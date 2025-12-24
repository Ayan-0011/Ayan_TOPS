import axios from 'axios'
import { Children, createContext, useContext, useEffect, useState } from 'react'
import Category from '../Components/Category';

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {

    const [data, setData] = useState();
    const [categoryData, setCategoryData] = useState();

    //fetch all product from api

    const FetchAllproducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/products")
            const ProductData = response.data
            setData(ProductData)
            //console.log(ProductData);

        }
        catch (error) {
            console.log(error);

        }
    }

    //fetch all categorys data 
    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/categories");
            setCategoryData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories()
    }, []);


    return <DataContext.Provider value={{ data, FetchAllproducts, categoryData, fetchCategories }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)
// usecontext ko getdata me store kar liya ab jaha bhi usecontext ko use karna hi to sidha getData ko call kar do