import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import useWillChangeOnAnimation from "@/hooks/useWillChangeOnAnimation.js"
import HeroHeading from './HeroHeading'
import HeroIntro from './HeroIntro'
import useInView from "@/hooks/IntersectionObserver.js"
const Hero = () => {
    const heroButtonRef = useRef(null)
    const { ref:headingRef, isVisible:headingIsVisible, } = useInView({ threshold: .6, rootMargirn: '-50px 0px 0px 0px' })
    const { ref:pictureRef, isVisible:pictureIsVisible, } = useInView({ threshold: .5, rootMargirn: '-50px 0px 0px 0px' })
    
    useWillChangeOnAnimation({ ref: heroButtonRef, willChangeClass: "will-change-[transform,opacity]", animationDelay: 6000 })

    return (
        // Hero section container, full viewport height and width, flex layout changes for medium screens
        <section  id='hero' className={` min-h-screen min-w-screen z-50   flex flex-col flex-center md:flex-row `}>

            {/* Left content area with intro text, centered vertically and horizontally */}
            <div ref={headingRef} className={`${headingIsVisible?"will-change-[transform,opacity] animate-when-visible":"will-change-auto animate-when-invisible"} transition-all ease-linear duration-700 md:min-h-screen  min-w-[60%] z-50 md:pb-10 md:py-12 pb-12  flex flex-col flex-center space-y-3 `}>

                {/* Main heading with animated text spans */}
                <HeroHeading />

                {/* Description paragraphs with fade-in delays and styling */}
                <HeroIntro />

                {/* Button with animation and hover scale */}
                <div ref={heroButtonRef} className='animate-fade-in-button hover:scale-[1.05]  md:py-3 transition-all duration-300'>
                    <a className='cosmic-button-primary ' href="#projects">View My Work</a>
                </div>
            </div>

            {/* Uncomment below if you want to add profile image */}
            <div className='flex  flex-center bg-transparent  w-full  sm:py-3 md:py-15 max-sm:pb-0  md:min-h-screen md:min-w-[40%]'>
                <img ref={pictureRef} src="/img-07.jpg" loading='lazy' alt="Balaj Maqbool Profile Pic" className={`${pictureIsVisible?"will-change-[transform,opacity] animate-when-visible":" will-change-auto animate-when-invisible"} transition-all duration-700 ease-in-out profile-image object-cover bg-transparent`}></img>
            </div>

            {/* Scroll down indicator positioned absolute at bottom with animation */}
            <div aria-hidden='true' className=' combo-animation  p-2 z-60  absolute  bottom-0  md:bottom-10 flex flex-col flex-center space-y-2  transition-all duration-1000 '>
                <p className=' text-[.75rem] sm:text-sm xl:text-[1rem] font-mono text-text  '>scroll</p>
                <ArrowDown size={25} className='text-accent font-sans' />
            </div>
        </section>
    )
}

export default Hero
