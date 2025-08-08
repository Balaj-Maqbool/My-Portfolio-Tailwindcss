import { useEffect, useState } from "react";
import { skills } from "../data/skills.js";
import SectionHeading from "../utils/SectionHeading.jsx";
import useInView from "../hooks/IntersectionObserver.js";
import SkillCards from "./SkillCards.jsx";



const allCategories = ["all", "frontend", "backend", "tools"];

const Skills = () => {

    const [currentCategory, setCurrentCategory] = useState("all");
    const { ref, isVisible } = useInView(.4);

    const selectedSkills = skills
        .filter(
            (skill) => skill.category === currentCategory || currentCategory === "all"
        )


    return (
        <section ref={ref}  id='skills' className={`${isVisible ? "scale-100 opacity-100 " : "opacity-0 scale-30"} scroll-mt-[250px] lg:scroll-mt-[200px] transition-all ease-in-out duration-1000 p-5 relative min-h-screen pt-20 z-50`} >
            <SectionHeading p1={"My"} p2={"Skills"} />

            <div className=' lg:p-3 p-2 my-3  md:mt-2 flex flex-center space-x-0 sm:space-x-4 md:space-x-2 lg:space-x-9 '>
                {
                    allCategories.map((category, index) => {
                        return <button className={`skill-category-buttons ${category === currentCategory ? "outline-2 outline-accent text-text" : ""}`} onClick={() => (currentCategory !== category && setCurrentCategory(category))} key={index} >{category}</button>
                    })
                }
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4  px-12 sm:px-0 xl:grid-cols-5  lg:px-24  md:py-5 lg:py-10 max-sm:gap-y-5  gap-2 sm:gap-5 md:gap-7 lg:gap-10">
                {
                    selectedSkills.map((skill, index) => (
                        <SkillCards key={`${index}-${currentCategory}`} skill={skill} />
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
