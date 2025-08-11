
const AboutCards = ({ card, index }) => {
    return (
        <div className={`about-card`} style={{ animationDelay: ++index + "s" }}>
            <div className="h-8 w-8 text-white outline-2 outline-primary rounded-full bg-primary/40 flex flex-center">
                {card.icon}
            </div>
            <div className="flex flex-col flex-center  max-w-[80%]  md:max-w-[85%]">
                <h3 className="pointer-events-none  font-normal">{card.title}</h3>
                <p className="text-[0.66rem] sm:text-[.7rem] md:text-[.8rem] lg:text-sm pointer-events-none gradient-text-grey opacity-[0.8] font-sans">{card.content}</p>
            </div>
        </div>
    )
}

export default AboutCards
