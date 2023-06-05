import React, {useState} from 'react'


const Search = ({onSearch}) => {
    const [query , setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault(); //防止頁面刷新z
        onSearch(query)  //執行搜索操作
    }

    return(
        <form  onSubmit={handleSearch} className='searchContainer relative'>
            <input 
                type="text" 
                value={query}
                onChange={(event)=>setQuery(event.target.value)}
                placeholder="Enter a movie" 
                className=' p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200'
            />
                               
                <button type='submit' className='absolute top-[20%] right-[10%] translate-x-2 aspect-square cursor-pointer border-none'>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                    />
                  </svg>
                </button>      

        </form>
    )
}



export default Search