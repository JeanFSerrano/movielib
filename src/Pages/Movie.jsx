import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkRichtextFill, BsCalendarDate, BsTag } from 'react-icons/bs'
import MovieCard from "../Components/MovieCard";

import './Movie.css'
import { format, parseISO } from "date-fns/esm";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const apiKey = import.meta.env.VITE_API_KEY
const apiURL = import.meta.env.VITE_API

const Movie = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [trailerURL, setTrailerURL] = useState()

    const getMoveDetails = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }


    const formatCurrency = (number) => {
        return number.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    const handleWatchTrailer = async (movie) => {

        if (trailerURL) {
            setTrailerURL('')
        } else {
            await movieTrailer(movie.title || movie.name || movie.original_name)
                .then(url => setTrailerURL(url))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {

        const moveDetailsURL = `${apiURL}${id}?${apiKey}&language=pt-br`

        getMoveDetails(moveDetailsURL)

    }, []);

    return (

        <div className="movie__page" onClick={() => setTrailerURL('')}>
            <button onClick={() => handleWatchTrailer(movie)}>Assistir trailer</button>

            {movie && (
                <MovieCard movie={movie} showLink={false} />)}

            <div className="trailer">
                {trailerURL && <ReactPlayer
                    playing={true}
                    controls={true}
                    url={trailerURL} />}
            </div>

            {movie && (

                <div className="movie__details">

                    <h3>Detalhes do filme:</h3>

                    <h4><BsTag />Sinopse:</h4> <span className="movie__tagline">{movie.tagline}</span>


                    <div className="movie__info">
                        <h4>
                            <BsWallet2 /> Orçamento:
                        </h4>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>

                    <div className="movie__info">
                        <h4>
                            <BsGraphUp /> Receita:
                        </h4>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="movie__info">
                        <h4>
                            <BsHourglassSplit /> Duração:
                        </h4>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className="movie__info">
                        <h4>
                            <BsCalendarDate /> Data de lançamento:
                        </h4>
                        <p>{format(parseISO(movie.release_date), "dd'/'MM'/'yyyy")}</p>
                    </div>
                    <div className="movie__desc">
                        <h4>
                            <BsFillFileEarmarkRichtextFill /> Sinopse:
                        </h4>
                        <p>{movie.overview}</p>
                    </div>

                </div>

            )}

        </div>);
}

export default Movie;