import {useEffect, useState} from 'react'

export const useHover = (ref: any) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const on = () => setIsHover(true)
    const off = () => setIsHover(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }

        ref.current.addEventListener('mouseenter', on)
        ref.current.addEventListener('mousemove', on)
        ref.current.addEventListener('mouseleave', off)

        return () => {
            ref.current.removeEventListener('mouseenter', on)
            ref.current.removeEventListener('mousemove', on)
            ref.current.removeEventListener('mouseleave', off)
        }
    }, [])

    return {
        isHover
    }
}