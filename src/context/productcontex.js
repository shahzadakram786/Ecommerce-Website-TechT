// create a context  
// Provider 
// consumer 

import { createContext , useContext } from "react";



const AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value="aleAkram">{children}</AppContext.Provider>
};


//custome hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider , AppContext ,useProductContext}