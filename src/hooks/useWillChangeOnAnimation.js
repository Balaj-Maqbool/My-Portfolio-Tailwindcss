import { useEffect } from "react"

const useWillChangeOnAnimation = ({ ref, willChangeClass = 'will-change-[transform,opacity]', animationDelay = 5000 }) => {

    useEffect(() => {
        if (!ref.current) return
        const element = ref.current;
        element.classList.add(willChangeClass)
        // console.log("Before Animation", element.classList);



        const timeOut = setTimeout(() => {
            element.classList.add('will-change-auto');
            element.classList.remove(willChangeClass);
            // console.log("After Animation", element.classList);
        }, animationDelay);


        return () => {
            clearTimeout(timeOut)
            element.classList.add('will-change-auto')
            element.classList.remove(willChangeClass)

        }
    }, [ref, willChangeClass, animationDelay])
}

export default useWillChangeOnAnimation
