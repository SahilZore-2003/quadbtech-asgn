import { createContext, useEffect, useState } from "react";


const MovieContext = createContext(null)

const MovieContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [ticket, setTicket] = useState(JSON.parse(localStorage.getItem("ticket")) || [])





    const fetchApi = async () => {
        try {
            setLoading(true)
            const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(true)
        }

    }
    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <MovieContext.Provider value={{ data, loading, error, ticket, setTicket }}>
            {children}
        </MovieContext.Provider>
    )

}

export { MovieContext, MovieContextProvider };
