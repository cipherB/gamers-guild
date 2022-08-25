import React from 'react'
import img1 from '../assets/last-of-us-gamers-guild.jpg';
import img2 from '../assets/call-of-duty-gamers-guild.jpg';
import img3 from '../assets/minecraft-gamers-guild.jpg';
import { carousels } from '../data';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1 ,  
    arrows: false 
  }
  return (
    <div className='w-full border-b border-site-primary lg:pb-6 pb-4'>
      <Slider {...settings}>
        {carousels.map((item, id) => (
          <div key={id}>
            <div className='w-full flex justify-center flex-col gap-y-4 items-center' >
              <img src={item.img} alt='last of us' className=' h-full w-full 
                lg:w-[70vw] lg:h-[55vh]' />
              <div className="w-full lg:pl-44 lg:pr-[20vw]">
                <h1 >
                  <span className='text-site-primary lg:text-6xl text-24xl font-black' >
                    {item.text.split(' ')[0]}
                  </span> {item.text.slice(item.text.split(' ')[0].length, item.text.length)}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel