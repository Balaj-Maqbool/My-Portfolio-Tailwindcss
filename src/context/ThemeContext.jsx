import { createContext } from "react"
import { useState, useEffect } from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {


    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark")

    useEffect(() => {
        if (isDark) document.documentElement.classList.add("dark")
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }, [isDark])


    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}