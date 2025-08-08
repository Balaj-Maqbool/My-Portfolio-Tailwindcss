import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext(null)

export const ScrollProvider = ({ children }) => {

    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        setHasScrolled(window.scrollY > 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])





    return (
        <ScrollContext.Provider value={{hasScrolled,setHasScrolled}}>
            {children}
        </ScrollContext.Provider>
    )
}


