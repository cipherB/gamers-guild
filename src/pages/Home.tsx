import { articles, discoverArticles } from '../data';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div>
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
          <div className='w-full lg:border-r lg:border-neutral lg:pr-8 relative' >
            <div 
              className=' sticky w-full bg-dark border-b mb-10 border-neutral top-[60px] 
              lg:top-0 pb-1 pt-4' 
            >
              <h2 className='font-semibold'>For you</h2>
            </div>
            {
              articles.map((item, id) => (
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
      </section>
    </div>
  )
}

export default Home