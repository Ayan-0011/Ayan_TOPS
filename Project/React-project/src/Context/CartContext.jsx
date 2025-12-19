import { createContext, useContext, useState } from "react";

    export const CartContext = createContext(null)

    export const  CartProvider =({ children }) =>{
        const [cartitem, setCartitem] = useState([]);
        const addToCart =(product)=>{
            setCartitem([...cartitem, product])
            //console.log(cartitem);
            
        }
        return <CartContext.Provider value={{ cartitem, setCartitem, addToCart}}>
            {children}
        </CartContext.Provider>
    }

    export const useCart = ()=> useContext(CartContext)



