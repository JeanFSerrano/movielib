
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { ImSpinner } from 'react-icons/im'

import './MovieCard.css'


const MovieCard = ({ movie, showLink = true, onClick }) => {

    const moviePoster = movie.poster_path

    return (

        <div className='movie-container' onClick={onClick}>

            {movie.length === 0 && (
                <div><ImSpinner /></div>
            )}

            <img
                src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
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


