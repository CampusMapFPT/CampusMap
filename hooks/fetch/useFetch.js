import { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token
                })
                let data = res && res.data ? res.data : []

                setData(data)
                setIsLoading(false)
                setIsError(false)
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    setIsError(true)
                    setIsLoading(false)
                }
            }
        }

        fetchData();

        return () => {
            ourRequest.cancel('Operation was canceled by user.')
        }

    }, [url])

    return {
        data, isLoading, isError
    }
}

export default useFetch