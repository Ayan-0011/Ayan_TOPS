import axios from 'axios'
import { Children, createContext, useContext, useState } from 'react'

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {

    const [data, setData] = useState();

    //fetch all product from api

    const FetchAllproducts = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            const ProductData = response.data
            setData(ProductData)
            console.log(data);
            
               
        }
        catch (error) {
            console.log(error);

        }
    }

    return <DataContext.Provider value={{ data, setData , FetchAllproducts}}>
        {children}
    </DataContext.Provider>
}

export const getData = ()=> useContext(DataContext)
// usecontext ko getdata me store kar liya ab jaha bhi usecontext ko use karna hi to sidha getData ko call kar do