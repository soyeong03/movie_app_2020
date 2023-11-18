import React from "react";
import PropType from "prop-types";
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: {year, title, summary, poster, genres },
                }}
            >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                        <li key={index} className="movie__genre">{genre}</li>);
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
            </Link>
        </div>
    );
}


Movie.PropType = {
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
};

export default Movie;