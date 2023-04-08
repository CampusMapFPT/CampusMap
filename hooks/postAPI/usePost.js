import { useEffect, useState } from 'react'
import axios from 'axios';

const usePost = (url, postingData) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function postData() {
            try {
                await axios.post(
                    url,
                    postingData,
                )
                    .then((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });

                setIsLoading(false)
                setIsError(false)
            } catch (e) {
                setIsError(true)
                setIsLoading(false)
            }
        }

        postData();

        return () => {
            ourRequest.cancel('Operation was canceled by user.')
        }

    }, [url])

    return {
        data, isLoading, isError
    }
}

export default usePost