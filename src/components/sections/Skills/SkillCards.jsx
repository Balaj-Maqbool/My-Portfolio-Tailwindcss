import React from 'react'
import useInView from "@/hooks/IntersectionObserver.js";

const SkillCards = ({ skill}) => {
  // Hook to track if the card is visible in viewport, trigger once only
  const { ref, isVisible } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px 0px 0px",
    triggerOnce: true,
  });

  return (
    <div
    ref={ref}
      className={`${
        // Apply skill-specific animation if visible, otherwise fade-in default
        isVisible ? `will-change-[transform,opacity] ${skill.animation}` : "animate-when-invisible"
        } transition-all ease-in-out duration-1000 hover:duration-700 rounded-xs z-50 p-3 space-y-1  flex flex-col flex-center  lg:p-3.5 sm:p-2.5 w-full hover:scale-115`}
    >
      {/* Skill name */}
      
      <img loading='lazy' decoding='async' fetchPriority='low' src={skill.icon} alt={""}  className=' size-11 sm2:size-14 md:size-16 bg-transparent' />
      <h3 className="text-center text-[.75rem] sm:text-[.67rem] md:pb-2 md:text-sm ">
        {skill.name}
      </h3>
    </div>
  );
};

export default SkillCards;

