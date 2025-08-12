import React from 'react'
import useInView from "@/hooks/IntersectionObserver.js";

const SkillCards = ({ skill }) => {
  // Hook to track if the card is visible in viewport, trigger once only
  const { ref, isVisible } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px 0px 0px",
    triggerOnce: true,
  });

  return (
    <div
      className={`${
        // Apply skill-specific animation if visible, otherwise fade-in default
        isVisible ? `will-change-[transform,opacity] ${skill.animation}` : "animate-when-invisible"
        } transition-all ease-in-out duration-500 rounded-xs z-50 bg-box ring-1 ring-primary/80 p-3 px- lg:p-3.5 sm:p-2.5 w-full hover:scale-110`}
    >
      {/* Skill name */}
      <h3 className="text-start text-[.75rem] sm:text-[.67rem] md:pb-2 md:text-sm">
        {skill.name}
      </h3>

      {/* Progress bar container */}
      <div className="min-w-full mx-auto h-[.25rem] sm:h-1 md:h-1.5 xl-h-2 relative bg-primary/10 origin-top rounded-full">
        {/* Progress bar fill, width based on skill level */}
        <div
          key={`${skill.name + skill.id}`}
          className="h-[.26rem] sm:h-1 md:h-1.5 xl-h-2 rounded-full will-change-[width] animate-grow-bar"
          style={{
            width: skill.level + "%",
            background: skill.color,
          }}
        />
      </div>

      {/* Skill level percentage displayed right-aligned */}
      <div
        ref={ref}
        className="text-end text-[.75rem] font-normal sm:font-normal sm:text-[.67rem] md:text-sm"
      >
        {skill.level}%
      </div>
    </div>
  );
};

export default SkillCards;
