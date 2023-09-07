import {useCallback, useRef} from 'react'

export const useDebounce = (callbackFunc: any, delay: number) => {
    const timer = useRef<any>(null)

    const debounceCallback = useCallback((...args: any) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callbackFunc(...args)
        }, delay)
    }, [callbackFunc, delay])

    return debounceCallback
}