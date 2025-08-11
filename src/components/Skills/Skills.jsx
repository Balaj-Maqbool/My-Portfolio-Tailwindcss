import { useEffect, useState } from "react";
import { skills } from "../../data/skills.js";
import SectionHeading from "../SectionHeading.jsx";
import SkillCards from "./SkillCards.jsx";



const allCategories = ["all", "frontend", "backend", "tools"];

const Skills = () => {

    const [currentCategory, setCurrentCategory] = useState("all");

    const selectedSkills = skills
        .filter(
            (skill) => skill.category === currentCategory || currentCategory === "all"
        )


    return (
        <section id='skills' className={` scroll-my-5 p-5 relative min-h-screen pt-20 z-50`} >
            <SectionHeading p1={"My"} p2={"Skills"} />

            <div className=' lg:p-3 p-2 my-3  md:mt-2 flex flex-center space-x-0 sm:space-x-4 md:space-x-2 lg:space-x-9 '>
                {
                    allCategories.map((category, index) => {
                        return <button className={`skill-category-buttons`} onClick={() => (currentCategory !== category && setCurrentCategory(category))} key={index} ><span className={` ${currentCategory === category ? "border-b-2 border-b-secondary" : ""} pb-1 px-1 gradient-text-grey `}>{category}</span></button>
                    })
                }
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 sm2:grid-cols-3  md2:grid-cols-3 lg:grid-cols-4  px-8 sm:px-5  sm2:px-10   xl:grid-cols-5  lg:px-24  md:py-5 lg:py-10 max-sm:gap-y-5  gap-2 sm:gap-5 md:gap-7 lg:gap-10">
                {
                    selectedSkills.map((skill, index) => (
                        <SkillCards key={index} skill={skill} />
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
