import { createContext, useReducer} from "react";
import LinkReducer from "./LinkReducer";

const LinkContext = createContext()

//Provider 
export const LinkProvider = ({children}) => {
    
    const initialState = {
        links : [
        ],
    };
    
    const [state , dispatch] = useReducer(LinkReducer, initialState)


    // return(
    //     <LinkContext.Provider value = {{}}>
    //         {children}
    //     </LinkContext.Provider>
    // )

    return <LinkContext.Provider value = {{...state , dispatch}}>{children}</LinkContext.Provider>
};


export default LinkContext;