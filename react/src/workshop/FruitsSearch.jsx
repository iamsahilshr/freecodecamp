import { useEffect, useState } from "react"
import "../css/fruits-search.css"
import axios from "axios"

function FruitsSearch() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        if (query.trim() === "") {
            setResults([])
            return
        }

        axios.get(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`)
            .then((res) => {
                setResults(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div id="search-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search-input">Search for fruits:</label>

                    <input
                        id="search-input"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>

                <div id="results">
                    {
                        results.length > 0 ?
                            (
                                results.map((fruit) => {
                                    return (
                                        <p
                                            key={fruit.id}
                                            className="result-item"
                                        >
                                            {fruit.name}
                                        </p>
                                    )
                                })
                            )
                            :
                            <p>No results found</p>
                    }
                </div>
            </div>
        </>
    )
}

export default FruitsSearch