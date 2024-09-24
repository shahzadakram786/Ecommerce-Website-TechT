// create a context  
// Provider 
// consumer 

import axios from "axios";
import { createContext , useContext, useEffect } from "react";



const AppContext = createContext();

const AppProvider = ({children}) => {

    const API = "https://api.pujakaitem.com/api/products";

    const getProducts = async(url) => {
        const res = await axios.get(url);
 console.log("response from url or api" , res);
 const Products = await res.data
    }

    useEffect(()=>{
        getProducts(API)
    },[])


    return <AppContext.Provider value="aleAkram">{children}</AppContext.Provider>
};


//custome hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider , AppContext ,useProductContext}