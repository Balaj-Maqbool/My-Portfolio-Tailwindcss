import { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    // Get visibility state from scroll context
    const { isVisible } = useContext(ScrollContext);

    // Smooth scroll to top function
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hide button if not visible based on scroll position
    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="cosmic-button-secondary border-primary fixed bottom-7 animate-[bounce_ease-in-out_6s_infinite] p-1.5 sm:p-2 md:p-2 lg:p-3 xl:p-4 right-4 rounded-full z-99"
            aria-label="Back to top"
        >
            <ArrowUp className='text-accent' />
        </button>
    );
};

export default BackToTop;
