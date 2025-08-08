import React from 'react'
import useInView from "../hooks/IntersectionObserver.js";

const SkillCards = ({ skill }) => {
    const { ref, isVisible } = useInView(.3)
    return (
        <div ref={ref} className={` ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"} rounded-sm z-50  bg-blue-600/20 ring-1 ring-main/70  p-1.5 lg:p-3.5 sm:p-2.5  w-full  hover:scale-110 transition-all ease-in-out duration-500 animate-scale-out`}>
            <h3 className="text-start text-[.55rem] font-normal sm:text-[.67rem] md:pb-2 md:text-sm ">{skill.name}</h3>
            {
                <div className="min-w-full mx-auto h-0.5 sm:h-1 md:h-1.5 xl-h-2 relative bg-main/10 origin-top   rounded-full ">
                    <div key={`${skill.name}`}
                        className=" h-0.5 sm:h-1 md:h-1.5 xl-h-2 rounded-full animate-grow-bar "
                        style={
                            {
                                width: skill.level + "%",
                                background: skill.color
                            }
                        }   >
                    </div>
                </div>
            }

            <div className="text-end  text-[.55rem] font-normal sm:font-normal sm:text-[.67rem] md:text-sm">{skill.level}%</div>
        </div>

    )
}

export default SkillCards
