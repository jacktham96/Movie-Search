import React from "react";

const MovieCard = ({movie}) => {
    const fallbackImage = 'https://via.placeholder.com/150'; // Add a fallback image URL

    return (
        <div className="flex flex-col items-center p-4">
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : fallbackImage}
        alt={movie.title} 
        className="mb-2" 
        />
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm">{movie.overview}</p>
      </div>
    )
}

export default MovieCard