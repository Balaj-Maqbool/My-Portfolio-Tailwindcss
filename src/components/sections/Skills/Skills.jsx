import { useState } from "react";
import { skills } from "@/data/skills.js"; // Your skills data array
import SectionHeading from "@/components/ui/SectionHeading.jsx"; // Section title component
import SkillCards from "./SkillCards.jsx"; // Individual skill card component

// Define skill categories including 'all' to show all skills
const allCategories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  // State to track currently selected category filter
  const [currentCategory, setCurrentCategory] = useState("all");

  // Filter skills based on selected category, or show all if 'all' is selected
  const selectedSkills = skills.filter(
    (skill) => skill.category === currentCategory || currentCategory === "all"
  );

  return (
    <section
      id="skills"
      className="scroll-my-5 p-5 relative min-h-screen pt-20 z-50"
    >
      {/* Section Heading with "My Skills" */}
      <SectionHeading p1={"My"} p2={"Skills"} />

      {/* Category Filter Buttons */}
      <div className="lg:p-3 p-2 my-3 md:mt-2 flex flex-center space-x-0 sm:space-x-4 md:space-x-2 lg:space-x-9">
        {allCategories.map((category, index) => (
          <button
            className="skill-category-buttons"
            // Only update state if the clicked category differs from current
            onClick={() =>
              currentCategory !== category && setCurrentCategory(category)
            }
          >
            {/* Highlight the active category with a bottom border */}
            <span
              className={`${currentCategory === category ? "border-b-2 border-b-secondary" : ""
                } pb-1 px-1 gradient-text-grey`}
            >
              {category}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid - responsive columns from 1 up to 5 */}
      <div className="grid grid-cols-3  sm2:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 px-4 sm:px-5 sm2:px-10  lg:px-24 md:py-5 lg:py-10 max-sm:gap-y-5 gap-2 sm:gap-5 md:gap-7 lg:gap-10">
        {selectedSkills.map((skill, index) => (
          // Render each skill card; key uses index + color + id to avoid duplicates
          <SkillCards key={`${index + skill.name}`} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
