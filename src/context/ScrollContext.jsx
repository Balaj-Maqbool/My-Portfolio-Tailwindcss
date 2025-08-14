import { createContext, useEffect, useState } from "react";

// Create context to share scroll state across components
export const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  // Track if user has scrolled more than 100px (e.g., to change navbar style)
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track if user scrolled more than 900px (e.g., to show "scroll to top" button)
  const [isVisible, setIsVisible] = useState(false);
  const [arrowDown, setArrowDown] = useState(false)

  // Scroll event handler to update scroll states
  const handleScroll = () => {
    setHasScrolled(window.scrollY > 100);
    setIsVisible(window.scrollY > 900);
    setArrowDown(window.scrollY > 200)

  };

  useEffect(() => {
    // Attach scroll listener on mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Provide scroll states and setters to all child components
  return (
    <ScrollContext.Provider value={{ hasScrolled, setHasScrolled, isVisible, setIsVisible ,arrowDown}}>
      {children}
    </ScrollContext.Provider>
  );
};
