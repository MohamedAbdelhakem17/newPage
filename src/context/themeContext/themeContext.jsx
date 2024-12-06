import { createContext, useContext } from "react";

export const themeContext = createContext()

const useTheme = () => useContext(themeContext)

export default useTheme