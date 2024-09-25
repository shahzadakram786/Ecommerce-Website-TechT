// create a context  
// Provider 
// consumer 

import axios from "axios";
import { createContext , useCallback, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"


const AppContext = createContext();

    const API = "https://api.pujakaitem.com/api/products";


    const initialState = {
        isLoading : false ,
        isError : false,
        Products:[],
        featureProducts:[],
        isSingleLoading:false,
        singleProduct:{},
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

//  my 2nd api call for single product page 
const getSingleProduct =useCallback(
    async(url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const singleProduct = res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
            
        }
    },
    
  [],
)
 
        useEffect(()=>{
            getProducts(API)
        },[])


    return <AppContext.Provider value={{...state ,getSingleProduct}}>{children}</AppContext.Provider>
};


//custome hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider , AppContext ,useProductContext}