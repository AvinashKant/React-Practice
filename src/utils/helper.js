import { useCallback, useEffect, useState } from "react"

export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue)

    function push(element) {
        setArray(a => [...a, element])
    }

    function filter(callback) {
        setArray(a => a.filter(callback))
    }

    function update(index, newElement) {
        setArray(a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ])
    }

    function remove(index) {
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }

    function clear() {
        setArray([])
    }

    return { array, set: setArray, push, filter, update, remove, clear }
}



export default function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
}