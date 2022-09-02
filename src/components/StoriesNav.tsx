import { NavLink } from 'react-router-dom';

const activelink = "py-1 px-4 border-b-2 border-neutral"
const normallink = "py-1 px-4"

const StoriesNav = () => {
  return (
    <div className='w-full px-3 flex justify-between' >
      <NavLink
        to={`/me/stories`}
        key={`stories`}
        className={({ isActive }) => (isActive ? activelink : normallink)}
      >
        <p className='text-xs md:text-base' >Stories</p>
      </NavLink>
      <NavLink
        to={`/me/bookmarks`}
        key={`bookmarks`}
        className={({ isActive }) => (isActive ? activelink : normallink)}
      >
        <p className='text-xs md:text-base' >Bookmarks</p>
      </NavLink>
    </div>
  )
}

export default StoriesNav