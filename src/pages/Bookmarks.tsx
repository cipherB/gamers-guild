import React from 'react';
import StoriesNav from '../components/StoriesNav';

const Bookmarks = () => {
  return (
    <div>
      <div className='w-full lg:hidden mb-4' >
        <StoriesNav />
      </div>
      <h1>Bookmarks</h1>
    </div>
  )
}

export default Bookmarks