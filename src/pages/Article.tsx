import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data';
import { 
  BsTwitter, 
  BsFacebook,
  BsLinkedin,
  BsLink45Deg,
  BsBookmarkPlus
} from 'react-icons/bs';
import Blog2 from '../components/Blog2';
import Blog from '../components/Blog';
import { useArticleQuery } from '../helper';
import { useArticlesQuery } from '../helper';

const Article = () => {
  const { id } = useParams();
  console.log("idd", id)
  
  const {
    data:articleData,
    error:articleError,
    isError:articleIsError,
    isSuccess:articleIsSuccess,
    isLoading:articleIsLoading
  } = useArticleQuery(id);

  const {
    data:articlesData,
    isSuccess:articlesIsSuccess,
  } = useArticlesQuery();
  // Get the Object of the article with the current href parameter id
  console.log("ar", articleData)
  console.log("ars", articlesData)
  // Get a list of articles written by the author
  const [authorArticles] = useState<any>(
    articleIsSuccess ? articlesData?.data.data.articles.filter(
      (item:any) => item.author.username === articleData?.data.data.article.author.username ? item: null
    ) : []
  )
  
  return (
    <article className='py-8 lg:px-14 md:px-8 px-4 lg:flex justify-center' >
      { 
      (articleData !== undefined) ? (
        <div className='lg:max-w-[1350px] lg:flex gap-x-9 '>
          <div className='lg:pr-14 lg:border-r lg:border-neutral lg:min-h-screen' >
            <div className='flex md:justify-between flex-col gap-y-3 md:flex-row w-full mb-8' >
              <div className='flex items-center gap-x-2' >
                <img  
                  src={`https://joeschmoe.io/api/v1/${articleData?.data.data.article.author.username}`} 
                  alt='author' 
                  className='w-20 h-20 rounded-full' 
                />
                <div className='flex flex-col justify-between'>
                  <p>{articleData?.data.data.article.author.username} </p>
                  <p>{articleData?.data.data.article.publishedDate} . {5} mins read </p>
                </div>
              </div>
              <div className='flex items-center gap-x-5' >
                <div className='flex items-center gap-x-3' >
                  <BsTwitter />
                  <BsFacebook />
                  <BsLinkedin />
                  <BsLink45Deg />
                </div>
                <BsBookmarkPlus />
              </div>
            </div>
            <h2 className='font-bold text-2xl mb-6' >{articleData?.data.data.article.title} </h2>
            <p className='md:leading-8 leading-6' dangerouslySetInnerHTML={{__html:articleData?.data.data.article.content}} />
            <div className='hidden lg:block w-full my-10' >
              <p className='font-semibold mb-6' >Recommended from Games Guild</p>
              <div className='grid grid-cols-2 gap-x-14 w-full'>
                {
                  articles.slice(0,6).map((item:any, id:number) => (
                    <div key={id} className='w-full mb-8'>
                      <Blog 
                        id={JSON.stringify(item.id)}
                        author={item.name}
                        category={item.category}
                        date={item.date}
                        read_time={item.read_time}
                        title={item.title}
                        tags={item.tags}
                        thumbnail={null}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <aside className='lg:pr-4 ' >
            <div className='lg:sticky top-[100px]'>
              <div className='hidden lg:block mb-6' >
                <img  
                  src={`https://joeschmoe.io/api/v1/${articleData?.data.data.article.author.username.split(' ')[0]}`} 
                  alt='author' 
                  className='w-32 h-32 rounded-full mb-4' 
                />
                <p className='mb-6 md:text-lg font-bold' >{articleData?.data.data.article.author.username} </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis doloribus 
                  delectus dolorem nemo unde fugiat velit quas maxime. Maiores, esse rerum molestias 
                  exercitationem unde temporibus inventore iusto dolorum magni quidem. 
                </p>
              </div>
              {
                authorArticles.length > 0 && (
                  <div className='my-6 lg:my-0 border-y py-4 border-neutral lg:border-0 lg:py-0' >
                    <h3 className='font-semibold mb-3'>More from {articleData?.data.data.article.author.username} </h3>
                    <div className='w-full' >
                      {
                        authorArticles.length > 0 && authorArticles.slice(0,4).map((item:any, id:number) => (
                          <div key={id} className='mb-8' >
                            {/* <Blog2 
                              author={item.name}
                              id={item.id}
                              tags={item.tags}
                              title={item.title}
                            /> */}
                          </div>
                        ))
                      }
                    </div>
                    <button className=' bg-gray-400 text-sm w-full mx-2 text-black py-2 rounded' >
                      View more 
                    </button>
                  </div>
                )
              }
              <div className='lg:hidden w-full my-6' >
                <p className='font-semibold mb-6' >Recommended from Games Guild</p>
                <div className='w-full'>
                  {
                    articles.slice(0,6).map((item:any, id:number) => (
                      <div key={id} className='w-full mb-8'>
                        <Blog 
                          id={JSON.stringify(item.id)}
                          author={item.name}
                          category={item.category}
                          date={item.date}
                          read_time={item.read_time}
                          title={item.title}
                          tags={item.tags}
                          thumbnail={null}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </aside>
        </div>
      ) : <h1>nothing yet</h1>}
    </article>
  )
}

export default Article