import { useEffect, useState } from "react";
import { skills } from "../data/skills.js";
import SectionHeading from "../utils/SectionHeading.jsx";
import useInView from "../hooks/IntersectionObserver.js";



const allCategories = ["all", "frontend", "backend", "tools"];

const Skills = () => {

    const [currentCategory, setCurrentCategory] = useState("all");
    const { ref, isVisible } = useInView(.4);

    const selectedSkills = skills
        .filter(
            (skill) => skill.category === currentCategory || currentCategory === "all"
        )


    return (
        <section ref={ref} id='skills' className={`${isVisible ? "scale-100 opacity-100 " : "opacity-0 scale-30"} scroll-mt-[250px] lg:scroll-mt-[200px] transition-all ease-in-out duration-1000 p-5 relative min-h-screen pt-20 z-50`} >
            <SectionHeading p1={"My"} p2={"Skills"} />

            <div className=' lg:p-3 p-2 my-3  md:mt-2 flex flex-center space-x-0 sm:space-x-4 md:space-x-2 lg:space-x-9 '>
                {
                    allCategories.map((category, index) => {
                        return <button className={`skill-category-buttons ${category === currentCategory ? "outline-2 outline-accent text-text" : ""}`} onClick={() => (currentCategory !== category && setCurrentCategory(category))} key={index} >{category}</button>
                    })
                }
            </div>

            <div className=" grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  px-5 xl:grid-cols-5  lg:px-24  md:py-5 lg:py-10 gap-2 sm:gap-5 md:gap-7 lg:gap-10">
                {
                    selectedSkills.map((skill, index) => (
                        <div key={`${index}-${currentCategory}`} className="  rounded-sm z-50  bg-blue-600/10  p-1.5 lg:p-3.5 sm:p-2.5  w-full  hover:scale-110 transition-all ease-in-out duration-400 animate-scale-out">
                            <h3 className="text-start text-[.55rem] font-normal sm:text-[.67rem] md:pb-2 md:text-sm ">{skill.name}</h3>
                            {<div className="min-w-full mx-auto h-0.5 sm:h-1 md:h-1.5 xl-h-2 relative bg-main/10 origin-top   rounded-full ">
                                <div key={`${skill.name}`}
                                    className=" h-0.5 sm:h-1 md:h-1.5 xl-h-2 rounded-full animate-grow-bar "
                                    style={
                                        {
                                            width: skill.level + "%",
                                            background: skill.color
                                        }
                                    }   >
                                </div>
                            </div>}

                            <div className="text-end  text-[.55rem] font-normal sm:font-normal sm:text-[.67rem] md:text-sm">{skill.level}%</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
