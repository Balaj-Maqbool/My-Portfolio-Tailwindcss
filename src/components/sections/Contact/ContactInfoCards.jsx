import React from 'react'
import useInView from '@/hooks/IntersectionObserver.js'

const ContactInfoCards = ({ info }) => {
  // Hook to track visibility with 10% threshold
  const { ref, isVisible } = useInView(0.1)

  return (
    <a
      ref={ref} // Ref for intersection observer
      key={info.id} // Unique key for list rendering
      href={info.link} // Link URL (mailto, tel, or URL)
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security best practice for external links
      className={`
        ${isVisible ? "animate-when-visible" : "animate-when-invisible"} 
        transition-all ease-linear duration-500 z-50 
        flex justify-start md:flex-row sm:h-full 
        w-[90%] space-x-3  md:w-[90%] lg:w-[65%] p-2  `}
      aria-label={"My" + info.title}
    >
      {/* Icon container with responsive sizing and hover effect */}
      <div aria-hidden='true' className="h-6 w-6  md:w-auto md:h-auto flex mr-5 flex-center md:p-4  md:mr-5 text-primary hover:text-primary/70">
        {info.icon}
      </div>

      {/* Text container: title (hidden on small), value with subtle hover scale */}
      <div className="md:min-w-[70%] flex flex-col justify-center items-start">
        <h3 className="text-[.9rem] md:inline-block">{info.title}</h3>
        <p className="font-normal text-[.73rem] md:text-sm text-text/60 hover:scale-[1.05] active:scale-105 hover:gradient-text-blue transition-all ease-in-out duration-200">
          {info.value}
        </p>
      </div>
    </a>
  )
}

export default ContactInfoCards
