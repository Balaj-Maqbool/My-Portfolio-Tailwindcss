import React from 'react'
import { projects } from "../data/projects.js"
import SectionHeading from '../utils/SectionHeading.jsx'
import {ArrowRight } from "lucide-react"
import ProjectCard from './ProjectCard.jsx'



const Projects = () => {

    return (
        <section id='projects' className={`min-h-screen  p-5 relative  pt-20 z-50`}>
            <SectionHeading p1={"Featured"} p2={"Projects"} />

            <div className='w-full text-[0.8rem] sm:text-[.9rem] my-5 space-y-1 opacity-90 xl:text-[1rem] text-center gradient-text-grey'>
                <p className='hidden xl:block'>Here are some of the real-world projects I've built, where ideas meet clean code, and functionality blends with great design.</p>
                <p className='hidden xl:block'>Each project reflects my journey, skills, and passion for web development.</p>

                <p className=''>A glimpse of real-world projects where ideas meet clean code and thoughtful design.</p>
                <p className=''>Built with precision, passion, and purpose.</p>

                {/* <p className='md:hidden'>Real Projects. Real Code. Real Impact.</p>
                <p className='md:hidden'>Each Project, a Step Forward.</p> */}
            </div>

            <div className='grid grid-cols-1 px-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 p-3 xs:px-7 sm:px-0 sm2:px-10 md:px-0 md2:px-10 lg:px-1 lg2:px-24' >
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} index={index} project={project} />
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
