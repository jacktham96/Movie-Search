import { useState , useEffect} from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </div>
  )
}

export default App
