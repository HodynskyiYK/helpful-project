import {useEffect, useRef} from 'react'

export const useScroll = (parentRef: any, childRef: any, callbackFunc: any) => {

    const observer = useRef<any>()

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0,
        }

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callbackFunc()
            }
        }, options)

        observer.current.observe(childRef.current)

        return () => {
            observer.current.unobserve(childRef.current)
        }
    }, [callbackFunc])
}