import React from 'react'
import useInView from "../../hooks/IntersectionObserver.js";

const SkillCards = ({ skill }) => {
    const { ref, isVisible } = useInView({ threshold: .1, rootMargin: "0px 0px 0px 0px", triggerOnce: true });
    // console.log(ref,isVisible);
    
    return (
        <div  className={` ${isVisible && skill.animation} rounded-xs z-50  bg-project ring-1 ring-primary/80   p-3 px- lg:p-3.5 sm:p-2.5  w-full  hover:scale-110 `}>
            <h3 className="text-start text-[.75rem]  sm:text-[.67rem] md:pb-2 md:text-sm ">{skill.name}</h3>
            {
                <div className="min-w-full mx-auto h-[.25rem] sm:h-1 md:h-1.5 xl-h-2 relative bg-primary/10 origin-top   rounded-full ">
                    <div  key={`${skill.name}`}
                        className=" h-[.26rem] sm:h-1 md:h-1.5 xl-h-2 rounded-full animate-grow-bar "
                        style={
                            {
                                width: skill.level + "%",
                                background: skill.color
                            }
                        }   >
                    </div>
                </div>
            }

            <div ref={ref} className="text-end  text-[.75rem] font-normal sm:font-normal sm:text-[.67rem] md:text-sm">{skill.level}%</div>
        </div>

    )
}

export default SkillCards
