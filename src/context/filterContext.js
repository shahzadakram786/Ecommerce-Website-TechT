import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontex";
// import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const { products =[] } = useProductContext();

    const initialState = {
        filter_products: [],
        all_products: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // if (Array.isArray(products)) {
            dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
        // } else {
            // console.warn("Products is not an array:", products);
        // }
    }, [products]);

    return <FilterContext.Provider value={{ ...state }}>
        {children}
    </FilterContext.Provider>;
};


//custome hooks

export const useFilterContext = () =>{
    return useContext(FilterContext)
}