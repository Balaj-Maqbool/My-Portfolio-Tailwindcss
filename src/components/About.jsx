
import { aboutCards, paragraphs } from "../data/aboutCards";
import useInView from "../hooks/IntersectionObserver.js";
import SectionHeading from "../utils/SectionHeading.jsx";


const About = () => {
    const { ref, isVisible } = useInView()
    // console.log(ref.current?.id, isVisible);


    return (
        <section ref={ref} id='about' className={`${isVisible ? "scale-100 opacity-100 " : "opacity-0 scale-30"} scroll-mt-[300px] lg:scroll-mt-[200px] transition-all ease-in-out duration-1000 p-5 relative min-h-screen pt-20 z-50`}>
            <SectionHeading p1={"About"} p2={"Me"} />
            <div className='grid grid-cols-1 lg:grid-cols-2 z-10  items-center justify-center gap-5 mt-7 md:px-20 py-5'>

                <div className='flex flex-col flex-center space-y-4 text-text  md:px-10 '>
                    <h1 className=' hidden lg:inline-block md:text-xl  text-accent/85'>MERN Stack Developer</h1>
                    {
                        paragraphs.map((para, index) => <p key={index} className='text-[.7rem] sm:text-sm font-sans opacity-[.85]'>{para}</p>)
                    }
                    <div className='flex flex-center space-x-3 max-w-full  py-3 mt-5 text-text'>
                        <a className='cosmic-button-primary text-[.8] px-3.5  md:px-7 md:font-medium ' href="#footer">Get in Touch</a>
                        <a href="assets/BalajMaqbool_CV.pdf" download={true} className='cosmic-button-secondary'>Download CV</a>
                    </div>
                </div>
                {/* cards */}
                <div className="flex flex-col flex-center space-y-3.5">
                    {
                        aboutCards.map((card, index) => {
                            return <div key={index} className="about-card">
                                <div className="h-8 w-8 text-white outline-2 outline-main rounded-full bg-main/40 flex flex-center">
                                    {card.icon}
                                </div>
                                <div className="flex flex-col flex-center  max-w-[80%]  md:max-w-[85%]">
                                    <h3 className="pointer-events-none font-normal">{card.title}</h3>
                                    <p className="text-[0.66rem] sm:text-[.7rem] md:text-[.8rem] lg:text-sm pointer-events-none text-text opacity-[0.8] font-sans">{card.content}</p>
                                </div>
                            </div>
                        })
                    }
                </div>





            </div>

        </section>
    )
}

export default About
