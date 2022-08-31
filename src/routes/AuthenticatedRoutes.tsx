import { Route, Routes, Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import Header from "../components/Header";
import Home from '../pages/Home';
import Search from '../pages/Search';
import Stories from '../pages/Stories';
import Profile from '../pages/Profile';
import Sidebar from '../components/Sidebar';
import logo from '../assets/gamers-guild-1.png';

const UnauthenticatedRoutes = () => {
  return (
    <>
      <div className=' fixed hidden lg:block h-screen top-0 left-0 z-20' >
        <Sidebar />
      </div>
      <div 
        className='h-[60px] bg-slate-700 w-full flex items-center pl-[15%] lg:hidden sticky top-0 z-20'
      >
        <Link to="/me/"><img src={logo} alt="logo" className=' h-9 w-18 cursor-pointer' /></Link>
      </div>
      <div className='lg:pt-10 pt-16 '>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='stories' element={<Stories />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
      <div className='w-full fixed bottom-0 lg:hidden z-20'>
        <BottomBar />
      </div>
    </>
  )
}

export default UnauthenticatedRoutes