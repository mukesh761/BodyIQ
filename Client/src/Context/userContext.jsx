import React from "react";
import { useState } from "react";
import { createContext } from "react";
const userContext=createContext()

const UserContextProvider=({children})=>{
    const [user, setuser] = useState(null)
    const [islogin, setislogin] = useState(false)
    return (
        <userContext.Provider value={{user,setuser,islogin,setislogin}}>
            {children}
        </userContext.Provider>
    )
}
export {userContext,UserContextProvider};