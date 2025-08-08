
import { useState, useEffect, useRef } from "react"

const useInView = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false)


    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting)
                // console.log({
                //     isIntersecting: entry.isIntersecting,
                //     ratio: entry.intersectionRatio,
                //     target: entry.target,
                //     time: entry.time,
                //     rootBounds: entry.rootBounds,
                //     boundingClientRect: entry.boundingClientRect,
                //     intersectionRect: entry.intersectionRect
                // });
            })
        }, { threshold: threshold }
        )
        if (ref.current instanceof Element) {
            observer.observe(ref.current)
        }
        // console.log(observer);



        return (() => {

            if (ref.current instanceof Element) {
                observer.unobserve(ref.current)
            }
        })

    }, [])

    return {
        ref, isVisible
    }

}

export default useInView