import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    

    useEffect(() => { // runs this function every time the components are rendered, i.e., when state changes
        const abortCont = new AbortController()
        
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else{
                    setIsPending(false)
                    setError(err.message)
                }
            })
        }, 1000);

        return () => abortCont.abort()
    }, [url])  // array is the dependency array for useEffect which tells it if the dependency is in the array run useeffect otherwise not

    return {data, isPending, error}
}

export default useFetch