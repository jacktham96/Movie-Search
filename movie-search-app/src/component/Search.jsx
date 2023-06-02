import React, {useState} from 'react'


const Search = ({onSearchChange}) => {
    const [searchText , setSearchText] = useState('');

    const handleSearch = (event) => {
        event.preventDefault(); //防止頁面刷新
        onSearchChange(searchText)  //執行搜索操作
    }

    return(
        <div className='searchContainer w-[1240px] max-w-full flex justify-center relative' onSubmit={handleSearch}>
            <input 
                type="text" 
                value={searchText}
                onChange={(event)=>setSearchText(event.target.value)}
                placeholder="Enter a movie" 
                className=' p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200'
            />
                               
                <button className='absolute top-[25%] right-[43%] translate-x-2 aspect-square cursor-pointer border-none'>
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

        </div>
    )
}



export default Search