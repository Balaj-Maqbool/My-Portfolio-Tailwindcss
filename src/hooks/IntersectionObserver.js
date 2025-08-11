import { useState, useEffect, useRef } from "react";

const useInView = ({ threshold, rootMargin, triggerOnce }) => {
  // State to track if element is visible in viewport
  const [isVisible, setIsVisible] = useState(false);

  // Ref to attach to the DOM element to observe
  const ref = useRef(null);

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        // For each entry (should be only one since one ref)
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting); // Update visibility based on intersection
          // Note: This will toggle visibility on every intersect change
        });
      },
      {
        threshold: threshold,   // Percentage of element visibility to trigger callback
        rootMargin: rootMargin, // Margin around root bounding box
        triggerOnce: triggerOnce 
      }
    );

    // Start observing the ref element if valid DOM element
    if (ref.current instanceof Element) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve element when component unmounts or deps change
    return () => {
      if (ref.current instanceof Element) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty dependency means runs once on mount

  // Return the ref and current visibility state
  return {
    ref,
    isVisible,
  };
};

export default useInView;
