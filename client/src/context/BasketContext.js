import React, {createContext, useState, useEffect} from "react";
import axios from "axios"

export const BasketContext = createContext();

export const BasketProvider = ({children}) => {
    const [basketItems,setBasketItems] = useState([]);
    const [error, setError] = useState(null)

    const addToBasket = (item) => {
        setBasketItems([...basketItems,item])
    }

    const removeFromBasket = (itemId) => {
        setBasketItems(basketItems.filter(item => item.ID !== itemId));
    };

    const placeOrder = async (e) => {

        
      console.log(basketItems)
        try {
            await axios.post("http://localhost:5000/api/place-order", {
                
                basketItems
            }).then(response => {
                console.log("YOUR PLACED ORDER", response)
            })
        }catch(e) {
            setError("Something failed :(")
            console.log(error)
        }
    }    

    return (
        <BasketContext.Provider value ={{basketItems,addToBasket,removeFromBasket,placeOrder}}>
            {children}
        </BasketContext.Provider>
    )
}