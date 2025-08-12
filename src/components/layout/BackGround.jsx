import { useEffect, useState } from 'react';

const StarBackground = () => {
    // State to hold stars and meteors data
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // Run once on mount to generate stars and meteors
    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            generateStars();
            generateMeteors()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    // Generate star data based on viewport size
    const generateStars = () => {
        // Calculate number of stars proportional to screen area
        const numberOfStars = Math.floor((window.innerHeight * window.innerWidth) / 5000);
        const starCluster = [];

        for (let i = 0; i < numberOfStars; i++) {
            starCluster.push({
                id: i, // unique key for each star
                size: Math.random() * 2 + 1, // star size between 1px to 3px
                x: Math.random() * 100, // horizontal position in %
                y: Math.random() * 100, // vertical position in %
                opacity: Math.random() * .5 + .5, // opacity roughly between 0 and 1
                animationDuration: Math.random() * 3 + 1, // twinkle animation duration in seconds
            });
        }
        setStars(starCluster);
    };

    // Generate fixed number of meteors with random properties
    const generateMeteors = () => {
        const numberOfMeteors = 5;
        const meteorCluster = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            meteorCluster.push({
                id: i, // unique key for each meteor
                x: Math.random() * 100, // horizontal start position %
                y: Math.random() * 35,  // vertical start position (meteors typically appear near the top)
                height: Math.random() * 80 + 80, // length of meteor tail between 80px to 160px
                width: Math.random() * 3.5 + 1.5, // width of meteor tail
                animationDuration: Math.random() * 1 + 2, // fall animation duration
            });
        }
        setMeteors(meteorCluster);
    };

    return (
        <>
            {/* Container fixed behind all content with pointer-events none to avoid blocking UI */}
            <div className='overflow-hidden z-0 fixed max-h-screen max-w-screen perspective-[1000px] inset-0 pointer-events-none '>
                {/* Render stars */}
                {stars.map((star) => (
                    <div
                        className="will-change-[transform,opacity] star animate-star"
                        key={star.id}
                        style={{
                            height: star.size + "px",
                            width: star.size + "px",
                            top: star.y + "%",
                            left: star.x + "%",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",
                        }}

                    ></div>
                ))}

                {/* Render meteors */}
                {meteors.map((meteor) => (
                    <div
                        className="will-change-[transform,opacity] meteor animate-meteor"
                        key={meteor.id}
                        style={{
                            top: meteor.y + "%",
                            left: meteor.x + "%",
                            height: meteor.height + "px",
                            width: meteor.width + "px",
                            animationDuration: meteor.animationDuration + "s",
                        }}

                    ></div>
                ))}
            </div>
        </>
    );
};

export default StarBackground;
