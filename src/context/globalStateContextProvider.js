import { useContext , createContext , useState } from "react";


const GlobalContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [clicked , setClicked] = useState()

    return (
        <GlobalContext.Provider
        value={{activeMenu,setActiveMenu}}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext)