import React, { useRef } from 'react'
import useWillChangeOnAnimation from "@/hooks/useWillChangeOnAnimation"

const HeroIntro = () => {

    const paraRef1= useRef(null)
    const paraRef2= useRef(null)
    const paraRef3= useRef(null)

    useWillChangeOnAnimation({ref:paraRef1,willChangeClass:"will-change-[transform,opacity]",animationDelay:4000})
    useWillChangeOnAnimation({ref:paraRef2,willChangeClass:"will-change-[transform,opacity]",animationDelay:4500})
    useWillChangeOnAnimation({ref:paraRef3,willChangeClass:"will-change-[transform,opacity]",animationDelay:5000})

    return (
        <div className='w-full text-[.7rem] lg:text-[1rem] xl:text-[1.1rem] text-center text-text'>
            <p ref={paraRef1} className='animate-fade-in-delay-4 opacity-[.9] font-sans'>
                A <span className='gradient-text-pink'><strong className='font-semibold'>MERN</strong></span> stack enthusiast turning ideas into full-stack apps.
            </p>
            <p ref={paraRef2} className='animate-fade-in-delay-5 opacity-[.9] font-normal '>
                From <strong className='  gradient-text-pink font-semibold'>MongoDB</strong> to <strong className=' gradient-text-pink font-semibold'>React</strong> — I bring every layer to life.
            </p>
            <p ref={paraRef3} className='animate-fade-in-delay-6 opacity-[.9] font-sans'>
                Let’s <strong className='font-normal '>Code</strong> something <span className='gradient-text-pink font-semibold'>AmaZiNg</span>.
            </p>
        </div>
    )
}

export default HeroIntro
