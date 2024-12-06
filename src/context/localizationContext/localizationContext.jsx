import { createContext, useContext } from "react";

export const localizationsContext = createContext()

const useLocalizationContext = () => useContext(localizationsContext)


export default useLocalizationContext