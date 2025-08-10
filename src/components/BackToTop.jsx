import { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';
import { ArrowUp } from "lucide-react"

const BackToTop = () => {
    const { isVisible } = useContext(ScrollContext)
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="cosmic-button-secondary border-primary fixed bottom-7  p-1 sm:p-1.5 md:p-2 lg:p-3  right-4 rounded-full z-200 "
            aria-label= "Back to top"
        >
        < ArrowUp className='text-accent' />
        </button >
    );
};

export default BackToTop;
