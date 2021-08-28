import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "./Reducers";


const Data = createContext();

const Context = ({ children }) => {

    const msg = [];

    let code="";
    // code = localStorage.getItem("fkey");

    const [state, dispatch] = useReducer(dataReducer, { 
        msg: ["Salamt Pagi"],
        code : code
    });
    // console.log("msg:", msg);

    return <Data.Provider value={{ state, dispatch }}>{children}</Data.Provider>;
    
}
 
export default Context;

export const DataState = () =>{
    return useContext(Data)
}