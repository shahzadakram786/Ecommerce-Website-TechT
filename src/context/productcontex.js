// create a context  
// Provider 
// consumer 

import axios from "axios";
import { createContext , useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"


const AppContext = createContext();

    const API = "https://api.pujakaitem.com/api/products";


    const initialState = {
        isLoading : false ,
        isError : false,
        Products:[],
        featureProducts:[],
    }

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) => {
        dispatch({type:"Api_Loading"})
         
try {
    const res = await axios.get(url);
     console.log("response from url or api" , res);
     const Products = await res.data;
     dispatch({type:"SET_API_DATA", payload:Products})
        }
 catch (error) {
    dispatch({type:"Api_Error"})
    
}}

    useEffect(()=>{
        getProducts(API)
    },[])


    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
};


//custome hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider , AppContext ,useProductContext}