import { useEffect, useState } from "react";

export const useFetch = <T> (url: string, options: RequestInit = {}) => {
    const [ response, setResponse ] = useState<T | null>(null);
    const [ error, setError ] = useState<Error|null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                ...options
            });
            const json = await res.json();

            setResponse(json);
            setLoading(false);
        } catch (error) {
            setError(error as Error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { response, error, loading };
}