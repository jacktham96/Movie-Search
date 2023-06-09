import {React , useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Search from './component/Search';
import MovieCard from './component/MovieCard';
import FavoritePage from './component/FavoritePage';
import Pagination from './component/Pagination';



const apiKey = 'a380131daa15066bcabd72000b201374';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [isFav , setIsFav] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  

  const fetchTrendingMovie = async (page) => {
    try {
      const response = await fetch (
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${page}`
      )
      const data = await response.json()
      if (data.results.length === 0) {
        setIsSearchEmpty(true)
      } else {
        setIsSearchEmpty(false)
        setMovies(data.results);
        setTotalPage(data.total_pages)
        console.log(data);
      }

    } catch (error) {
      console.error(error)
    }
  }


  const searchMovie = async (query,page) => {
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
        setTotalPage(data.total_pages)
        console.log(data);
      }

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrendingMovie(page);
  }, [page]);


  const handleAddtoFav = (movies) => {
    setIsFav((prevFav) => [...prevFav , movies])
  }


  return (
    <Router>
      <div className="max-w-[1240px] h-[400px] mx-auto p-3">
        <h1 className="flex justify-center text-2xl font-bold mb-4">
          <Link to="/">
            Movie Search App
          </Link>
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <nav className="flex justify-between items-center">
                  <div className="text-left p-4">
                    <Search onSearch={searchMovie} />
                  </div>

                  <Link to="/favorite" className="p-4">
                    My Favorite
                  </Link>
                </nav>

                {isSearchEmpty ? (
                  <div className="flex justify-center mt-4 text-red-500">No movies found</div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                      {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} AddToFav={handleAddtoFav} />
                      ))}
                    </div>
                    <Pagination
                      page={page}
                      totalPages={totalPage}
                      onPageChange={setPage}
                    />
                  </>
                )}
              </>
            }
          />
          <Route path="/favorite" element={<FavoritePage isFav={isFav} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;








