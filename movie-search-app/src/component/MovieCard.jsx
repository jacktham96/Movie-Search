import React, { useState } from "react";
import { FaStar, FaRegStar } from 'react-icons/fa';

const MovieCard = ({movie, AddToFav }) => {
    const [isFav , setIsFav] = useState(false)

    const fallbackImage = 'https://via.placeholder.com/150'; // Add a fallback image URL
    
    let roundedVoteAverage = Number((movie.vote_average).toFixed(1))

    const handleAddtoFav = () => {
        setIsFav(!isFav)
        AddToFav(movie)
    }

    return (
        <div className="content-start p-4">
            <div className="image relative">
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : fallbackImage}
                alt={movie.title} 
                className="mb-2" 
                />
                
                <button 
                    className={`absolute top-0 right-0 m-2 text-yellow-500 mt-2 ${isFav ? 'text-yellow-400' : ''}`}
                    onClick={handleAddtoFav}
                >
                {isFav ? <FaStar size={30} /> : <FaRegStar size={30}/>}
                </button>

            </div>

            <div className="content flex justify-between px-2">
                <div>
                    <h2 className="text-2xl font-bold">{movie.title}</h2>
                    <span className="text-sm">{movie.release_date}</span>
                </div>
                <div>
                    <h2 className="text-xl text-yellow-500 font-bold">{roundedVoteAverage}</h2>
                </div>

            </div>




        </div>
    )
}

export default MovieCard