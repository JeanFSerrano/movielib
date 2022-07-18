
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player'
import { useState } from 'react';


import './MovieCard.css'


const imgURL = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true, onClick }) => {

    return (

        <div className='movie-container' onClick={onClick}>
            <img
                src={imgURL + movie.poster_path}
                alt={movie.name}

            />
            <h2>{movie.title}</h2>
            <p>
                Nota: <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}


        </div>


    )
}

export default MovieCard;


