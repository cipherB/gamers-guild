import React, { FC } from 'react'

interface Props {
  author: string;
  // thumbnail: string;
  // author_img: string;
  title: string;
  // content: string;
  date: string;
  read_time: number;
  category: string;
  tags: string[];
}

const Blog:FC<Props> = ({ author, title, date, read_time, category, tags  }) => {
  return (
    <div className='w-full flex justify-between gap-x-4' >
      <div>
        <div className='flex items-center mb-2' >
          <img  
            src={`https://joeschmoe.io/api/v1/${author.split(' ')[0]}`}
            alt='author' 
            className='w-10 h-10 rounded-full' 
          />
          <p>{author} </p>
        </div>
        <h4 className='font-bold md:text-3xl mb-3' >{title} </h4>
        <p>blaaaaaaaaaaaaaaaaaa </p>
        <p>
          {date} . {read_time} mins read . <span className='p-1 rounded bg-slate-500'>
            {category} 
          </span> 
        </p>
      </div>
      <div>
        <img 
          src={`https://source.unsplash.com/1600x900/?${tags[0].toLowerCase()}`} 
          alt={title} 
          className='md:h-24 md:w-24 h-12 w-12' 
        />
      </div>
    </div>
  )
}

export default Blog