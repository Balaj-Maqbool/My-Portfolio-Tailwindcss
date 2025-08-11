
import { useState, useEffect, useRef } from "react"

const useInView = ({threshold,rootMargin,triggerOnce}) => {
    const [isVisible, setIsVisible] = useState(false)


    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting)
                
            })
        }, { 
            threshold: threshold,
            rootMargin:rootMargin,
            triggerOnce:triggerOnce
         }
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