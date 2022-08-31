import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsHouseFill, BsSearch, BsFileTextFill, BsPersonCircle } from 'react-icons/bs';

const navItems = [
  {
    title: "",
    icon: <BsHouseFill />
  },
  {
    title: "search",
    icon: <BsSearch />
  },
  {
    title: "stories",
    icon: <BsFileTextFill />
  },
  {
    title: "profile",
    icon: <BsPersonCircle />
  }
]

const activelink = "text-lg text-site-primary"
const normallink = "text-lg text-neutral"

const BottomBar = () => {
  return (
    <div className=' bg-slate-700 w-full px-[15%] h-14' >
      <ul className='list-none h-full flex justify-between items-center w-full'>
        {
          navItems.map((link, id) => (
            <li key={id} >
              <NavLink
                to={`/me/${link.title}`}
                key={link.title}
                className={({ isActive }) => (isActive ? activelink : normallink)}
              >
                {link.icon}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default BottomBar