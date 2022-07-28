import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import {ImSpinner} from 'react-icons/im'

import './Home.css'

const Home = () => {

    const apiUrl = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY

    const [trailerURL, setTrailerURL] = useState('')
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedURL = `${apiUrl}top_rated?${apiKey}&language=pt-br`

        getTopRatedMovies(topRatedURL)


    }, []);


    return (

        <div>

            <h2 className="title__home">Filmes melhores avaliados na plataforma</h2>

            <div className="container" onClick={() => setTrailerURL('') }>
                {topMovies.length === 0 && <p>Carregando dados...  <ImSpinner/> </p>}

                {topMovies.length > 0 && topMovies.map(movie =>
                    <MovieCard
                        key={movie.id} movie={movie}  />)}
            </div>
           
        </div>);
}

export default Home;