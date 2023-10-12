import { createContext } from "react";

const ThemeProvider = createContext();

export function ThemeContextProvider({children}){
    return (
        <ThemeProvider.Provider value={{color:"pink"}}/>
    )
}