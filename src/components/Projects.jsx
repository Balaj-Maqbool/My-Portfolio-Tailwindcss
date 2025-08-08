import React from 'react'
import { projects } from "../data/projects.js"
import SectionHeading from '../utils/SectionHeading.jsx'
import { Github, ExternalLink, ArrowRight } from "lucide-react"



const Projects = () => {

    return (
        <section  id='projects' className={`min-h-screen  p-5 relative  pt-20 z-50`}>
            <SectionHeading p1={"Featured"} p2={"Projects"} />

            <div className='w-full text-[0.7rem] sm:text-[.9rem] my-5 space-y-1 opacity-90 xl:text-[1rem] text-center   text-text'>
                <p className='hidden xl:block'>Here are some of the real-world projects I've built, where ideas meet clean code, and functionality blends with great design.</p>
                <p className='hidden xl:block'>Each project reflects my journey, skills, and passion for web development.</p>

                <p className='hidden md:block'>A glimpse of real-world projects where ideas meet clean code and thoughtful design.</p>
                <p className='hidden md:block'>Built with precision, passion, and purpose.</p>

                <p className='md:hidden'>Real Projects. Real Code. Real Impact.</p>
                <p className='md:hidden'>Each Project, a Step Forward.</p>
            </div>

            <div className='grid grid-cols-1 px-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 p-3 xs:px-5 sm:px-0 sm2:px-10 md:px-0 md2:px-10 lg:px-1 lg2:px-24' >
                {
                    projects.map((project, index) => {
                        return (
                            <div key={index} className='flex flex-col ring-main active:ring-1 hover:ring-1 hover:scale-[1.03] active:scale-105 transition-all ease-in-out duration-300  z-100   rounded-md  bg-blue-600/10 '>
                                <div className='w-full h-[100px] xs:h-[110px] sm:h-[100px] sm2:h-[120px] md:h-[110px] md2:h-[120px] lg:h-[130px]  xl:h-[140px]  rounded-t-md overflow-hidden ' >
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
                    })
                }
            </div>
            <div className='flex flex-center p-3 mt-3'>
                <a href="https://github.com/balaj-maqbool" target='blank' className='cosmic-button-secondary space-x-1'><span className='font-semibold '>Check My GitHub</span><ArrowRight size={21} color='red' /> </a>
            </div>

        </section >
    )
}

export default Projects
