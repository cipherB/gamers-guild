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

const Article = () => {
  const { id } = useParams();
  // Get the Object of the article with the current href parameter id
  const [article] = useState<any>(
    articles.filter(item => item.id === JSON.parse(id || "") ? item: null)
  )
  // Get a list of articles written by the author
  const [authorArticles] = useState<any>(
    articles.filter(item => item.name === article[0].name ? item : null)
  )

  useEffect(() => {
    console.log("article here", article)
  }, [id])
  
  return (
    <article className='py-8 lg:px-14 md:px-8 px-4 lg:flex justify-center' >
      <div className='lg:max-w-[1350px] lg:flex gap-x-9 '>
        <div className='lg:pr-14 lg:border-r lg:border-neutral lg:min-h-screen' >
          <div className='flex md:justify-between flex-col gap-y-3 md:flex-row w-full mb-8' >
            <div className='flex items-center gap-x-2' >
              <img  
                src={`https://joeschmoe.io/api/v1/${article[0].name.split(' ')[0]}`} 
                alt='author' 
                className='w-20 h-20 rounded-full' 
              />
              <div className='flex flex-col justify-between'>
                <p>{article[0].name} </p>
                <p>{article[0].date} . {article[0].read_time} mins read </p>
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
          <h2 className='font-bold text-2xl mb-6' >{article[0].title} </h2>
          <p className='md:leading-8 leading-6' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam accusantium 
            cumque nulla maxime vitae architecto laborum repellat omnis eveniet, 
            commodi fugiat officia assumenda reiciendis dolores mollitia aliquam 
            laboriosam sit eos, sequi rerum autem non voluptatum cupiditate? 
            Ex officia placeat dolorum illum? Minus autem, qui nulla illum praesentium 
            omnis itaque explicabo, natus sequi deserunt, repudiandae aspernatur voluptas. 
            Deserunt necessitatibus velit temporibus expedita at beatae ut officia dicta illum 
            optio illo earum nesciunt doloremque quod praesentium, ad nobis suscipit ea accusamus 
            libero molestias voluptas? Nostrum, consequatur tempore? Optio itaque, exercitationem 
            veritatis illum perferendis ipsa laudantium, fugiat ea at eveniet molestiae assumenda libero. 
            A illum mollitia fugit nesciunt illo ipsum alias explicabo.
          </p>
          <div className='hidden lg:block w-full my-10' >
            <p className='font-semibold mb-6' >Recommended from Games Guild</p>
            <div className='grid grid-cols-2 gap-x-14 w-full'>
              {
                articles.slice(0,6).map((item:any, id:number) => (
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
        </div>
        <aside className='lg:pr-4 ' >
          <div className='lg:sticky top-[100px]'>
            <div className='hidden lg:block mb-6' >
              <img  
                src={`https://joeschmoe.io/api/v1/${article[0].name.split(' ')[0]}`} 
                alt='author' 
                className='w-32 h-32 rounded-full mb-4' 
              />
              <p className='mb-6 md:text-lg font-bold' >{article[0].name} </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis doloribus 
                delectus dolorem nemo unde fugiat velit quas maxime. Maiores, esse rerum molestias 
                exercitationem unde temporibus inventore iusto dolorum magni quidem. 
              </p>
            </div>
            {
              authorArticles.length > 0 && (
                <div className='my-6 lg:my-0 border-y py-4 border-neutral lg:border-0 lg:py-0' >
                  <h3 className='font-semibold mb-3'>More from {article[0].name} </h3>
                  <div className='w-full' >
                    {
                      authorArticles.length > 0 && authorArticles.slice(0,4).map((item:any, id:number) => (
                        <div key={id} className='mb-8' >
                          <Blog2 
                            author={item.name}
                            id={item.id}
                            tags={item.tags}
                            title={item.title}
                          />
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
          </div>
        </aside>
      </div>
    </article>
  )
}

export default Article