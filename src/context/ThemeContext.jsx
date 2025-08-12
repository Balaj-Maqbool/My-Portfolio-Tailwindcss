import { createContext,useEffect,useState } from "react";


// Create a context to share theme state (dark/light) across components
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // State to track if dark mode is active; default true (dark mode on)
  const [isDark, setIsDark] = useState(true);

  // On initial mount, add "dark" class to root element if dark mode is enabled
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  // Whenever isDark changes, save theme preference in localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Provide theme state and updater function to children components
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
