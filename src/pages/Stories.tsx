import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StoriesNav from '../components/StoriesNav';


const Stories = () => {
  return (
    <div>
      <button className='p-3 fixed bottom-16 rounded-full right-6 bg-site-primary lg:hidden' >
        <Link to="/me/write" className='text-white text-lg font-bold' >
          <FiEdit />
        </Link>
      </button>
      <div className='w-full lg:hidden mb-4' >
        <StoriesNav />
      </div>
      <h1>Stories</h1>
    </div>
  )
}

export default Stories