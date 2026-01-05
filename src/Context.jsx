import { createContext, useState } from "react";

export let CounteContext = createContext()
export function CounteContextProvider ({children})
{
    let[ usertoken , setusertoken] = useState(null)
    
    return <>
        <CounteContext.Provider value={{usertoken , setusertoken}}>
        {children}
        </CounteContext.Provider>
    </>
}
