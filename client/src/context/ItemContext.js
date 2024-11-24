import React, {createContext, useState, useEffect} from "react";

// create and export the context
export const ItemsContext = createContext();

export const ItemsProvider = ({children}) =>  {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchItems = async() => {
            try {
                const response = await fetch ("http://localhost:5000/api/products");
                const data = await response.json()
                setItems(data)
            } catch (error) {
                setError(error.message)
            }
        };
        fetchItems()
    }, []);



  return (
    <ItemsContext.Provider value={{items,error}}>
        {children}
    </ItemsContext.Provider>
  )
}
