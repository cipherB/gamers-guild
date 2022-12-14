import React from 'react'
import Carousel from '../components/Carousel';
import Blog from '../components/Blog';
import { articles, discoverArticles } from '../data';
import { Link } from 'react-router-dom';
import { slug } from '../components/ReUsables';
import { useArticlesQuery } from '../helper';

const Landing = () => {
  // List of top six trending articles
  const trending = articles.slice(0, 6)

  // List of all articles aside the top 6
  const articleList = articles.slice(6, articles.length)

  // Fetch articles
  const {
    data:articlesData,
    error:articlesError,
    isError:articlesIsError,
    isSuccess:articlesIsSuccess,
    isLoading:articlesIsLoading
  } = useArticlesQuery();

  if (articlesIsError) {
    alert(articlesError)
  }

  const articlesFiltered = articlesData?.data.data.articles.filter(
    (item:any) => item.published === true
  )

  return (
    <main>
      <Carousel />
      <section 
        className=' py-8 lg:px-14 md:px-8 px-4 border-b border-neutral 
        mb-6 lg:flex justify-center' 
      >
        <div className='lg:max-w-[1350px]'>
          <p className='font-semibold mb-4' >Trending on Games Guild</p>
          <div className='md:flex justify-center' >
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-3' >
              {
                trending.map((item, id) => (
                  <div key={id} className='flex gap-x-2 lg:gap-x-4' >
                    <h4 className='text-2xl font-semibold' >0{id+1} </h4>
                    <Link to={`/`}>
                      <div className='flex items-center mb-2' >
                        <img  
                          src={`https://joeschmoe.io/api/v1/${item.name.split(' ')[0]}`} 
                          alt='author' 
                          className='w-10 h-10 rounded-full' 
                        />
                        <p>{item.name} </p>
                      </div>
                      <p className='font-bold mb-3' >{item.title} </p>
                      <div>
                        <p>{item.date} . {item.read_time} mins read </p>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>  
      </section>
      <section className=' py-8 lg:px-14 md:px-8 px-4 lg:flex justify-center' >
        <div className='lg:max-w-[1350px] lg:flex gap-x-9 flex-row-reverse'>
          <aside>
            <div className='lg:sticky top-[100px] pb-10 mb-10'>
              <p className='font-semibold mb-4' >What you might like</p>
              <div className='flex gap-4 flex-wrap'>
                {
                  discoverArticles.map((item, id) => (
                    <p key={id} className="border rounded p-2 cursor-pointer" >{item}</p>
                  ))
                }
              </div>
            </div>
          </aside>
          <div className='w-full' >
            {/* {
              articleList.map((item, id) => (
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
            } */}
            {
              articlesIsLoading ? (<div>loading.....</div>) :
              articlesIsSuccess && articlesFiltered.length < 1 ?
              <h2>No articles available</h2> : 
              articlesFiltered.map((item:any, id:number)=> (
                <div key={id} className='w-full mb-8'>
                  <Blog 
                    id={item._id}
                    author={item.author.username}
                    category={item.category}
                    date={item?.publishedDate ? item.publishedDate.slice(0, 10) : "nil"}
                    read_time={5}
                    title={item.title}
                    tags={item.tags}
                    thumbnail={item.thumbnail}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing