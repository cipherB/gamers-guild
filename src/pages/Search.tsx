import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Blog from '../components/Blog';
import { articles } from '../data';

const Search = () => {
  const [search, setSearch] = useState("")
  const[searchResult, setSearchResult] = useState<any>([])

  useEffect(()=> {
    setSearchResult(
      search === "" ? [] :
      articles.filter(item => 
        (item.category.includes(search)) ||
        (item.tags.includes(search)) ? item : null
      )
    )
  },[search])

  const handleChange = (e:any) => {
    setSearch(
      e.target.value
    )
  }
  return (
    <div className='lg:flex justify-center w-full' >
      <div className='lg:w-[1240px] px-4 md:px-9'>
        <div className='w-full justify-center px-4 md:px-9 relative flex items-center mb-10'>
          <input 
            className='lg:w-2/3 w-full border border-white rounded-md pl-8 py-1 md:py-2 
            bg-transparent text-white md:pl-14'
            type="text"
            placeholder='Search'
            name="search"
            value={search}
            onChange={handleChange}
          />
          <BsSearch className='text-white absolute left-6 lg:left-[20%] md:left-14' />
        </div>
        {
          searchResult.length === 0 ? <p>No recent search</p> : 
          searchResult.map((item:any, id:number) => (
            <div key={id} className='w-full mb-8'>
              <Blog 
                id={item.id}
                author={item.name}
                category={item.category}
                date={item.date}
                read_time={item.read_time}
                title={item.title}
                tags={item.tags}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Search