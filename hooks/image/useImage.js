import { useEffect, useState } from "react";

const useImage = (filename) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../public/assets/images/${filename}`) // change relative path to suit your needs
                setImage(response.default)
                console.log('response image', response);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [filename])

    return {
        loading,
        error,
        image,
    }
}
export default useImage