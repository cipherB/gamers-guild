import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  BsHouseFill, 
  BsSearch, 
  BsFileTextFill, 
  BsPersonCircle, 
  BsFillBookmarksFill
} from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import logo from '../assets/gamers-guild-1.png';

const navlinks = [
  {
    title: "",
    icon: <BsHouseFill />
  },
  {
    title: "search",
    icon: <BsSearch />
  },
  {
    title: "bookmarks",
    icon: <BsFillBookmarksFill />
  },
  {
    title: "stories",
    icon: <BsFileTextFill />
  },
  {
    title: "write",
    icon: <FiEdit />
  }
]

const activelink = "text-2xl text-site-primary"
const normallink = "text-2xl text-neutral"

const Sidebar = () => {
  return (
    <div className='h-full w-20 border-r border-neutral py-10 flex items-center flex-col gap-y-24' >
      <Link to="/"><img src={logo} alt="logo" className=' h-9 w-16 cursor-pointer' /></Link>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-y-14 h-full'>
          {
            navlinks.map((link) => (
              <NavLink
                to={`/me/${link.title}`}
                key={link.title}
                className={({ isActive }) => (isActive ? activelink : normallink)}
              >
                {link.icon}
              </NavLink>
            ))
          }
        </div>
        <NavLink
          to={`/me/profile`}
          key={`profile`}
          className={({ isActive }) => (isActive ? activelink : normallink)}
        >
          <BsPersonCircle />
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar