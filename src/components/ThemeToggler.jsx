import { useContext, useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"

// ThemeToggler component toggles between dark and light theme
const ThemeToggler = () => {
  // get current theme state and setter from context
  const { isDark, setIsDark } = useContext(ThemeContext)

  // toggle theme on button click
  const handleTheme = (e) => {
    e.preventDefault()
    setIsDark(!isDark) // toggle state
    document.documentElement.classList.toggle("dark") // toggle dark class on html root
  }

  return (
    <div className=" hidden w-auto h-auto " >
      {/* button to toggle theme, shows sun if dark, moon if light */}
      <button onClick={handleTheme} className="p-2  duration-1000" aria-label="Theme Toggler">{
        isDark ? <Sun className="text-icon " /> : <Moon className="text-icon hover:text-blue-800 hover:text-glow" />
      }</button>
    </div>
  )
}

export default ThemeToggler
