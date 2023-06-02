import { useState , useEffect} from 'react'
import './index.css'
import Search from './component/Search'
import MovieCard from './component/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1240px] shadow-xl h-[400px] mx-auto p-3'>
      <Search/>
      <MovieCard/>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </div>
  )
}

export default App
