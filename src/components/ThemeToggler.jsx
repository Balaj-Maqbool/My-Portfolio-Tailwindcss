import { useContext, useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggler = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)

  const handleTheme = (e) => {
    e.preventDefault()
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }




  return (
    <div className="w-auto h-auto " >
      <button onClick={handleTheme} className="p-2  duration-1000" aria-label="Theme Toggler">{
        isDark ? <Sun className="text-icon " /> : <Moon className="text-icon hover:text-blue-800 hover:text-glow" />
      }</button>
    </div>
  )
}

export default ThemeToggler
