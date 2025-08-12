const AboutCards = ({ card, index }) => {
    return (
        // Container for each card with animation delay based on index for staggered effect
        <div className={` will-change-transform about-card`} style={{ animationDelay: ++index + "s" }}>
            {/* Icon container with styling and background */}
            <div aria-hidden='true' className="h-8 w-8 text-white outline-2 outline-primary rounded-full bg-primary/40 flex flex-center">
                {card.icon}
            </div>
            {/* Text content container */}
            <div className="flex flex-col flex-center  max-w-[80%]  md:max-w-[85%]">
                {/* Card title */}
                <h3 className="pointer-events-none  font-normal">{card.title}</h3>
                {/* Card description with smaller font and faded grey gradient */}
                <p className="text-[0.66rem] sm:text-[.7rem] md:text-[.8rem] lg:text-sm pointer-events-none gradient-text-grey opacity-[0.8] font-sans">
                    {card.content}
                </p>
            </div>
        </div>
    )
}

export default AboutCards
