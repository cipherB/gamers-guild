import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import logo from '../assets/gamers-guild-1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav 
      className=' border-b border-site-primary lg:h-[80px] h-[60px] w-full lg:px-12 md:px-8
      px-4 bg-dark bg-opacity-[0.95]' 
    >
      <div className=' hidden md:flex justify-between items-center h-full' >
        <div className=''>
          <img src={logo} alt="logo" className=' h-11 w-24 cursor-pointer' />
        </div>
        <ul className=' list-none flex gap-x-8 items-center'>
          <li><Link to='/' >Our Story</Link></li>
          <li><Link to='/' >Write</Link></li>
          <li><Link to='/sign-up' >Sign Up</Link></li>
          <li>
            <button className="py-2 px-4 rounded-3xl bg-site-primary border-none">
              <Link to='/login' >Get Started</Link>
            </button>
          </li>
        </ul>
      </div>
      <div className='md:hidden flex justify-between items-center h-full' >
        <div>
          <img src={logo} alt="logo" className=' h-9 w-18 cursor-pointer' />
        </div>
        {
          !menu ? 
          <HiMenuAlt3 className='text-2xl font-semibold' onClick={()=>setMenu(true)} /> :
          <IoMdClose className='text-2xl font-semibold' onClick={()=> setMenu(false)} />
        }
        <div 
          className={`fixed left-0 top-[60px] py-4 w-full 
          transition-all duration-700 bg-slate-200 ${
            menu ? 'h-auto visible opacity-100 px-0' : 'h-0 invisible opacity-0 px-10'
          }`}
        >
          <ul className='list-none w-full px-10'>
            <li className='border-b border-slate-500 w-full py-4 text-right ' >
              <Link to='/' className='text-dark font-semibold' >Our Story</Link>
            </li>
            <li className='border-b border-slate-500 w-full py-4 text-right'>
              <Link to='/' className='text-dark font-semibold' >Write</Link>
            </li>
            <li className='border-b border-slate-500 w-full py-4 text-right'>
              <Link to='/sign-up' className='text-dark font-semibold ' >Sign Up</Link>
            </li>
            <li className=' w-full py-4 text-right'>
              <Link to='/login' className='text-dark font-semibold' >Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header