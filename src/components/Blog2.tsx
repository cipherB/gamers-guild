import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  author: string;
  title: string;
  tags: string[];
}

const Blog2:FC<Props> = ({ id, author, title, tags }) => {
  return (
    <div className='w-full flex justify-between gap-x-4' >
      <Link to={`/${author}/${title}/${id}`}>
        <div className='flex items-center mb-2' >
          <img  
            src={`https://joeschmoe.io/api/v1/${author.split(' ')[0]}`}
            alt='author' 
            className='w-8 h-8 rounded-full' 
          />
          <p className='text-sm' >{author} </p>
        </div>
        <h4 className='font-bold md:text-lg mb-3' >{title} </h4>
      </Link>
      <Link to={`/${author}/${title}/${id}`}>
        <img 
          src={`https://source.unsplash.com/1600x900/?${tags[0].toLowerCase()}`} 
          alt={title} 
          className='h-12 w-12' 
        />
      </Link>
    </div>
  )
}

export default Blog2