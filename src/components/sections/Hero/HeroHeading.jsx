import { useRef } from 'react'
import useWillChangeOnAnimation from "@/hooks/useWillChangeOnAnimation.js"

const HeroHeading = () => {
    const headingRef1 = useRef(null)
    const headingRef2 = useRef(null)
    const headingRef3 = useRef(null)
    const headingRef4 = useRef(null)

    useWillChangeOnAnimation({ ref: headingRef1, willChangeClass: 'will-change-[opacity]', animationDelay: 1500 })
    useWillChangeOnAnimation({ ref: headingRef2, willChangeClass: 'will-change-[opacity]', animationDelay: 2000 })
    useWillChangeOnAnimation({ ref: headingRef3, willChangeClass: 'will-change-[opacity]', animationDelay: 2500 })
    useWillChangeOnAnimation({ ref: headingRef4, willChangeClass: 'will-change-[opacity]', animationDelay: 3000 })




    return (
        <h2 className=' text-[1.9rem] sm:text-3xl md:text-[2rem] lg:text-5xl xl:text-6xl w-full  text-center'>
            <span ref={headingRef1} className='animate-fade-in'>Hi, </span>
            <span ref={headingRef2} className='animate-fade-in-delay-1'>I'm </span>
            <span ref={headingRef3} className='my-name'>Balaj </span>
            <span ref={headingRef4} className='animate-fade-in-delay-3'>Maqbool</span>
        </h2>
    )
}

export default HeroHeading
