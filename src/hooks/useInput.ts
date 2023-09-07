import {useState} from 'react'

export const useInput = (initialValue: '') => {
    const [value, setValue] = useState<string>(initialValue)

    const onChange = (event: any) => setValue(event.target.value)

    const onReset = () => setValue('')

    return {
        value,
        onChange,
        onReset
    }
}
