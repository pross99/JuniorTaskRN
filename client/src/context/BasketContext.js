import React, {createContext, useState, useEffect} from "react";

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

    return (
        <BasketContext.Provider value ={{basketItems,addToBasket,removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )
}