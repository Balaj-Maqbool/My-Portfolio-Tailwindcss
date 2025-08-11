
import { useState, useEffect, useRef } from "react"

const useInView = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false)


    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting)
                
            })
        }, { threshold: threshold,rootMargin:"-150px 0px 0px -30px" }
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