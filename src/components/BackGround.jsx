import React, {  useEffect, useState } from 'react'

const StarBackground = () => {


    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])


    useEffect(() => {
        generateStars();
        generateMeteors();
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerHeight * window.innerWidth) / 5000);
        const starCluster = [];
        for (let i = 0; i < numberOfStars; i++) {
            starCluster.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 5 + 5,
                animationDuration: Math.random() * 3 + 1
            })
        }
        setStars(starCluster)
    }

    const generateMeteors = () => {
        const numberOfMeteors = 5;
        const meteorCluster = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            meteorCluster.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 30,
                height: Math.random() * 80 + 80,
                width: Math.random() * 3.5 + 1.5,
                animationDuration: Math.random() * 1 + 2,
            })
        }
        setMeteors(meteorCluster)
    }

    return (
        <>
            <div className='overflow-hidden z-0 fixed max-h-screen max-w-screen perspective-[1000px] inset-0 pointer-events-none '>
                {
                    stars.map((star) => {
                        return <div key={star.id} style={
                            {
                                height: star.size + "px",
                                width: star.size + "px",
                                top: star.y + "%",
                                left: star.x + "%",
                                opacity: star.opacity,
                                animationDuration: star.animationDuration + "s",
                            }
                        } className="star animate-star "></div>
                    })
                }

                {
                    meteors.map((meteor) => {
                        return <div key={meteor.id} style={
                            {
                                top: meteor.y + "%",
                                left: meteor.x + "%",
                                height: meteor.height + "px",
                                width: meteor.width + "px",
                                animationDuration: meteor.animationDuration + "s",
                            }
                        } className="meteor animate-meteor"></div>
                    })
                }
            </div>
        </>
    )
}

export default StarBackground
