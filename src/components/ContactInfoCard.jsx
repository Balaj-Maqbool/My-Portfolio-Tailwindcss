import React from 'react'
import useInView from '../hooks/IntersectionObserver'

const ContactInfoCard = ({info}) => {
 const{ref,isVisible}= useInView(.1)

    return (
        <a  ref={ref} key={info.id} href={info.link} target='blank' rel='noopener noreferrer' className={`${isVisible?"opacity-100 scale-100":"opacity-0 scale-0"} transition-all ease-linear duration-1000 z-50 flex justify-start sm:flex-col md:flex-row sm:h-full  w-[90%] space-x-3 sm:space-x-0  md:w-[90%] lg:w-[65%]  p-2`}>
            <div className=' h-6 w-6 sm:w-5 sm:h-5 md:w-auto md:h-auto flex mr-5 flex-center md:p-4  sm:mr-2 md:mr-5 text-primary hover:text-primary/70'>
                {info.icon}
            </div>
            <div className='md:min-w-[70%] flex flex-col justify-center  items-start'>
                <h3 className='sm:hidden text-[.9rem] md:inline-block'>{info.title}</h3>
                <p className='font-normal text-[.73rem] md:text-sm text-text/60 hover:scale-[1.05] active:scale-105 hover:gradient-text-blue transition-all ease-in-out duration-200'>{info.value}</p>
            </div>
        </a>
    )
}

export default ContactInfoCard
