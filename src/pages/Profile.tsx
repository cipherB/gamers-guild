import React from 'react';
import { BsPersonCircle, BsPencil, BsPlus } from 'react-icons/bs';
import { useStateContext } from '../context/ContextProvider';

const Profile = () => {
  const { authenticate } = useStateContext();
  return (
    <div>
      <section className=' py-8 lg:px-14'>
        <div className='md:px-8 sm:px-4 lg:px-0 border-b border-neutral lg:border-0 mb-4 lg:mb-10 pb-10 lg:pb-0' >
          <div className='flex justify-center mb-3' >
            <BsPersonCircle className='text-7xl lg:text-9xl text-site-primary' />
          </div>
          <p className='text-center font-bold text-xl mb-1' >{authenticate.username}</p>
          <p className='text-center font-semibold opacity-70 text-xl' >{authenticate.fullname} </p>
        </div>
        <div className='lg:grid grid-cols-2 w-full' >
          <div 
            className=' border-b border-neutral lg:border-r lg:border-b-0 pb-4 mb-4
            px-8' 
          >
            <p className='mb-2 lg:mb-6 font-medium flex items-center gap-x-2'>
              Name: {authenticate.fullname} 
              <BsPencil className='text-site-primary cursor-pointer' />
            </p>
            <p className='mb-2 lg:mb-6 font-medium flex items-center gap-x-2'>
              Email: {authenticate.email}
              <BsPencil className='text-site-primary cursor-pointer' />
            </p>
            <p className='mb-2 lg:mb-6 font-medium flex items-center gap-x-2'>
              Username: {authenticate.username}
              <BsPencil className='text-site-primary cursor-pointer' />
            </p>
            <p className='mb-2 lg:mb-6 font-medium'>Social links:</p>
            <div>
              {authenticate.socialLinks.length > 0 && 
              authenticate.socialLinks.map((item:any, id:number) => (
                <p key={id} className='mb-2 lg:mb-6 text-sm lg:text-base' >{item} </p>
              ))}
            </div>
            <p className='mb-2 lg:mb-6 font-medium text-xs lg:text-sm flex items-center gap-x-2 ' >
              Add social link
              <BsPlus className='cursor-pointer' />
            </p>
          </div>
          <div 
            className=' pb-4 lg:pl-10 px-8' 
          >
            <p className='mb-2 lg:mb-6 font-medium cursor-pointer' >Sign Out</p>
            <p className='mb-2 lg:mb-6 font-medium cursor-pointer' >Help</p>
            <p className='mb-2 lg:mb-6 font-medium cursor-pointer' >Terms</p>
            <p className='mb-2 lg:mb-6 font-medium cursor-pointer' >Privacy</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile