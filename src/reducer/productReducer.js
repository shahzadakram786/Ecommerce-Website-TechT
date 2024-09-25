const ProductReducer = (state , action) => {

//     if(action.type === "SET_LOADING")
// return {
// ...state
// ,
// isLoading:true,
// }
// }

// if(action.type == "Api_Error"){

//     return {
//         ...state,
//         isLoading:true,
//         isError:true
//     }



switch (action.type) {
    case "SET_LOADING":
        return{
                ...state ,
                isLoading:true,
              
        }
        

    
    case "SET_API_DATA":
        console.log("payload==:",action.payload)
    const featuredData = action.payload.filter((currElem)=> {return currElem.featured === true});
        return {
            ...state,
            isLoading:false,
            Products: action.payload,
            featureProducts:featuredData

        }    
    
    case "Api_Error":
        return{
            ...state,
            isLoading:false,
            isError:true
        }    

    default:
        return state;
}


}



export default ProductReducer