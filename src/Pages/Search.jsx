import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

import './Search.css'

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {


    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([0])
    const query = searchParams.get('q')


    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        if (query === null) {
            return navigate('empty-query')
        }
        setMovies(data.results)

    }

    useEffect(() => {

        const searchQuery = `${searchUrl}?${apiKey}&query=${query}&language=pt-br`

        getSearchedMovies(searchQuery)


    }, [query]);


    return (

        <div className="search__container">

            <h2 className="search__title">Mostrando resultados de busca para: <span className="query-text"> {query}</span></h2>

            <div className="search__container-results">
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

                {movies.length === 0 && (
                    <p>Não foram encontrados resultados de busca com {query}</p>
                )}
            </div>

        </div>

    );
}

export default Search;