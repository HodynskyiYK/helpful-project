import {useEffect, useState} from 'react'

export const useRequest = (request: any) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setLoading(true)
        request()
            .then((response: any) => setData(response.data))
            .catch((err: any) => setError(err))
            .finally(() => setLoading(false))

        return () => {
            setData(null)
            setLoading(false)
            setError(null)
        }
    }, [])

    return {
        data, loading, error
    }
}