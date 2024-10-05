// import { createContext, useContext, useEffect, useReducer } from "react";
// import { useProductContext } from "./productcontex";
// import reducer from "../reducer/filterReducer";

// const FilterContext = createContext();

// export const FilterContextProvider = ({childern}) => {

//     const {products} = useProductContext();


//     const initialState = {
//         filter_products:[],
//         all_products:[]
//     }

//     const[state  , dispatch] = useReducer(reducer , initialState)

//         useEffect(()=>{
//             dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
//         },[])


//     return <FilterContext.Provider value={{...state}}>
//         {childern}
//     </FilterContext.Provider>

// }

// //custome hooks

// export const useFilterContext = () =>{
//     return useContext(FilterContext)
// }