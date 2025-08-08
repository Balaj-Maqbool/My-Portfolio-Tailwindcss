import { ArrowDown } from 'lucide-react'

const Hero = () => {


    return (
        <section  id='hero' className={` min-h-screen min-w-screen z-50 md:min-h-screen  flex flex-col flex-center md:flex-row `}>
            <div className=' md:min-h-screen  min-w-screen md:min-w-[60%] z-10 pb-10 md:py-0  flex flex-col justify-center items-center space-y-3 '>
                <h2 className=' text-2xl sm:text-3xl md:text-[2rem] lg:text-5xl xl:text-6xl w-full  text-center'>
                    <span className='animate-fade-in'>Hi, </span>
                    <span className='animate-fade-in-delay-1'>I'm </span>
                    <span className=' text-pink-600 font-bold dark:text-glow animate-fade-in-delay-2'>Balaj </span>
                    <span className='animate-fade-in-delay-3'>Maqbool</span>
                </h2>
                <div className='w-full text-[.7rem] sm:text-sm lg:text-[.925rem] xl:text-[1rem] text-center text-text'>
                    <p className='animate-fade-in-delay-4 opacity-[.9] font-sans'>A <span className='text-accent'><strong className='font-normal'>MERN</strong></span> stack enthusiast turning ideas into full-stack apps.</p>
                    <p className='animate-fade-in-delay-5 opacity-[.9] font-normal '>From <strong className=' text-text font-semibold'>MongoDB</strong> to <strong className=' text-text font-semibold'>React</strong> — I bring every layer to life.</p>
                    <p className='animate-fade-in-delay-6 opacity-[.9] font-sans'>Let’s <strong className='font-normal text-text'>Code</strong> something amazing.</p>
                </div>
                <div className='animate-fade-in-button hover:scale-[1.05]  py-3 transition-all duration-300'>
                    <a className='cosmic-button-primary ' href="#projects">View My Work</a>
                </div>
            </div>

            <div className='flex  flex-center  w-full py-3 md:py-15 max-sm:pb-0  md:min-h-screen md:min-w-[40%]'>
                <img src="assets/my_profile_pic_2.jpg" alt="Balaj Maqbool Profile Pic" className='profile-image'></img>
            </div>

            <div className=' combo-animation  p-2 z-60  absolute  bottom-4  md:bottom-10 flex flex-col flex-center space-y-2  transition-all duration-1000 '>
                <p className=' text-[.75rem] sm:text-sm xl:text-[1rem] font-mono text-text'>scroll</p>
                <ArrowDown size={25} className='text-accent' />
            </div>
        </section>
    )
}

export default Hero
