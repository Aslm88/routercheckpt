import React from 'react';
import {Link} from 'react-router-dom';


const IMG_API ="https://image.tmdb.org/t/p/w1280";
const MovieCard = ({title, poster_path,overview,vote_average}) => {
    return (
    <div className="movie">

        <img src={IMG_API+ poster_path} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>

        <div className="description">
                 <button><Link to={'MovieList/$(result.resultid'}>Overview</Link></button>
                 <p>{overview}</p>
             
        </div>

    </div>
    )
    
};



export default MovieCard ;