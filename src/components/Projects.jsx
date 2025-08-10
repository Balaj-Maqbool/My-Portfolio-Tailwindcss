import React from 'react'
import { projects } from "../data/projects.js"
import SectionHeading from '../utils/SectionHeading.jsx'
import {ArrowRight } from "lucide-react"
import ProjectCard from './ProjectCard.jsx'



const Projects = () => {

    return (
        <section id='projects' className={`min-h-screen  p-5 relative  pt-20 z-50`}>
            <SectionHeading p1={"Featured"} p2={"Projects"} />

            <div className='w-full text-[0.82rem] md:text-[.9rem] my-5 space-y-1 opacity-90  xl:text-[1rem] text-center gradient-text-grey'>
                <p className='hidden sm:block'>Here are some of the <strong className='gradient-text-pink' >real-world projects</strong> I've built, where ideas meet <strong className='gradient-text-pink'>clean code</strong>, and functionality blends with <strong className='gradient-text-pink'>great design</strong>.</p>
                <p className='hidden sm:block'>Each project reflects my <strong className='gradient-text-pink'>journey</strong>, <strong className='gradient-text-pink'>skills</strong>, and <strong className='gradient-text-pink'>passion</strong> for <strong className='gradient-text-pink'>web development</strong>.</p>

                <p className='sm:hidden'>A glimpse of <strong className='gradient-text-pink font-normal' >real-world projects</strong> where ideas meet <strong className='gradient-text-pink font-normal'>clean code</strong> and <strong className='gradient-text-pink font-normal'>great design</strong>. <span className=''>Built with <strong className='gradient-text-pink font-normal'>precision</strong>, <strong className='gradient-text-pink font-normal'>passion</strong>, and <strong className='gradient-text-pink font-normal'>purpose</strong>.</span></p>
                

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
