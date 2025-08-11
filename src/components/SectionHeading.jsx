import useInView from "../hooks/IntersectionObserver.js"

// SectionHeading component with animation on scroll using IntersectionObserver hook
const SectionHeading = ({ p1, p2 }) => {
    // useInView hook returns ref to attach and isVisible flag when element is in viewport
    const { ref, isVisible } = useInView({ threshold: .1, rootMargin: "-100px 0px 0px 0px", triggerOnce: true })

    return (
        // Heading with ref attached and animation classes toggled based on visibility
        <h2
            ref={ref}
            className={`${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-1000 ease-in-out text-center text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl  tracking-wide`}
        >
            {/* First part of heading */}
            <span className=''>{p1} </span>
            {/* Second part highlighted with gradient and font weight */}
            <span className='text-main font-semibold gradient-text-blue' >{p2}</span>
        </h2>
    )
}

export default SectionHeading
