
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import './MovieCard.css'


const MovieCard = ({ movie, showLink = true, onClick }) => {

    return (

        <div className='movie-container' onClick={onClick}>
            <img
                src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
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


