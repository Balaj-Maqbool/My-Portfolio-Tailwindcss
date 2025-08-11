
import { aboutCards, paragraphs } from "../../data/about.jsx";
import useInView from "../../hooks/IntersectionObserver.js";
import SectionHeading from "../SectionHeading.jsx";
import AboutCards from "./AboutCards.jsx";


const About = () => {
    const { ref, isVisible } = useInView({ threshold: .3, rootMargin: "-100px 0px 0px 0px", triggerOnce: true })
    const { ref: cardContaineRef, isVisible: isCardContainerVisible } = useInView({ threshold: .4, rootMargin: "-100px 0px 0px 0px", triggerOnce: true })
    return (
        <section id='about' className={`  p-5 relative min-h-screen pt-20 z-50`}>
            <SectionHeading p1={"About"} p2={"Me"} />
            <div className='grid grid-cols-1 lg:grid-cols-2 z-10  items-center justify-center gap-5 mt-7 md:px-20 py-5'>

                <div ref={ref} className={`${isVisible ? "scale-100 opacity-100 " : "opacity-0 scale-30"} transition-all ease-in-out duration-1000 flex flex-col flex-center space-y-4 text-text  md:px-10 `}>
                    <h1 className=' hidden lg:inline-block md:text-xl  gradient-text-teal'>MERN Stack Developer</h1>
                    {
                        paragraphs.map((para, index) => <p key={index} className='text-sm md:text-[.95rem] font-sans opacity-[.85]'>{para}</p>)
                    }
                    <div className='flex flex-center space-x-3 max-w-full  py-3 mt-5 text-text'>
                        <a className='cosmic-button-primary text-[.8] px-3.5  md:px-7 md:font-medium ' href="#footer">Get in Touch</a>
                        <a href="assets/BalajMaqbool_CV.pdf" download={true} className='cosmic-button-secondary'>Download CV</a>
                    </div>
                </div>
                {/* cards */}
                <div ref={cardContaineRef} className={` ${isCardContainerVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all ease-linear duration-700 flex flex-col flex-center space-y-3.5`}>
                    {
                        aboutCards.map((card, index) => {
                            return <AboutCards key={index} card={card} index={index} />
                        })
                    }
                </div>





            </div>

        </section>
    )
}

export default About
