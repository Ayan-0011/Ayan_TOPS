import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

    export const CartContext = createContext(null)

    export const  CartProvider =({ children }) =>{
        const [cartitem, setCartitem] = useState([]);
        
        const addToCart =(product)=>{
        
            const itemIncart = cartitem.find((item)=> item.id === product.id)

            if(itemIncart){
                //increse quantity
                const updatCart = cartitem.map((item)=>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
                setCartitem(updatCart)
                toast.info("Product Quantity Increased!")
            }else{
                // add new item quantity
                setCartitem([...cartitem, {...product, quantity: 1}])
                toast.success("Product Added To Cart!")
               
            }
        }

        const updateQuantity = (cartitem, productId, action )=>{
            setCartitem(cartitem.map(item =>{
                if(item.id === productId){
                    let newUnit = item.quantity;
                    if(action === "increase"){
                        newUnit = newUnit + 1
                         toast.success("Quantity is increased!")
                    }else if(action === "dicrease"){
                        if(newUnit > 1){
                            newUnit = newUnit -1
                             toast.info("Quantity is decreased!")
                        }
                    }
                    return newUnit > 0 ? {...item, quantity: newUnit }:  null
                }
                return item;
            }).filter(item => item != null) // remove item quantity 0 
            )
        }

        const deleteItem = (productId)=>{
            setCartitem(cartitem.filter(item =>item.id !== productId))
            toast.warning("Product is Deleted!")
        }


        return <CartContext.Provider value={{ cartitem, setCartitem, addToCart, updateQuantity, deleteItem}}>
            {children}
        </CartContext.Provider>
    }

    export const useCart = ()=> useContext(CartContext)



