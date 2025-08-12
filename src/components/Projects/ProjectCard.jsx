import { Github, ExternalLink } from "lucide-react"
import useInView from '../../hooks/IntersectionObserver'

const ProjectCard = ({ project }) => {
    // Observe when card enters viewport with 40% threshold
    const { ref, isVisible } = useInView({threshold:.4})

    return (
        <div 
          ref={ref} 
          className={`${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
          flex flex-col ring-[oklch(57.7%_0.245_27.325)] active:ring-1 hover:ring-1 hover:scale-[1.03] active:scale-105 
          transition-all ease-linear duration-700 z-100 rounded-md bg-box`}
        >
            {/* Project Image Container */}
            <div className='w-full h-[100px] xs:h-[115px] sm:h-[100px] sm2:h-[120px] md:h-[110px] md2:h-[120px] lg:h-[130px] xl:h-[140px] rounded-t-md overflow-hidden'>
                {/* Project Image with smooth zoom on hover/focus */}
                <img 
                  className='w-full h-full object-cover hover:scale-110 focus:scale-110 transition-all ease-in duration-500' 
                  src={project.imageAddress} 
                  alt={project.title} 
                />
            </div>

            {/* Project Tags */}
            <div className='flex flex-center space-x-1.5 p-2 mt-2 text-[.55rem] md:text-[.7rem] text-text/60'>
                {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className='bg-background/10 p-1 px-2 rounded-2xl ring-secondary/50 ring-1 hover:ring-secondary 
                      transition-all cursor-default ease-in duration-100'
                    >
                        <h4 className='font-mono'>{tag}</h4>
                    </span>
                ))}
            </div>

            {/* Project Title */}
            <h3 className='w-full text-center py-2 text-[.8rem] md:text-sm lg:text-[.9rem] xl:text[1rem]'>
                {project.title}
            </h3>

            {/* Project Description */}
            <p className='px-5 max-sm:pb-3 h-18 sm:h-20 md:h-25 text-text/60 text-[.65rem] md:text-[.75rem] font-sans'>
                {project.description}
            </p>

            {/* Links to GitHub and Live Demo */}
            <div className='w-full flex px-3 pb-3 space-x-2.5'>
                <a className='project-links' href={project.githubURL} target='_blank' rel="noopener noreferrer">
                    <Github size={20} />
                </a>
                <a className='project-links' href={project.liveURL} target='_blank' rel="noopener noreferrer">
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
