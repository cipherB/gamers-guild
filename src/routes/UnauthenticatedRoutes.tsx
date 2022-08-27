import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Article from '../pages/Article';
import Homepage from '../pages/Homepage';

const UnauthenticatedRoutes = () => {
  return (
    <>
      <div className=' sticky lg:fixed w-full top-0 z-20' >
        <Header />
      </div>
      <div className='lg:pt-[80px] min-h-screen '>
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path=':author/:title/:id' element={<Article />} />
        </Routes>
      </div>
      <div className='w-full md:mt-11 mt-8'>
        <Footer />
      </div>
    </>
  )
}

export default UnauthenticatedRoutes