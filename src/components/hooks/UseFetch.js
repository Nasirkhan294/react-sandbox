import { useState, useEffect } from 'react'

function UseFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const data = await res.json;

                setData(data);
                setLoading(false)
            } catch (error) {
                setError(error);
                setLoading(false)
            }
        }
        fetchData();
        // eslint-disable-next-line-react-hooks/exhausted-deps
    }, [])

    return (
        data, loading, error
    )
}

export default UseFetch