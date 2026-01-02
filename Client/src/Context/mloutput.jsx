import { createContext, useState } from "react"

const mloutputContext=createContext()
const MloutputContextProvider=({children})=>{
    const [output, setoutput] = useState(null)
    return (
        <mloutputContext.Provider value={{output,setoutput}}>
            {children}
        </mloutputContext.Provider>
    )
}
export {mloutputContext,MloutputContextProvider};