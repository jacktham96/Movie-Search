import React from "react"
import { useState,useEffect } from "react"
import MovieCard from "./MovieCard"

const apiKey = 'a380131daa15066bcabd72000b201374';


const FavoritePage = () => {

    const [favorite, setFavorite] = useState([])

    useEffect(()=> {
        const storedFavorite = JSON.parse(localStorage.getItem('favorites'))
        fetchMovie(storedFavorite)
        console.log(storedFavorite);
    },[])

    const fetchMovie = async (favoriteID) => {
        try {
            const moviePromises = favoriteID.map((id)=>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
                    .then((response)=>response.json())
            )
            const movies = await Promise.all(moviePromises)
            setFavorite(movies)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div className="max-w-[1240px] h-[400px] mx-auto p-3">
            <h2>My Favorite</h2>

            {
                favorite.length === 0 ? (
                    <div className="">
                        No Favorite movie found
                    </div>
                ) : (
                    <div>
                        {favorite.map((movie)=> (
                            <MovieCard key={movie.id} movie={movie}/>
                        ))
                        }
                    </div>
                )
            }
        </div>
    )
}



export default FavoritePage