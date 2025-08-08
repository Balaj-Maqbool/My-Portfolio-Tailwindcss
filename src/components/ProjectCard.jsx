import React from 'react'
import { Github, ExternalLink, User } from "lucide-react"
import useInView from '../hooks/IntersectionObserver'


const ProjectCard = ({ project }) => {
    const { ref, isVisible } = useInView(.4)
    return (
        <div ref={ref} className={`${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}flex flex-col ring-accent active:ring-1 hover:ring-1 hover:scale-[1.03] active:scale-105 transition-all ease-in-out duration-1000  z-100   rounded-md  bg-blue-600/10 `}>
            <div className='w-full h-[100px] xs:h-[115px] sm:h-[100px] sm2:h-[120px] md:h-[110px] md2:h-[120px] lg:h-[130px]  xl:h-[140px]  rounded-t-md overflow-hidden ' >
                <img className='w-full h-full  object-fit hover:scale-110 focus:scale-110  transition-all ease-in duration-500' src={project.imageAddress} alt={project.title} />
            </div>
            <div className='flex flex-center space-x-1.5 p-2 mt-2  text-[.55rem] md:text-[.7rem] text-text/60'>
                {
                    project.tags.map((tag, index) => (

                        <span className='bg-main/10 p-1 px-2 rounded-2xl ring-main/30 ring-1 hover:ring-accent focus:ring-accent transition-all cursor-default ease-in duration-100 ' key={index}>
                            <h4 className='font-mono'>{tag}</h4>
                        </span>
                    )
                    )
                }
            </div>
            <h3 className='w-full text-center py-2 text-[.8rem] md:text-sm lg:text-[.9rem] xl:text[1rem] '>{project.title}</h3>
            <p className=' px-3 h-18 sm:h-20 md:h-25  text-text/50 text-[.65rem] md:text-[.75rem] font-sans' >{project.description}</p>
            <div className=' w-full flex px-3 pb-3 space-x-2.5'>
                <a className='project-links' href={project.githubURL} target='blank'><Github size={20} /></a>
                <a className='project-links' href={project.liveURL} target='blank' ><ExternalLink size={20} /></a>
            </div>
        </div>
    )
}

export default ProjectCard
