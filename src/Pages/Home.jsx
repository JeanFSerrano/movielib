import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import {CgSpinnerTwoAlt} from 'react-icons/cg'

import './Home.css'

const apiKey = import.meta.env.VITE_API_KEY
const apiURL = import.meta.env.VITE_API

const Home = () => {

    const [trailerURL, setTrailerURL] = useState('')
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }


    useEffect(() => {

        const topRatedURL = `${apiURL}top_rated?${apiKey}&language=pt-br`

        getTopRatedMovies(topRatedURL)


    }, []);


    return (

        <div>

            <h2 className="title__home">Filmes melhores avaliados na plataforma</h2>

            <div className="container" onClick={() => setTrailerURL('') }>
                {topMovies.length === 0 && <p>Carregando dados...  <CgSpinnerTwoAlt/> </p>}

                {topMovies.length > 0 && topMovies.map(movie =>
                    <MovieCard
                        key={movie.id} movie={movie}  />)}
            </div>
           
        </div>);
}

export default Home;