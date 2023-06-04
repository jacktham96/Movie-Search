import {React , useState, useEffect } from 'react';
import './index.css';
import Search from './component/Search';
import MovieCard from './component/MovieCard';
import { log } from 'algolia-places-react';


const apiKey = 'a380131daa15066bcabd72000b201374';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);


  const searchMovie = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      );
      const data = await response.json();
      
      if(data.results.length === 0) {
        setIsSearchEmpty(true)
      } else{
        setIsSearchEmpty(false)
        setMovies(data.results);
        console.log(data);
      }

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovie('Batman');
  }, []);

  return (
    <div className="max-w-[1240px] shadow-xl h-[400px] mx-auto p-3">
      <h1 className="flex justify-center text-2xl font-bold mb-4">Movie Search</h1>
      <Search onSearch={searchMovie}  />

      {isSearchEmpty ? (
        <div className="flex justify-center mt-4 text-red-500">No movies found</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">

          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        )

      }

    </div>
  );
};

export default App;
